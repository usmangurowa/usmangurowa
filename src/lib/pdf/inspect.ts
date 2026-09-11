import { getDocument, OPS } from "pdfjs-dist/legacy/build/pdf.mjs";
import type { TextItem } from "pdfjs-dist/types/src/display/api";
import type { ResumeVariant } from "../../data/resumes";
import { type Career, bulletText, expectedContent, expectedLinks, selectedProjects } from "./data";
import { pdfTheme } from "./theme";

const normalized = (text: string) => text.normalize("NFKC").replace(/\s+/g, "");
const normalizedUrl = (url: string) => new URL(url).href;

// Parse the real PDF page tree, text matrices and annotations. No regex guesses
// about page counts, no raster rendering, and no system-font fallback.
export async function inspectResume(buffer: Uint8Array, data: Career, variant: ResumeVariant) {
  const task = getDocument({
    data: new Uint8Array(buffer), useSystemFonts: false, isEvalSupported: false,
    fontExtraProperties: true, disableFontFace: true,
  });
  const pdf = await task.promise;
  try {
    if (pdf.numPages > 2 || pdf.numPages < 1) {
      throw new Error(`${variant.id} resume requires ${pdf.numPages} pages; maximum is two`);
    }
    let minSize = Infinity;
    const pages: { text: string; items: TextItem[] }[] = [];
    const links = new Set<string>();
    const fonts = new Set<string>();
    const imageOps = new Set(Object.entries(OPS)
      .filter(([name]) => name.startsWith("paintImage") || name.startsWith("paintInlineImage"))
      .map(([, code]) => code));
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const [x0, y0, x1, y1] = page.view;
      if (Math.abs(x1 - x0 - 595.276) > 0.1 || Math.abs(y1 - y0 - 841.89) > 0.1) {
        throw new Error(`${variant.id}: page ${pageNumber} is not A4`);
      }
      const content = await page.getTextContent();
      const items = content.items.filter((item): item is TextItem => "str" in item && !!item.str.trim());
      if (!items.length) throw new Error(`${variant.id}: page ${pageNumber} has no real text`);
      const operators = await page.getOperatorList();
      if (operators.fnArray.some((op, index) => imageOps.has(op)
        || (op === OPS.setTextRenderingMode && operators.argsArray[index][0] !== 0))) {
        throw new Error(`${variant.id}: raster images or non-filled/hidden text are not allowed`);
      }
      for (const item of items) {
        const size = Math.hypot(item.transform[2], item.transform[3]);
        minSize = Math.min(minSize, size);
        if (size < pdfTheme.bodySize - 0.001) {
          throw new Error(`${variant.id}: text below ${pdfTheme.bodySize}pt: ${item.str}`);
        }
        const [,,,, x, y] = item.transform;
        const font = content.styles[item.fontName];
        const embedded = page.commonObjs.get(item.fontName) as { name?: string; data?: Uint8Array };
        const family = embedded.name?.replace(/^[A-Z]{6}\+/, "").replace(/[\s-]/g, "");
        if (!embedded.data?.length || !family || !Object.values(pdfTheme.fonts)
          .some((name) => family.startsWith(name.replace(/\s/g, "")))) {
          throw new Error(`${variant.id}: missing or unexpected embedded font: ${embedded.name}`);
        }
        fonts.add(embedded.name!);
        const top = y + (font.ascent ?? 1) * size;
        const bottom = y + (font.descent ?? -0.25) * size;
        if (x < pdfTheme.margin - 0.5 || x + item.width > x1 - pdfTheme.margin + 0.5
          || bottom < pdfTheme.margin - 0.5 || top > y1 - pdfTheme.margin + 0.5
          || (y >= pdfTheme.bottomMargin && bottom < pdfTheme.bottomMargin - 0.5)) {
          throw new Error(`${variant.id}: text outside printable bounds on page ${pageNumber}: ${item.str} (${x},${bottom} to ${x + item.width},${top})`);
        }
      }
      const footer = items.filter((item) => item.transform[5] < pdfTheme.bottomMargin);
      if (normalized(footer.map((item) => item.str).join(""))
        !== normalized(`${data.name} / ${variant.label}${pageNumber} / ${pdf.numPages}`)) {
        throw new Error(`${variant.id}: incorrect continuation identity/counter or body overlapping footer on page ${pageNumber}`);
      }
      const annotations = await page.getAnnotations();
      for (const annotation of annotations) {
        if (annotation.subtype === "Link" && annotation.url) {
          const [left, bottom, right, top] = annotation.rect;
          if (left < pdfTheme.margin - 0.5 || right > x1 - pdfTheme.margin + 0.5
            || bottom < pdfTheme.bottomMargin - 0.5 || top > y1 - pdfTheme.margin + 0.5) {
            throw new Error(`${variant.id}: link outside body bounds: ${annotation.url}`);
          }
          links.add(normalizedUrl(annotation.url));
        }
      }
      const body = items.filter((item) => item.transform[5] >= pdfTheme.bottomMargin);
      pages.push({ text: normalized(body.map((item) => item.str).join("")), items: body });
    }
    // The sequence must be readable in the PDF's native content order. Each
    // fragment is consumed exactly once, so duplicated wording cannot mask loss.
    const text = pages.map((page) => page.text).join("");
    let cursor = 0;
    for (const fragment of expectedContent(data, variant)) {
      const needle = normalized(fragment);
      const index = text.indexOf(needle, cursor);
      if (index < 0) throw new Error(`${variant.id}: missing or out-of-order text: ${fragment}`);
      cursor = index + needle.length;
    }
    // Every job stays with all of its selected bullets on one page.
    for (const job of data.work) {
      const page = pages.find((p) => p.text.includes(normalized(`${job.role} — ${job.company}`)));
      if (!page || variant.bullets[job.id].some((id) => !page.text.includes(normalized(bulletText(job, id))))) {
        throw new Error(`${variant.id}: split employer block: ${job.company}`);
      }
    }
    const projects = selectedProjects(data, variant);
    for (const project of projects) {
      const page = pages.find((p) => p.text.includes(normalized(`${project.name} | ${project.when}`)));
      if (!page || ![project.blurb, ...project.stack, ...project.links.map((link) => link.label)]
        .every((fragment) => page.text.includes(normalized(fragment)))) {
        throw new Error(`${variant.id}: split project block: ${project.name}`);
      }
    }
    const sectionStarts = [
      ["Summary", variant.summary],
      ["Skills", variant.skills[0]?.label],
      ["Experience", `${data.work[0].role} — ${data.work[0].company}`],
      ["Selected projects", `${projects[0].name} | ${projects[0].when}`],
      ["Education", data.education[0]?.name],
      ["Recognition", data.award],
    ];
    for (const [heading, first] of sectionStarts) {
      if (!first || !pages.some((page) => page.text.includes(normalized(heading))
        && page.text.includes(normalized(first)))) {
        throw new Error(`${variant.id}: orphaned section heading: ${heading}`);
      }
    }
    for (const href of expectedLinks(data, variant)) {
      if (!links.has(normalizedUrl(href))) throw new Error(`${variant.id}: missing live link: ${href}`);
    }
    const { info } = await pdf.getMetadata();
    const metadata = info as { CreationDate?: string; ModDate?: string };
    const fixedDate = `D:${data.updatedAt.replaceAll("-", "")}000000Z`;
    if (metadata.CreationDate !== fixedDate || metadata.ModDate !== fixedDate) {
      throw new Error(`${variant.id}: PDF metadata date must equal career.updatedAt`);
    }
    if (!await (await pdf.getPage(1)).getStructTree()) {
      throw new Error(`${variant.id}: missing PDF structure tags`);
    }
    return { id: variant.id, pages: pdf.numPages, minSize, links: links.size, fonts: Array.from(fonts) };
  } finally {
    await pdf.destroy();
  }
}
