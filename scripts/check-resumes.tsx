import React from "react";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { render } from "takumi-pdf";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import type { TextItem } from "pdfjs-dist/types/src/display/api";
import { career } from "../src/data/career";
import { resumes, type ResumeVariant } from "../src/data/resumes";
import { type Career, variantIds, validateData } from "../src/lib/pdf/data";
import { generateResumes } from "../src/lib/pdf/generate";
import { fontFiles, loadFonts } from "../src/lib/pdf/fonts";
import { inspectResume } from "../src/lib/pdf/inspect";
import { Heading } from "../src/components/pdf/pdfcn/heading";
import { Text } from "../src/components/pdf/pdfcn/text";
import { View, pointToCssPixel } from "../src/components/pdf/pdfcn/primitives";

const exec = promisify(execFile);
const root = fileURLToPath(new URL("../", import.meta.url));
const script = fileURLToPath(import.meta.url);
const tsxLoader = fileURLToPath(new URL("../node_modules/tsx/dist/loader.mjs", import.meta.url));
const fresh = () => ({ data: structuredClone(career), variants: structuredClone(resumes) });
const fileNames = variantIds.map((id) => `${id}.pdf`);

async function snapshot(dir: string) {
  return Promise.all(fileNames.map((name) => fs.readFile(path.join(dir, name))));
}

async function assertUnchanged(dir: string, before: Buffer[]) {
  assert.deepEqual(await snapshot(dir), before, "A failing run replaced saved PDFs");
  assert.deepEqual((await fs.readdir(dir)).sort(), [...fileNames].sort(), "Temporary files were not cleaned up");
}

async function worker(dir: string, check = false) {
  // Separate Node process, and a cwd outside the repository. Font/data paths
  // must resolve from module URLs, not the invocation directory.
  await exec(process.execPath, [
    "--import", tsxLoader, script, "--worker", dir, ...(check ? ["--check"] : []),
  ], { cwd: tmpdir(), timeout: 120_000 });
}

async function checkCapabilities() {
  const fonts = await loadFonts();
  const jsx = (
    <View>
      <Heading level={1}>{career.name}</Heading>
      <Heading>Local font and live-text capability</Heading>
      <Text>Selectable Inter body at 10.5pt.</Text>
      <Text href={`mailto:${career.email}`}>{career.email}</Text>
      <Text weight="semibold">Inter emphasis at 600.</Text>
    </View>
  );
  const options = {
    size: "a4" as const, margin: pointToCssPixel(42), fonts,
    metadata: { creationDate: career.updatedAt },
  };
  const first = Buffer.from(await render(jsx, options));
  assert(first.equals(Buffer.from(await render(jsx, options))), "Repeated renders are not byte-identical");
  const pdf = await getDocument({ data: new Uint8Array(first), useSystemFonts: false }).promise;
  try {
    assert.equal(pdf.numPages, 1);
    const page = await pdf.getPage(1);
    const content = await page.getTextContent();
    const items = content.items.filter((item): item is TextItem => "str" in item && !!item.str.trim());
    assert(items.some((item) => item.str.includes("Selectable Inter body")));
    assert(items.every((item) => Math.hypot(item.transform[2], item.transform[3]) >= 10.5));
    assert((await page.getAnnotations()).some((a) => a.url === `mailto:${career.email}`));
  } finally {
    await pdf.destroy();
  }
  // Real PDF fixtures exercise the inspector, not a guessed page-token count.
  const small = await render(<Text style={{ fontSize: 9 }}>Too small</Text>, options);
  await assert.rejects(inspectResume(small, career, resumes[0]), /text below 10.5pt/);
  const wide = await render(<Text>Wrong page geometry</Text>, { ...options, size: "letter" });
  await assert.rejects(inspectResume(wide, career, resumes[0]), /not A4/);
  const blank = await render(<View />, options);
  await assert.rejects(inspectResume(blank, career, resumes[0]), /no real text/);
  console.log("PASS local-font, live-text, 10.5pt unit mapping, links and PDF geometry capability");
}

