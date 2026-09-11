import { career } from "../../data/career";
import { resumes, type ResumeVariant } from "../../data/resumes";

export type Career = typeof career;
export const variantIds = ["general", "backend", "frontend", "mobile"] as const;
export const formatEnd = (end: string) => end === "Now" ? "Present" : end;
export const dateRange = (start: string, end: string) => `${start} – ${formatEnd(end)}`;

export function bulletText(job: Career["work"][number], id: string): string {
  // `satisfies` preserves the canonical data's inferred union of bullet keys.
  const value = Object.entries(job.bullets).find(([key]) => key === id)?.[1];
  if (typeof value !== "string") throw new Error(`Missing bullet ${job.id}/${id}`);
  return value;
}

export function validateData(data: Career = career, variants: ResumeVariant[] = resumes) {
  const metadataDate = new Date(`${data.updatedAt}T00:00:00.000Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.updatedAt)
    || Number.isNaN(metadataDate.getTime())
    || metadataDate.toISOString().slice(0, 10) !== data.updatedAt) {
    throw new Error(`Invalid career.updatedAt: ${data.updatedAt}`);
  }
  if (data.work.length === 0) throw new Error("At least one work entry is required");
  const workIds = new Set<string>();
  for (const job of data.work) {
    if (!job.id || !/^[a-z0-9-]+$/.test(job.id) || workIds.has(job.id)) {
      throw new Error(`Invalid or duplicate work id: ${job.id}`);
    }
    workIds.add(job.id);
    if (!job.role || !job.company || !job.start || !job.end) {
      throw new Error(`Incomplete work entry: ${job.id}`);
    }
  }
  const projectIds = new Set<string>();
  for (const project of data.projects) {
    if (!project.id || !/^[a-z0-9-]+$/.test(project.id) || projectIds.has(project.id)) {
      throw new Error(`Invalid or duplicate project id: ${project.id}`);
    }
    projectIds.add(project.id);
  }
  const seen = new Set<string>();
  for (const variant of variants) {
    if (!variant.id || !/^[a-z0-9-]+$/.test(variant.id) || seen.has(variant.id)) {
      throw new Error(`Invalid or duplicate resume id: ${variant.id}`);
    }
    if (!variantIds.some((id) => id === variant.id)) {
      throw new Error(`Unknown resume id: ${variant.id}`);
    }
    seen.add(variant.id);
    if (!variant.title || !variant.summary || !Array.isArray(variant.skills)) {
      throw new Error(`Incomplete resume variant: ${variant.id}`);
    }
    const selectedWorkIds = Object.keys(variant.bullets);
    if (selectedWorkIds.length !== workIds.size || selectedWorkIds.some((id) => !workIds.has(id))) {
      throw new Error(`Resume ${variant.id} must select every work entry exactly once`);
    }
    for (const job of data.work) {
      const selected = variant.bullets[job.id];
      if (!Array.isArray(selected) || new Set(selected).size !== selected.length) {
        throw new Error(`Invalid bullet selection for ${variant.id}/${job.id}`);
      }
      for (const bulletId of selected) {
        if (!Object.entries(job.bullets).some(([id, text]) => id === bulletId && typeof text === "string")) {
          throw new Error(`Missing bullet ${variant.id}/${job.id}/${bulletId}`);
        }
      }
    }
    if (!Array.isArray(variant.projects) || variant.projects.length === 0
      || new Set(variant.projects).size !== variant.projects.length) {
      throw new Error(`Empty or duplicate project selection in ${variant.id}`);
    }
    for (const id of variant.projects) {
      if (!projectIds.has(id)) throw new Error(`Missing project ${variant.id}/${id}`);
    }
  }
  if (variants.length !== variantIds.length) {
    throw new Error(`Expected four resume variants, found ${variants.length}`);
  }
}

export function selectedProjects(data: Career, variant: ResumeVariant) {
  return variant.projects.map((id) => {
    const project = data.projects.find((item) => item.id === id);
    if (!project) throw new Error(`Missing project ${variant.id}/${id}`);
    return project;
  });
}

// Ordered content contract, independent of the document's layout. Notes/stories
// are not selected responsibility bullets; education notes are printed in full.
export function expectedContent(data: Career, variant: ResumeVariant): string[] {
  return [
    data.name, variant.title, data.email, data.phone, data.location,
    data.url.replace(/^https?:\/\//, ""), "GitHub", "LinkedIn",
    "Summary", variant.summary, "Skills",
    ...variant.skills.flatMap((group) => [group.label, ...group.items]),
    "Experience",
    ...data.work.flatMap((job) => [
      job.role, job.company, dateRange(job.start, job.end),
      ...variant.bullets[job.id].map((id) => bulletText(job, id)),
    ]),
    "Selected projects",
    ...selectedProjects(data, variant).flatMap((project) => [
      project.name, project.when, ...project.links.map((link) => link.label),
      project.blurb, "Stack:", ...project.stack,
    ]),
    "Education",
    ...data.education.flatMap((item) => [
      item.name, dateRange(item.start, item.end), item.detail, ...(item.note ? [item.note] : []),
    ]),
    "Recognition", data.award,
  ];
}

export function expectedLinks(data: Career, variant: ResumeVariant): string[] {
  return [
    `mailto:${data.email}`, `tel:${data.phone.replaceAll(" ", "")}`,
    data.url, data.socials.github, data.socials.linkedin,
    ...data.work.flatMap((job) => job.href ? [job.href] : []),
    ...selectedProjects(data, variant).flatMap((project) => project.links.map((link) => link.href)),
    ...data.education.flatMap((item) => item.href ? [item.href] : []),
  ];
}
