import type { SkillIconName } from "@/components/skill-icon";
import { career } from "./career";
import { resumePath } from "./resumes";

export type { LinkKind, ProjectLink, Project } from "./career";

export type Job = {
  role: string;
  company: string;
  href?: string;
  start: string;
  end?: string;
  note?: string;
  tree?: { name: string; blurb: string }[];
};

export type LedgerItem = {
  name: string;
  detail?: string;
  href?: string;
  start: string;
  end?: string;
  note?: string;
};

export type Skill = {
  name: string;
  icon?: SkillIconName;
};

export const profile = {
  name: career.name,
  handle: career.handle,
  url: career.url,
  location: career.location,
  title: "Software engineer",
  standfirst: "Software engineer building mobile, web and desktop products.",
  description:
    "Usman Hassan is a Software Engineer at Levenza, building desktop experiences, backend services and AI-agent integrations, with experience shipping mobile and web products.",
  currentRole: career.work[0],
  currentFocus: "working on desktop experiences, backend services and AI-agent integrations.",
  bio: [
    "I've built and released apps as the sole mobile developer at Goalr and Scrim, led front-end development at Brimble, and worked across mobile and web at Yusra and Chimoney.",
    "At GenzTechies, I build community tools, mentor developers and help organize hackathons.",
  ],
  email: career.email,
  resume: resumePath("general"),
  socials: career.socials,
  work: career.work satisfies Job[],
  projects: career.projects,

  recognition: [
    {
      name: "1st place",
      detail: "GenzTechies Hackfest",
      href: "https://github.com/usmangurowa/safepal",
      start: "Jul 2022",
      note: "Won 1st place at the inaugural GenzTechies Hackfest, my first-ever hackathon, with SafePal, a mobile app for reporting missing persons that uses consent-based location tracking to give security agencies the data they need to find them.",
    },
    {
      name: "Core organiser",
      detail: "GenzTechies hackathons",
      href: "https://genztechies.com",
      start: "2023",
      end: "Now",
      note: "The win brought me into the GenzTechies core community, where I've since been a core organizer of two more hackathons.",
    },
  ] satisfies LedgerItem[],
  education: career.education satisfies LedgerItem[],

  skills: [
    {
      group: "Languages",
      items: [
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Python", icon: "python" },
      ],
    },
    {
      group: "Mobile",
      items: [
        { name: "React Native", icon: "react" },
        { name: "Expo", icon: "expo" },
        { name: "EAS" },
        { name: "Reanimated" },
        { name: "Skia" },
      ],
    },
    {
      group: "Frontend",
      items: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Vue.js", icon: "vue" },
        { name: "Nuxt.js", icon: "nuxt" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "TanStack Query", icon: "reactquery" },
      ],
    },
    {
      group: "Backend",
      items: [
        { name: "Node.js", icon: "node" },
        { name: "Hono", icon: "hono" },
        { name: "PostgreSQL", icon: "postgres" },
        { name: "Redis", icon: "redis" },
        { name: "Prisma", icon: "prisma" },
        { name: "Drizzle", icon: "drizzle" },
        { name: "Supabase", icon: "supabase" },
      ],
    },
    {
      group: "AI",
      items: [
        { name: "AI SDK", icon: "vercel" },
        { name: "Anthropic", icon: "anthropic" },
        { name: "Gemini", icon: "gemini" },
      ],
    },
    {
      group: "Infrastructure",
      items: [
        { name: "Docker", icon: "docker" },
        { name: "Coolify", icon: "coolify" },
        { name: "Cloudflare Workers", icon: "cloudflare" },
        { name: "Vercel", icon: "vercel" },
      ],
    },
    {
      group: "Testing",
      items: [{ name: "Vitest", icon: "vitest" }, { name: "Playwright" }],
    },
  ] satisfies { group: string; items: Skill[] }[],
} as const;
