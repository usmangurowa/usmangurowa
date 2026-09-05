import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";
import { career } from "../src/data/career.ts";
import { resumes } from "../src/data/resumes.ts";

const root = fileURLToPath(new URL("..", import.meta.url));
const outputDir = path.join(root, "public", "resume");
const pageSize = "A4";
const pageWidth = 595.28;
const pageHeight = 841.89;
const metadataDate = new Date(`${career.updatedAt}T00:00:00.000Z`);
const colors = {
  ink: "#202124",
  muted: "#5f6368",
  accent: "#1f5f8b",
  rule: "#d7dce1",
};
const font = "Helvetica";
const boldFont = "Helvetica-Bold";
const margin = 48;
const contentWidth = pageWidth - margin * 2;

function parseArgs() {
  const args = process.argv.slice(2);
  const unknown = args.filter((arg) => arg !== "--check");
  if (unknown.length > 0 || args.filter((arg) => arg === "--check").length > 1) {
    throw new Error(`Unknown or duplicate flags: ${args.join(" ")}`);
  }
  return { check: args.includes("--check") };
}

function validateData() {
  if (
    Number.isNaN(metadataDate.getTime())
    || metadataDate.toISOString().slice(0, 10) !== career.updatedAt
  ) {
    throw new Error(`Invalid career.updatedAt: ${career.updatedAt}`);
  }
  if (career.work.length === 0) {
    throw new Error("At least one work entry is required");
  }

  const workIds = new Set();
  for (const job of career.work) {
    if (!job.id || !/^[a-z0-9-]+$/.test(job.id) || workIds.has(job.id)) {
      throw new Error(`Invalid or duplicate work id: ${job.id}`);
    }
    workIds.add(job.id);
    if (!job.role || !job.company || !job.start || !job.end) {
      throw new Error(`Incomplete work entry: ${job.id}`);
    }
  }

  const projectById = new Map();
  for (const project of career.projects) {
    if (!project.id || !/^[a-z0-9-]+$/.test(project.id) || projectById.has(project.id)) {
      throw new Error(`Invalid or duplicate project id: ${project.id}`);
    }
    projectById.set(project.id, project);
  }

  const variantIds = new Set();
  for (const resume of resumes) {
    if (!resume.id || !/^[a-z0-9-]+$/.test(resume.id) || variantIds.has(resume.id)) {
      throw new Error(`Invalid or duplicate resume id: ${resume.id}`);
    }
    variantIds.add(resume.id);
    if (!resume.title || !resume.summary || !Array.isArray(resume.skills)) {
      throw new Error(`Incomplete resume variant: ${resume.id}`);
    }
    const selectedWorkIds = Object.keys(resume.bullets);
    if (selectedWorkIds.length !== workIds.size || selectedWorkIds.some((id) => !workIds.has(id))) {
      throw new Error(`Resume ${resume.id} must select every work entry exactly once`);
    }
    for (const job of career.work) {
      const selected = resume.bullets[job.id];
      if (!Array.isArray(selected) || new Set(selected).size !== selected.length) {
        throw new Error(`Invalid bullet selection for ${resume.id}/${job.id}`);
      }
      for (const bulletId of selected) {
        if (typeof job.bullets[bulletId] !== "string") {
          throw new Error(`Missing bullet ${resume.id}/${job.id}/${bulletId}`);
        }
      }
    }
    if (resume.projects.length === 0 || new Set(resume.projects).size !== resume.projects.length) {
      throw new Error(`Empty or duplicate project selection in ${resume.id}`);
    }
    for (const projectId of resume.projects) {
      if (!projectById.has(projectId)) {
        throw new Error(`Missing project ${resume.id}/${projectId}`);
      }
    }
  }
  if (variantIds.size !== resumes.length) {
    throw new Error("Resume ids must be unique");
  }
  if (resumes.length !== 4) {
    throw new Error(`Expected four resume variants, found ${resumes.length}`);
  }
}

function formatEnd(end) {
  return end === "Now" ? "Present" : end;
}

