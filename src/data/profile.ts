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
  standfirst: "Software engineer building products end-to-end, from mobile and web to backend and the infrastructure they run on.",
  description:
    "Software engineer building products end-to-end, from mobile and web to backend and the infrastructure they run on. Passionate about impactful products, tech communities & emerging technologies.",
  email: "me@usmangurowa.dev",
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
      note: "Software Engineering Lead at GenzTechies, Africa's fastest-growing network for Gen-Zs in tech. Build the community's web applications, mentor developers and help organize hackathons.",
    },
    {
      role: "Software engineer",
      company: "Brimble",
      href: "https://brimble.io",
      start: "Aug 2022",
      end: "Early 2025",
      note: "Led the front-end development of Brimble, a web hosting platform, independently creating over 90% of the interface. Implemented authentication, validation and third-party integrations, ensuring a seamless user experience.",
    },
    {
      role: "Software engineer",
      company: "Yusra",
      href: "https://yusra.app",
      start: "Mar 2024",
      end: "Dec 2024",
      note: "Full-stack engineer on Yusra, a brand-wallet shopping and rewards app. Built and shipped both the mobile app (React Native & Expo) and the web application.",
    },
    {
      role: "Hardware engineering intern",
      company: "Terrahaptix",
      href: "https://terrahaptix.com",
      start: "Sep 2024",
      end: "Dec 2024",
      note: "Interned as a hardware engineer, learning the intricate workings of hardware devices and drone technology, building and maintaining drones.",
    },
    {
      role: "Full-stack developer",
      company: "Chimoney",
      href: "https://chimoney.io",
      start: "Mar 2024",
      end: "Jun 2024",
      note: "Built payments, wallets and payouts features across Chimoney's mobile and web apps, shipping iteratively in an agile team.",
    },
    {
      role: "Mobile developer",
      company: "Goalr",
      href: "https://goalr.world",
      start: "Jul 2023",
      end: "Mar 2024",
      note: "Sole mobile developer at Goalr, a fitness app that syncs Apple Health, Strava, Garmin and Google Fit. Designed, built and released the app end-to-end on a tight timeline.",
    },
    {
      role: "Mobile developer",
      company: "Scrim",
      href: "https://play.google.com/store/apps/details?id=com.usescrim.app",
      start: "2022",
      end: "2023",
      note: "Sole mobile developer for Scrim, a rewards and payments app for earning as you spend, swapping crypto and sending global transfers. Built the entire app from the ground up with React Native (Expo) and TypeScript: wallets, biometric authentication, secure storage, push notifications and OTA updates. Shipped to iOS and Android, and contributed to the web app and API integrations.",
    },
    {
      role: "Software engineer intern",
      company: "BuildBrothers",
      href: "https://buildbrothers.com",
      start: "2021",
      end: "2022",
      note: "Started my career at BuildBrothers' BuildSpace hub, building web applications and learning production software development.",
    },
  ] satisfies Job[],

  projects: [
    {
      name: "Silo",
      when: "2025 – 2026",
      blurb:
        "A mobile-first personal finance app with transaction intelligence, fund locking, group savings and bill splitting.",
      links: [{ label: "usesilo.app", href: "https://usesilo.app", kind: "web" }],
    },
    {
      name: "Kodo",
      when: "2025 – 2026",
      blurb: "A developer productivity and session tracking platform spanning mobile, web and IDE extensions.",
      links: [{ label: "kodo.codes", href: "https://kodo.codes", kind: "web" }],
    },
    {
      name: "Goalr",
      when: "2023 – 2024",
      blurb: "A fitness app that syncs Apple Health, Strava, Garmin and Google Fit to track walks, runs and rides. Built and released the mobile app solo.",
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
        "A rewards and payments app: earn as you spend, swap crypto instantly and send global transfers via email or phone. Built solo end-to-end and shipped to iOS and Android.",
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
      blurb: "A wallet for every brand, all in one app. Shoppers discover stores, create brand wallets, earn rewards, save and shop in one place. Built the mobile and web apps.",
      links: [{ label: "yusra.app", href: "https://yusra.app", kind: "web" }],
    },
    {
      name: "Brimble",
      when: "2022 – 2025",
      blurb: "A platform for shipping modern websites and applications with ease.",
      links: [{ label: "brimble.io", href: "https://brimble.io", kind: "web" }],
    },
    {
      name: "GenzTechies",
      when: "2023",
      blurb: "Africa's fastest growing network for Gen-Zs in tech.",
      links: [{ label: "genztechies.com", href: "https://genztechies.com", kind: "web" }],
    },
    {
      name: "Penter",
      when: "2023 – 2024",
      blurb: "A web application that helps you create dynamic designs.",
      links: [{ label: "penter.xyz", href: "https://penter.xyz", kind: "web" }],
    },
    {
      name: "WhoDeySell",
      when: "2021 – 2022",
      blurb: "A people driven marketplace for finding items near you, with price discovery and a Swap-It feature for trading items. Built while at BuildBrothers.",
      links: [{ label: "whodeysell.com.ng", href: "https://whodeysell.com.ng", kind: "web" }],
    },
  ] satisfies Project[],

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

  sign: "Want to chat? Just shoot me a DM with a direct question on X.",
} as const;
