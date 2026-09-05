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
    description: "A balanced overview of mobile, web and full-stack product work.",
    summary: "Software engineer building mobile and web products since 2021. Experience includes payments, wallets, fitness integrations and developer tools, from interface implementation and API integrations through to release. Work spans independent delivery, engineering teams and community mentoring.",
    skills: [
      { label: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
      { label: "Mobile and web", items: ["React Native", "Expo", "React", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS"] },
      { label: "Backend and data", items: ["Node.js", "Hono", "Drizzle", "Prisma", "PostgreSQL", "Redis", "Better Auth"] },
      { label: "Delivery", items: ["Docker", "Coolify", "Git", "GitHub", "Playwright", "Vitest"] },
    ],
    bullets: {
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
    summary: "Full-stack software engineer focused on TypeScript APIs, relational data and authentication. Experience includes payments, wallets and payouts across mobile and web products, plus client-side API integrations. Current toolkit includes Hono, Drizzle, PostgreSQL and Docker, with mobile and frontend experience that informs API integration work.",
    skills: [
      { label: "Languages and runtime", items: ["TypeScript", "JavaScript", "Python", "Node.js", "Bun"] },
      { label: "APIs and data", items: ["Hono", "Express.js", "Drizzle", "Prisma", "PostgreSQL", "Redis", "Supabase", "Firebase"] },
      { label: "Auth and services", items: ["Better Auth", "Vercel AI SDK", "Stripe", "Paddle", "Resend"] },
      { label: "Infrastructure and tests", items: ["Docker", "Coolify", "Cloudflare Workers", "Infisical", "Vitest", "Playwright"] },
    ],
    bullets: {
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
    summary: "Software engineer focused on web interfaces with React, Next.js and TypeScript. Led frontend delivery for a web hosting platform and built web applications for wallet, shopping and community products. Additional experience with Vue.js, Nuxt.js and React Native, working independently and alongside other engineers.",
    skills: [
      { label: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
      { label: "Frameworks", items: ["React", "Next.js", "Vue.js", "Nuxt.js", "React Native"] },
      { label: "UI and state", items: ["Tailwind CSS", "shadcn/ui", "Radix UI", "TanStack Query", "TanStack Table", "Zustand", "Zod", "Motion"] },
      { label: "Delivery and testing", items: ["Git", "GitHub", "Vercel", "Playwright", "Vitest"] },
    ],
    bullets: {
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
