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
  standfirst: "Software engineer building mobile and web products with React Native, Expo and Next.js.",
  description:
    "Usman Hassan is a software engineer focused on React Native mobile apps and web interfaces, with full-stack experience in payments, wallets and developer tools.",
  bio: [
    "I build mobile and web products, and work across the APIs and infrastructure behind them. I started as a web developer in 2021 and won my first hackathon a year later with a mobile app.",
    "I've been the sole mobile developer behind Scrim and Goalr, led front-end development at Brimble, and shipped mobile and web products at Chimoney and Yusra. More recently, I've built Silo and Kodo. At GenzTechies, I build community tools, mentor developers and help organize hackathons.",
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
        { name: "shadcn/ui", icon: "shadcn" },
        { name: "Radix UI", icon: "radix" },
        { name: "TanStack Query", icon: "reactquery" },
        { name: "TanStack Table", icon: "tanstack" },
        { name: "Zustand" },
        { name: "Zod", icon: "zod" },
        { name: "Motion" },
        { name: "Remotion" },
      ],
    },
    {
      group: "Backend",
      items: [
        { name: "Node.js", icon: "node" },
        { name: "Bun", icon: "bun" },
        { name: "Hono", icon: "hono" },
        { name: "Drizzle", icon: "drizzle" },
        { name: "Prisma", icon: "prisma" },
        { name: "PostgreSQL", icon: "postgres" },
        { name: "Redis", icon: "redis" },
        { name: "Better Auth", icon: "betterauth" },
        { name: "Temporal", icon: "temporal" },
        { name: "Supabase", icon: "supabase" },
        { name: "Firebase", icon: "firebase" },
      ],
    },
    {
      group: "AI",
      items: [
        { name: "AI SDK", icon: "vercel" },
        { name: "Anthropic", icon: "anthropic" },
        { name: "Gemini", icon: "gemini" },
        { name: "Groq" },
        { name: "OpenRouter", icon: "openrouter" },
        { name: "Bedrock" },
        { name: "Braintrust", icon: "braintrust" },
      ],
    },
    {
      group: "Infrastructure",
      items: [
        { name: "Docker", icon: "docker" },
        { name: "Coolify", icon: "coolify" },
        { name: "Cloudflare Workers", icon: "cloudflare" },
        { name: "Vercel", icon: "vercel" },
        { name: "Turborepo", icon: "turborepo" },
        { name: "pnpm", icon: "pnpm" },
        { name: "Infisical" },
        { name: "Sentry", icon: "sentry" },
        { name: "PostHog", icon: "posthog" },
        { name: "Resend", icon: "resend" },
      ],
    },
    {
      group: "Integrations",
      items: [
        { name: "Stripe", icon: "stripe" },
        { name: "Paddle", icon: "paddle" },
        { name: "Flutterwave" },
        { name: "WhatsApp", icon: "whatsapp" },
        { name: "Telegram", icon: "telegram" },
      ],
    },
    {
      group: "Testing",
      items: [{ name: "Vitest", icon: "vitest" }, { name: "Playwright" }],
    },
  ] satisfies { group: string; items: Skill[] }[],
} as const;