async function main() {
  if (process.argv[2] === "--worker") {
    assert(process.argv[3], "Missing isolated worker output directory");
    await generateResumes({ outputDir: process.argv[3], check: process.argv[4] === "--check" });
    return;
  }
  assert.equal(process.argv.length, 2, "Unknown regression flags");
  const temp = await fs.mkdtemp(path.join(tmpdir(), "resume-regressions-"));
  try {
    await checkCapabilities();
    const first = path.join(temp, "first");
    const second = path.join(temp, "second");
    await worker(first);
    await worker(second);
    const original = await snapshot(first);
    assert.deepEqual(original, await snapshot(second), "Separate processes generated different PDF bytes");
    await worker(first, true);
    console.log("PASS exact byte identity across separate processes and foreign working directory");
    original.forEach((buffer, index) => {
      console.log(`${variantIds[index]} SHA-256 ${createHash("sha256").update(buffer).digest("hex")}`);
    });

    // Missing/stale checks must not repair files or hide the error.
    await fs.unlink(path.join(first, "general.pdf"));
    await assert.rejects(generateResumes({ outputDir: first, check: true }), /general: missing/);
    await assert.rejects(fs.stat(path.join(first, "general.pdf")), { code: "ENOENT" });
    assert((await fs.readFile(path.join(first, "backend.pdf"))).equals(original[1]));
    await fs.writeFile(path.join(first, "general.pdf"), original[0]);
    await fs.writeFile(path.join(first, "backend.pdf"), Buffer.from("stale sentinel"));
    const stale = await snapshot(first);
    await assert.rejects(generateResumes({ outputDir: first, check: true }), /backend: stale/);
    await assertUnchanged(first, stale);
    await fs.writeFile(path.join(first, "backend.pdf"), original[1]);
    console.log("PASS missing/stale artifacts fail explicitly without replacement");

    type Mutation = (data: Career, variants: ResumeVariant[]) => void;
    const cases: [string, Mutation, RegExp][] = [
      ["unknown variant", (_, v) => { v[0].id = "tablet"; }, /Unknown resume id/],
      ["unsafe variant id", (_, v) => { v[0].id = "../general"; }, /Invalid or duplicate resume id/],
      ["duplicate variant", (_, v) => { v[1].id = v[0].id; }, /duplicate resume id/],
      ["missing variant", (_, v) => { v.pop(); }, /Expected four/],
      ["duplicate job", (d) => { d.work.push(structuredClone(d.work[0])); }, /duplicate work id/],
      ["invalid job id", (d) => { d.work[0].id = "Invalid/Job"; }, /Invalid or duplicate work id/],
      ["incomplete job", (d) => { d.work[0].role = ""; }, /Incomplete work entry/],
      ["no jobs", (d) => { d.work = []; }, /At least one work entry/],
      ["missing job selection", (d, v) => { delete v[0].bullets[d.work[0].id]; }, /select every work entry/],
      ["unknown job selection", (_, v) => { v[0].bullets.unknown = []; }, /select every work entry/],
      ["unknown bullet", (d, v) => { v[0].bullets[d.work[0].id] = ["unknown"]; }, /Missing bullet/],
      ["inherited bullet", (d, v) => { v[0].bullets[d.work[0].id] = ["toString"]; }, /Missing bullet/],
      ["duplicate bullet", (d, v) => {
        const id = Object.keys(d.work[0].bullets)[0]; v[0].bullets[d.work[0].id] = [id, id];
      }, /Invalid bullet selection/],
      ["duplicate canonical project", (d) => { d.projects.push(structuredClone(d.projects[0])); }, /duplicate project id/],
      ["invalid canonical project id", (d) => { d.projects[0].id = "../project"; }, /Invalid or duplicate project id/],
      ["unknown selected project", (_, v) => { v[0].projects = ["unknown"]; }, /Missing project/],
      ["duplicate selected project", (_, v) => { v[0].projects.push(v[0].projects[0]); }, /duplicate project selection/],
      ["empty project selection", (_, v) => { v[0].projects = []; }, /Empty or duplicate project selection/],
      ["missing summary", (_, v) => { v[0].summary = ""; }, /Incomplete resume variant/],
      ["invalid date", (d) => { d.updatedAt = "invalid"; }, /Invalid career.updatedAt/],
      ["rollover date", (d) => { d.updatedAt = "2026-02-30"; }, /Invalid career.updatedAt/],
      ["noncanonical date", (d) => { d.updatedAt = "2026-9-11"; }, /Invalid career.updatedAt/],
      // Fails on the last variant after three successful buffers. No output
      // may be replaced until every document has passed the inspector.
      ["last variant overflow", (_, v) => { v[3].summary = v[3].summary.repeat(30); }, /requires \d+ pages; maximum is two/],
    ];
    for (const [name, mutate, expected] of cases) {
      const fixture = fresh();
      mutate(fixture.data, fixture.variants);
      await assert.rejects(generateResumes({ outputDir: first, ...fixture }), expected, name);
      await assertUnchanged(first, original);
      console.log(`PASS ${name}: failure preserves all saved bytes`);
    }
    // Empty selections are allowed; all roles still appear.
    const empty = fresh();
    empty.variants.forEach((v) => { v.bullets[empty.data.work[0].id] = []; });
    validateData(empty.data, empty.variants);
    const leap = fresh();
    leap.data.updatedAt = "2024-02-29";
    validateData(leap.data, leap.variants);
    for (const key of ["heading", "body"] as const) {
      await assert.rejects(generateResumes({
        outputDir: first, files: { ...fontFiles, [key]: new URL("absent.woff2", `file://${temp}/`) },
      }), new RegExp(`Cannot load local PDF ${key} font`));
      await assertUnchanged(first, original);
    }
    console.log("PASS zero selected bullets, leap date, and both absent local fonts");

    for (const flags of [["--unknown"], ["--check", "--check"]]) {
      await assert.rejects(exec(process.execPath, [
        "--import", tsxLoader, path.join(root, "scripts/generate-resumes.tsx"), ...flags,
      ], { cwd: temp }), /Unknown or duplicate flags/);
    }
    await generateResumes({ outputDir: first });
    await assertUnchanged(first, original);
    console.log("PASS CLI flags, staged-write cleanup, and complete regression suite");
  } finally {
    await fs.rm(temp, { recursive: true, force: true });
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