function layoutInline(doc, parts, size, width) {
  doc.font(font).fontSize(size);
  const lineHeight = doc.currentLineHeight(true) + 1.2;
  const segments = [];
  let used = 0;
  let line = 0;
  for (const part of parts) {
    doc.font(part.bold ? boldFont : font).fontSize(size);
    for (const token of part.text.match(/\S+\s*|\s+/g) ?? []) {
      let text = used === 0 ? token.trimStart() : token;
      let tokenWidth = doc.widthOfString(text);
      if (used > 0 && used + tokenWidth > width) {
        line += 1;
        used = 0;
        text = text.trimStart();
        tokenWidth = doc.widthOfString(text);
      }
      if (tokenWidth > width) {
        throw new Error(`Inline text is too wide to fit: ${text}`);
      }
      if (text) segments.push({ ...part, text, x: used, y: line * lineHeight });
      used += tokenWidth;
    }
  }
  return { height: (line + 1) * lineHeight, segments };
}

function inlineHeight(doc, parts, size, width = contentWidth) {
  return layoutInline(doc, parts, size, width).height;
}

function writeInline(doc, parts, x, y, size, width = contentWidth) {
  for (const part of layoutInline(doc, parts, size, width).segments) {
    doc
      .font(part.bold ? boldFont : font)
      .fontSize(size)
      .fillColor(part.link ? colors.accent : part.color ?? colors.ink)
      .text(part.text, x + part.x, y + part.y, {
        lineBreak: false,
        link: part.link,
        underline: false,
      });
  }
}

class ResumeRenderer {
  constructor(resume) {
    this.resume = resume;
    this.doc = new PDFDocument({
      size: pageSize,
      margin,
      autoFirstPage: false,
      info: {
        Title: `${career.name} - ${resume.title}`,
        Author: career.name,
        Subject: `${resume.label} resume`,
        Creator: "scripts/generate-resumes.mjs",
        CreationDate: metadataDate,
        ModDate: metadataDate,
      },
    });
    this.page = 0;
    this.doc.on("pageAdded", () => {
      this.page += 1;
      if (this.page > 2) throw new Error(`${this.resume.id} resume exceeds two pages`);
    });
    this.y = margin + 9;
    this.doc.addPage();
  }

  measure(text, size = 10.5, width = contentWidth, options = {}) {
    this.doc.font(options.bold ? boldFont : font).fontSize(size);
    return this.doc.heightOfString(text, {
      width,
      lineGap: options.lineGap ?? 1.2,
      ...options,
    });
  }

  addPage() {
    this.doc.addPage();
    this.y = margin + 9;
    this.doc
      .font(boldFont)
      .fontSize(11)
      .fillColor(colors.muted)
      .text(`${career.name} - ${this.resume.title}`, margin, this.y, {
        width: contentWidth,
        lineGap: 1,
      });
    this.y += 18;
    this.doc
      .moveTo(margin, this.y)
      .lineTo(pageWidth - margin, this.y)
      .lineWidth(0.6)
      .strokeColor(colors.rule)
      .stroke();
    this.y += 14;
  }

  ensureSpace(height, reserve = 0) {
    if (this.y + height + reserve > pageHeight - margin) {
      this.addPage();
    }
  }

  paragraph(text, size = 10.5, width = contentWidth, gap = 5) {
    const height = this.measure(text, size, width);
    this.ensureSpace(height);
    this.doc
      .font(font)
      .fontSize(size)
      .fillColor(colors.ink)
      .text(text, margin, this.y, { width, lineGap: 1.2 });
    this.y += height + gap;
  }

  heading(text, nextHeight = 24) {
    this.ensureSpace(22 + nextHeight);
    this.doc
      .font(boldFont)
      .fontSize(12)
      .fillColor(colors.ink)
      .text(text.toUpperCase(), margin, this.y, {
        width: contentWidth,
        characterSpacing: 0.5,
        lineGap: 1,
      });
    this.y += 17;
    this.doc
      .moveTo(margin, this.y)
      .lineTo(pageWidth - margin, this.y)
      .lineWidth(0.6)
      .strokeColor(colors.rule)
      .stroke();
    this.y += 9;
  }

