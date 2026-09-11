export type ResumeVariant = {
  id: string;
  label: string;
  title: string;
  description: string;
  summary: string;
  skills: { label: string; items: string[] }[];
  bullets: Record<string, string[]>;
  projects: string[];
};

export const resumes: ResumeVariant[] = [
  {
    id: "general",
    label: "General",
    title: "Software Engineer",
    description: "A balanced overview of mobile, web, desktop and full-stack product work.",
    summary: "Software engineer building mobile, web and desktop products since 2021. Currently at Levenza, working on desktop experiences, backend services and AI-agent integrations. Experience includes payments, wallets, fitness integrations and developer tools, spanning independent delivery, engineering teams and community mentoring.",
    skills: [
      { label: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
      { label: "Mobile and web", items: ["React Native", "Expo", "React", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS"] },
      { label: "Backend and data", items: ["Node.js", "Hono", "Drizzle", "Prisma", "PostgreSQL", "Redis", "Better Auth"] },
      { label: "Delivery", items: ["Docker", "Coolify", "Git", "GitHub", "Playwright", "Vitest"] },
    ],
    bullets: {
      levenza: ["desktop", "attachments", "reliability"],
      genztechies: ["delivery", "leadership"],
      brimble: ["delivery", "integrations"],
      yusra: ["delivery", "fullstack"],
      terrahaptix: [],
      chimoney: ["payments"],
      goalr: ["delivery", "integrations"],
      aviato: [],
      scrim: ["delivery", "security"],
      earlybean: ["delivery"],
      cykmore: ["web"],
      buildbrothers: ["delivery"],
    },
    projects: ["silo", "kodo", "penter"],
  },
  {
    id: "backend",
    label: "Backend",
    title: "Software Engineer | Backend Focus",
    description: "Emphasizes APIs, data, authentication and payment-related product work.",
    summary: "Software engineer focused on APIs, data and integrations. At Levenza, build backend services and AI-agent integrations spanning device sessions, email attachments and workflow reliability. Earlier work includes payments, wallets and payouts across mobile and web products, with frontend experience that informs API delivery.",
    skills: [
      { label: "Languages and runtime", items: ["TypeScript", "JavaScript", "Python", "Node.js", "Bun"] },
      { label: "APIs and data", items: ["Hono", "Express.js", "Drizzle", "Prisma", "PostgreSQL", "Redis", "Supabase", "Firebase"] },
      { label: "Auth and services", items: ["Better Auth", "Vercel AI SDK", "Stripe", "Paddle", "Resend"] },
      { label: "Infrastructure and tests", items: ["Docker", "Coolify", "Cloudflare Workers", "Infisical", "Vitest", "Playwright"] },
    ],
    bullets: {
      levenza: ["sessions", "attachments", "reliability"],
      genztechies: ["delivery"],
      brimble: ["integrations"],
      yusra: ["delivery", "fullstack"],
      terrahaptix: [],
      chimoney: ["payments", "collaboration"],
      goalr: ["integrations"],
      aviato: [],
      scrim: ["integrations", "security"],
      earlybean: ["delivery"],
      cykmore: ["web"],
      buildbrothers: ["delivery"],
    },
    projects: ["silo", "kodo", "penter"],
  },
  {
    id: "frontend",
    label: "Frontend",
    title: "Software Engineer | Frontend Focus",
    description: "Emphasizes interfaces, React and Next.js, state and integrations.",
    summary: "Software engineer building web and desktop interfaces. Currently at Levenza, connecting desktop chat and settings experiences to backend APIs and agent workflows. Led frontend delivery at Brimble and built wallet, shopping and community applications with React, Next.js and TypeScript, with additional Vue.js and Nuxt.js experience.",
    skills: [
      { label: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
      { label: "Frameworks", items: ["React", "Next.js", "Vue.js", "Nuxt.js", "React Native"] },
      { label: "UI and state", items: ["Tailwind CSS", "shadcn/ui", "Radix UI", "TanStack Query", "TanStack Table", "Zustand", "Zod", "Motion"] },
      { label: "Delivery and testing", items: ["Git", "GitHub", "Vercel", "Playwright", "Vitest"] },
    ],
    bullets: {
      levenza: ["desktop", "sessions"],
      genztechies: ["delivery", "leadership"],
      brimble: ["delivery", "integrations"],
      yusra: ["web", "delivery"],
      terrahaptix: [],
      chimoney: ["payments"],
      goalr: ["delivery"],
      aviato: [],
      scrim: ["delivery", "integrations"],
      earlybean: ["delivery"],
      cykmore: ["web"],
      buildbrothers: ["delivery"],
    },
    projects: ["penter", "kodo", "whodeysell"],
  },
  {
    id: "mobile",
    label: "Mobile",
    title: "Software Engineer | Mobile Development",
    description: "Emphasizes React Native, Expo, device integrations and app releases.",
    summary: "Mobile software engineer building React Native and Expo applications with TypeScript. Sole mobile developer for Scrim, Goalr and EarlyBean, with iOS and Android releases at Scrim and Goalr. Experience includes payments, wallets, biometric authentication, secure storage, notifications and health-platform integrations.",
    skills: [
      { label: "Core", items: ["TypeScript", "JavaScript", "React Native", "Expo"] },
      { label: "App development", items: ["EAS", "React Navigation", "Reanimated", "Skia", "Zustand", "TanStack Query"] },
      { label: "Device and delivery", items: ["Biometric authentication", "Secure storage", "Push notifications", "OTA updates", "App Store", "Google Play"] },
      { label: "Services and testing", items: ["Firebase", "Supabase", "Better Auth", "Node.js", "Vitest"] },
    ],
    bullets: {
      levenza: ["desktop"],
      genztechies: ["leadership"],
      brimble: ["integrations"],
      yusra: ["mobile", "delivery"],
      terrahaptix: [],
      chimoney: ["payments"],
      goalr: ["delivery", "integrations"],
      aviato: [],
      scrim: ["delivery", "security", "integrations"],
      earlybean: ["delivery"],
      cykmore: ["web"],
      buildbrothers: ["delivery"],
    },
    projects: ["silo", "kodo"],
  },
];

export function resumePath(id: string) {
  return `/resume/${id}.pdf`;
}
