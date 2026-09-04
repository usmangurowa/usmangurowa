import type { SkillIconName } from "@/components/skill-icon";

export type LinkKind = "web" | "appstore" | "playstore" | "github";

export type ProjectLink = {
  label: string;
  href: string;
  kind: LinkKind;
};

export type Job = {
  role: string;
  company: string;
  href?: string;
  start: string;
  end?: string;
  note: string;
  tree?: { name: string; blurb: string }[];
};

export type Project = {
  name: string;
  when: string;
  blurb: string;
  links: ProjectLink[];
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
  name: "Usman Hassan",
  handle: "usmangurowa",
  url: "https://www.usmangurowa.codes",
  location: "Abuja, Nigeria",
  title: "Software engineer",
  standfirst: "Software engineer. Mobile first, whole stack after.",
  description:
    "Software engineer in Abuja building products end to end: mobile apps, web, APIs and the infrastructure underneath.",
  email: "usmanhassangu@gmail.com",
  resume: "/resume.pdf",
  socials: {
    x: "https://x.com/usmangurowa",
    github: "https://github.com/usmangurowa",
    linkedin: "https://linkedin.com/in/usmangurowa",
  },

  work: [
    {
      role: "Software engineering lead",
      company: "GenzTechies",
      href: "https://genztechies.com",
      start: "Aug 2022",
      end: "Now",
      note: "Africa's fastest-growing network for Gen-Zs in tech. I build its web apps, mentor developers and help run the hackathons.",
    },
    {
      role: "Software engineer",
      company: "Brimble",
      href: "https://brimble.io",
      start: "Aug 2022",
      end: "Early 2025",
      note: "Web hosting platform. Led the frontend and built most of the interface, from auth to third-party integrations.",
    },
    {
      role: "Software engineer",
      company: "Yusra",
      href: "https://yusra.app",
      start: "Mar 2024",
      end: "Dec 2024",
      note: "A wallet for every brand. Shipped both surfaces.",
      tree: [
        { name: "Yusra app", blurb: "Shopping and rewards on React Native and Expo." },
        { name: "Yusra web", blurb: "The same product in the browser, on Next.js." },
      ],
    },
    {
      role: "Hardware engineering intern",
      company: "Terrahaptix",
      href: "https://terrahaptix.com",
      start: "Sep 2024",
      end: "Dec 2024",
      note: "A detour into hardware. Built and maintained drones.",
    },
    {
      role: "Full-stack developer",
      company: "Chimoney",
      href: "https://chimoney.io",
      start: "Mar 2024",
      end: "Jun 2024",
      note: "Payments, wallets and payouts across the mobile and web apps.",
    },
    {
      role: "Mobile developer",
      company: "Goalr",
      href: "https://goalr.world",
      start: "Jul 2023",
      end: "Mar 2024",
      note: "Fitness app that syncs Apple Health, Strava, Garmin and Google Fit. Only mobile developer, idea to store, on a tight clock.",
    },
    {
      role: "Mobile developer",
      company: "Scrim",
      href: "https://play.google.com/store/apps/details?id=com.usescrim.app",
      start: "2022",
      end: "2023",
      note: "Rewards and payments app. Built the whole thing from zero and shipped it to both stores.",
      tree: [
        { name: "Wallets", blurb: "Earn as you spend, swap crypto, send money by email or phone." },
        { name: "Plumbing", blurb: "Biometric auth, secure storage, push notifications, OTA updates." },
      ],
    },
    {
      role: "Software engineer intern",
      company: "BuildBrothers",
      href: "https://buildbrothers.com",
      start: "2021",
      end: "2022",
      note: "Where it started. Built web apps at the BuildSpace hub and learned what production means.",
    },
  ] satisfies Job[],

  projects: [
    {
      name: "Silo",
      when: "2025 – 2026",
      blurb:
        "Personal finance for your phone. Transaction intelligence, fund locking, group savings and bill splitting.",
      links: [{ label: "usesilo.app", href: "https://usesilo.app", kind: "web" }],
    },
    {
      name: "Kodo",
      when: "2025 – 2026",
      blurb: "Developer productivity and session tracking across mobile, web and your editor.",
      links: [{ label: "kodo.codes", href: "https://kodo.codes", kind: "web" }],
    },
    {
      name: "Goalr",
      when: "2023 – 2024",
      blurb: "Walk, run, ride, earn. Syncs Apple Health, Strava, Garmin and Google Fit.",
      links: [
        { label: "goalr.world", href: "https://goalr.world", kind: "web" },
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/goalr-walk-run-ride-earn/id6465899289",
          kind: "appstore",
        },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.goalr",
          kind: "playstore",
        },
      ],
    },
    {
      name: "Scrim",
      when: "2022 – 2023",
      blurb:
        "Earn as you spend, swap crypto instantly, send money anywhere by email or phone. Lives on as the Chimoney app.",
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.usescrim.app",
          kind: "playstore",
        },
      ],
    },
    {
      name: "Yusra",
      when: "2024",
      blurb: "A wallet for every brand. Discover stores, earn rewards, save and shop in one app.",
      links: [{ label: "yusra.app", href: "https://yusra.app", kind: "web" }],
    },
    {
      name: "Brimble",
      when: "2022 – 2025",
      blurb: "Ship modern websites and apps without the ceremony.",
      links: [{ label: "brimble.io", href: "https://brimble.io", kind: "web" }],
    },
    {
      name: "GenzTechies",
      when: "2023",
      blurb: "The community's home on the web.",
      links: [{ label: "genztechies.com", href: "https://genztechies.com", kind: "web" }],
    },
    {
      name: "Penter",
      when: "2023 – 2024",
      blurb: "Dynamic designs, made in the browser.",
      links: [{ label: "penter.xyz", href: "https://penter.xyz", kind: "web" }],
    },
    {
      name: "WhoDeySell",
      when: "2021 – 2022",
      blurb: "A people-driven marketplace with price discovery and a Swap-It feature for trading items.",
      links: [{ label: "whodeysell.com.ng", href: "https://whodeysell.com.ng", kind: "web" }],
    },
  ] satisfies Project[],

  recognition: [
    {
      name: "1st place",
      detail: "GenzTechies Hackfest",
      href: "https://github.com/usmangurowa/safepal",
      start: "Jul 2022",
      note: "My first hackathon. Won it with SafePal, a missing-persons app built on consent-based location sharing.",
    },
    {
      name: "Core organiser",
      detail: "GenzTechies hackathons",
      href: "https://genztechies.com",
      start: "2023",
      end: "Now",
      note: "Two hackathons organised since winning one.",
    },
  ] satisfies LedgerItem[],

  education: [
    {
      name: "B.Sc. Computer Science",
      detail: "Taraba State University",
      href: "https://tsuniversity.edu.ng",
      start: "2022",
      end: "2025",
    },
    {
      name: "Diploma in Computer Science",
      detail: "NACEST",
      start: "2018",
      end: "2021",
      note: "Nigerian Army College of Environmental Science and Technology.",
    },
  ] satisfies LedgerItem[],

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

  sign: "If it has to run on a phone, in a browser and on a server, I'm your guy.",
} as const;