  drawHeader() {
    this.doc
      .font(boldFont)
      .fontSize(24)
      .fillColor(colors.ink)
      .text(career.name, margin, this.y, { width: contentWidth, lineGap: 1 });
    this.y += 29;
    this.doc
      .font(font)
      .fontSize(12.5)
      .fillColor(colors.muted)
      .text(this.resume.title, margin, this.y, { width: contentWidth, lineGap: 1 });
    this.y += 19;

    const contactRows = [
      [
        { text: career.email, link: `mailto:${career.email}` },
        { text: "  |  " },
        { text: career.phone, link: `tel:${career.phone.replaceAll(" ", "")}` },
        { text: "  |  " },
        { text: career.location },
      ],
      [
        { text: career.url.replace(/^https?:\/\//, ""), link: career.url },
        { text: "  |  " },
        { text: "GitHub", link: career.socials.github },
        { text: "  |  " },
        { text: "LinkedIn", link: career.socials.linkedin },
      ],
    ];
    for (const row of contactRows) {
      const height = inlineHeight(this.doc, row, 10.5);
      writeInline(this.doc, row, margin, this.y, 10.5);
      this.y += height + 2;
    }
    this.y += 8;
  }

  roleBlock(job, selectedBulletIds) {
    const headingParts = [
      { text: job.role, bold: true },
      { text: " - " },
      { text: job.company, link: job.href },
      { text: ` | ${job.start} - ${formatEnd(job.end)}`, color: colors.muted },
    ];
    const headingHeight = inlineHeight(this.doc, headingParts, 10.8);
    const bulletHeights = selectedBulletIds.map((bulletId) => {
      const text = `- ${job.bullets[bulletId]}`;
      return this.measure(text, 10.5, contentWidth - 12);
    });
    return {
      headingParts,
      height: headingHeight + (selectedBulletIds.length ? 2 : 0)
        + bulletHeights.reduce((sum, value) => sum + value + 1.5, 0) + 4,
    };
  }

  drawRole(job, selectedBulletIds) {
    const block = this.roleBlock(job, selectedBulletIds);
    this.ensureSpace(block.height);
    writeInline(this.doc, block.headingParts, margin, this.y, 10.8);
    this.y += inlineHeight(this.doc, block.headingParts, 10.8) + (selectedBulletIds.length ? 2 : 0);
    for (const bulletId of selectedBulletIds) {
      const text = `- ${job.bullets[bulletId]}`;
      const height = this.measure(text, 10.5, contentWidth - 12);
      this.doc
        .font(font)
        .fontSize(10.5)
        .fillColor(colors.ink)
        .text(text, margin + 12, this.y, {
          width: contentWidth - 12,
          lineGap: 1.2,
        });
      this.y += height + 1.5;
    }
    this.y += 4;
  }

  projectBlock(project) {
    const headingParts = [
      { text: project.name, bold: true, link: project.links[0]?.href },
      { text: ` | ${project.when}`, color: colors.muted },
    ];
    const blurbHeight = this.measure(project.blurb);
    const stackHeight = this.measure(`Stack: ${project.stack.join(", ")}`);
    const links = project.links.map((link) => link.label).join("  |  ");
    const linksHeight = links ? this.measure(links) : 0;
    return {
      headingParts,
      height: inlineHeight(this.doc, headingParts, 10.8) + 2 + blurbHeight + 2
        + stackHeight + (links ? linksHeight + 2 : 0) + 5,
      links,
    };
  }

  drawProject(project) {
    const block = this.projectBlock(project);
    this.ensureSpace(block.height);
    writeInline(this.doc, block.headingParts, margin, this.y, 10.8);
    this.y += inlineHeight(this.doc, block.headingParts, 10.8) + 2;
    this.paragraph(project.blurb, 10.5, contentWidth, 2);
    this.paragraph(`Stack: ${project.stack.join(", ")}`, 10.5, contentWidth, 2);
    if (block.links) {
      const parts = [];
      project.links.forEach((link, index) => {
        if (index) parts.push({ text: "  |  " });
        parts.push({ text: link.label, link: link.href });
      });
      const height = inlineHeight(this.doc, parts, 10.5);
      this.ensureSpace(height);
      writeInline(this.doc, parts, margin, this.y, 10.5);
      this.y += height + 5;
    } else {
      this.y += 3;
    }
  }

  drawEducationAndAward() {
    const entries = career.education.map((item) => ({
      parts: [
        { text: item.name, bold: true, link: item.href },
        { text: ` | ${item.start} - ${formatEnd(item.end)}`, color: colors.muted },
      ],
      institution: item.note ?? item.detail,
    }));
    const entryHeight = ({ parts, institution }) =>
      inlineHeight(this.doc, parts, 10.5) + this.measure(institution) + 4;
    const educationHeight = entries.reduce((sum, entry) => sum + entryHeight(entry), 0);
    const awardHeight = this.measure(career.award, 10.5);
    this.heading("Education", educationHeight + 10);
    for (const entry of entries) {
      const { parts, institution } = entry;
      this.ensureSpace(entryHeight(entry));
      writeInline(this.doc, parts, margin, this.y, 10.5);
      this.y += inlineHeight(this.doc, parts, 10.5);
      this.paragraph(institution, 10.5, contentWidth, 4);
    }
    this.y += 4;
    this.heading("Award", awardHeight + 10);
    this.paragraph(career.award, 10.5, contentWidth, 0);
  }

  render() {
    this.drawHeader();
    this.y -= 9;
    this.heading("Summary", this.measure(this.resume.summary) + 8);
    this.paragraph(this.resume.summary, 10.5, contentWidth, 2);

    const skillHeight = this.resume.skills.reduce(
      (sum, group) => sum + this.measure(`${group.label}: ${group.items.join(", ")}`) + 2,
      0,
    );
    this.heading("Skills", skillHeight + 8);
    for (const group of this.resume.skills) {
      const parts = [
        { text: `${group.label}: `, bold: true },
        { text: group.items.join(", ") },
      ];
      const height = inlineHeight(this.doc, parts, 10.5);
      this.ensureSpace(height + 2);
      writeInline(this.doc, parts, margin, this.y, 10.5);
      this.y += height + 2;
    }

    const firstRole = this.roleBlock(career.work[0], this.resume.bullets[career.work[0].id]).height;
    this.heading("Experience", firstRole);
    for (const job of career.work) {
      this.drawRole(job, this.resume.bullets[job.id]);
    }

    const firstProject = this.projectBlock(career.projects.find((project) => project.id === this.resume.projects[0])).height;
    this.heading("Selected projects", firstProject);
    for (const projectId of this.resume.projects) {
      this.drawProject(career.projects.find((project) => project.id === projectId));
    }
    this.drawEducationAndAward();

    if (this.page > 2) {
      throw new Error(`${this.resume.id} resume requires ${this.page} pages`);
    }
    return this.doc;
  }
}

function renderResume(resume) {
  return new Promise((resolve, reject) => {
    const renderer = new ResumeRenderer(resume);
    let document;
    try {
      document = renderer.render();
    } catch (error) {
      reject(error);
      return;
    }
    const chunks = [];
    document.on("data", (chunk) => chunks.push(chunk));
    document.on("error", reject);
    document.on("end", () => resolve(Buffer.concat(chunks)));
    document.end();
  });
}

async function writeAtomically(outputs) {
  await fs.mkdir(outputDir, { recursive: true });
  const tempPaths = [];
  try {
    for (const { id, buffer } of outputs) {
      const target = path.join(outputDir, `${id}.pdf`);
      const temp = `${target}.tmp-${process.pid}`;
      tempPaths.push(temp);
      await fs.writeFile(temp, buffer);
    }
    for (const { id } of outputs) {
      const target = path.join(outputDir, `${id}.pdf`);
      const temp = `${target}.tmp-${process.pid}`;
      await fs.rename(temp, target);
    }
  } catch (error) {
    await Promise.all(tempPaths.map((temp) => fs.rm(temp, { force: true })));
    throw error;
  }
}

async function main() {
  const { check } = parseArgs();
  validateData();
  const outputs = [];
  for (const resume of resumes) {
    outputs.push({ id: resume.id, buffer: await renderResume(resume) });
  }

  if (check) {
    const stale = [];
    for (const { id, buffer } of outputs) {
      const target = path.join(outputDir, `${id}.pdf`);
      try {
        const saved = await fs.readFile(target);
        if (!saved.equals(buffer)) stale.push(`${id}: stale`);
      } catch (error) {
        if (error.code === "ENOENT") stale.push(`${id}: missing`);
        else throw error;
      }
    }
    if (stale.length) throw new Error(`Resume PDFs need regeneration (${stale.join(", ")})`);
    console.log(`Checked ${outputs.length} resume PDFs; all are current.`);
    return;
  }

  await writeAtomically(outputs);
  console.log(`Generated ${outputs.length} resume PDFs in ${path.relative(root, outputDir)}.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
