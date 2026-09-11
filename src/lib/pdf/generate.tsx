import React from "react";
import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { PdfRenderer } from "takumi-pdf";
import { career } from "../../data/career";
import { resumes, type ResumeVariant } from "../../data/resumes";
import { ResumeDocument, ResumeFooter } from "../../components/pdf/resume-document";
import { pointToCssPixel } from "../../components/pdf/pdfcn/primitives";
import { type Career, validateData } from "./data";
import { loadFonts, fontFiles } from "./fonts";
import { inspectResume } from "./inspect";
import { pdfTheme as theme } from "./theme";

type Output = { id: string; buffer: Buffer };

async function writeAtomically(outputDir: string, outputs: Output[]) {
  await fs.mkdir(outputDir, { recursive: true });
  const suffix = `.tmp-${process.pid}-${randomUUID()}`;
  const tempPaths: string[] = [];
  try {
    for (const { id, buffer } of outputs) {
      const temp = path.join(outputDir, `${id}.pdf${suffix}`);
      tempPaths.push(temp);
      await fs.writeFile(temp, buffer, { flag: "wx" });
    }
    for (const { id } of outputs) {
      const target = path.join(outputDir, `${id}.pdf`);
      await fs.rename(`${target}${suffix}`, target);
    }
  } finally {
    await Promise.all(tempPaths.map((temp) => fs.rm(temp, { force: true })));
  }
}

// Dependency inputs are explicit so regressions can use isolated fixtures, never
// mutate canonical data/fonts, and assert that failures leave outputs untouched.
export async function generateResumes({
  outputDir, check = false, data = career, variants = resumes, files = fontFiles,
}: {
  outputDir: string;
  check?: boolean;
  data?: Career;
  variants?: ResumeVariant[];
  files?: typeof fontFiles;
}) {
  validateData(data, variants);
  const fonts = await loadFonts(files);
  const renderer = new PdfRenderer();
  const outputs: Output[] = [];
  const reports = [];
  try {
    for (const variant of variants) {
      const buffer = Buffer.from(await renderer.render(<ResumeDocument variant={variant} data={data} />, {
        size: "a4",
        margin: {
          top: pointToCssPixel(theme.margin), right: pointToCssPixel(theme.margin),
          bottom: pointToCssPixel(theme.bottomMargin), left: pointToCssPixel(theme.margin),
        },
        fonts, fontFamilies: [theme.fonts.body], lang: "en",
        footer: <ResumeFooter variant={variant} data={data} />,
        metadata: {
          title: `${data.name} — ${variant.title}`,
          description: `${variant.label} resume`,
          authors: [data.name],
          creator: "pdfcn / Takumi · scripts/generate-resumes.tsx",
          creationDate: data.updatedAt,
        },
        tagged: true, outline: true,
      }));
      reports.push(await inspectResume(buffer, data, variant));
      outputs.push({ id: variant.id, buffer });
    }
  } finally {
    renderer.free();
  }
  // Render AND inspect every buffer before making any change to the saved set.
  if (check) {
    const stale = [];
    for (const { id, buffer } of outputs) {
      try {
        if (!(await fs.readFile(path.join(outputDir, `${id}.pdf`))).equals(buffer)) stale.push(`${id}: stale`);
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code === "ENOENT") stale.push(`${id}: missing`);
        else throw error;
      }
    }
    if (stale.length) throw new Error(`Resume PDFs need regeneration (${stale.join(", ")})`);
  } else {
    await writeAtomically(outputDir, outputs);
  }
  return reports;
}
