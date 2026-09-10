export type LinkKind = "web" | "appstore" | "playstore" | "github";
export type ProjectLink = { label: string; href: string; kind: LinkKind };
export type Project = {
  id: string;
  name: string;
  when: string;
  blurb: string;
  stack: string[];
  links: ProjectLink[];
  story?: { label: string; text: string }[];
};
export type CareerJob = {
  id: string;
  role: string;
  company: string;
  href?: string;
  start: string;
  end: string;
  note?: string;
  bullets: Record<string, string>;
};

// Dates and existing titles follow the portfolio; additional roles were confirmed
// against the supplied CVs. Aviato has no supported responsibility bullets yet.
export const career = {
  updatedAt: "2026-09-11",
  name: "Usman Hassan",
  handle: "usmangurowa",
  url: "https://usmangurowa.dev",
  location: "Abuja, Nigeria",
  email: "me@usmangurowa.dev",
  phone: "+234 813 922 3164",
  socials: {
    x: "https://x.com/usmangurowa",
    github: "https://github.com/usmangurowa",
    linkedin: "https://linkedin.com/in/usmangurowa",
  },
  work: [
    {
      id: "genztechies",
      role: "Software engineering lead",
      company: "GenzTechies",
      href: "https://genztechies.com",
      start: "Aug 2022",
      end: "Now",
      note: "Build the community's web applications, mentor developers and help organize hackathons.",
      bullets: {
        delivery: "Build and maintain the community's web applications, implement features and resolve bugs.",
        leadership: "Mentor developers and help organize community hackathons.",
      },
    },
    {
      id: "brimble",
      role: "Software engineer",
      company: "Brimble",
      href: "https://brimble.io",
      start: "Aug 2022",
      end: "Early 2025",
      note: "Led front-end development for Brimble, a web hosting platform. Built the interface, authentication and validation flows, and integrations with GitHub, Google and Firebase.",
      bullets: {
        delivery: "Led front-end development for a web hosting platform, building its interface with Next.js and TypeScript.",
        integrations: "Implemented authentication and validation flows, and integrations with GitHub, Google and Firebase.",
      },
    },
    {
      id: "yusra",
      role: "Software engineer",
      company: "Yusra",
      href: "https://yusra.app",
      start: "Mar 2024",
      end: "Dec 2024",
      note: "Full-stack engineer on Yusra, a brand-wallet shopping and rewards app. Built and shipped both the mobile app (React Native & Expo) and the web application.",
      bullets: {
        delivery: "Built and shipped mobile and web applications for a brand-wallet shopping and rewards product.",
        mobile: "Developed the mobile application with React Native and Expo for store discovery, brand wallets, rewards and shopping.",
        web: "Built the web application with Next.js and TypeScript alongside the mobile product.",
        fullstack: "Worked across React Native, Expo, Next.js, PostgreSQL and Supabase on the mobile and web product.",
      },
    },
    {
      id: "terrahaptix",
      role: "Hardware engineering intern",
      company: "Terrahaptix",
      href: "https://terrahaptix.com",
      start: "Sep 2024",
      end: "Dec 2024",
      note: "Interned as a hardware engineer, learning the intricate workings of hardware devices and drone technology, building and maintaining drones.",
      bullets: {
        hardware: "Built and maintained drones during a hardware engineering internship.",
      },
    },
    {
      id: "chimoney",
      role: "Full-stack developer",
      company: "Chimoney",
      href: "https://chimoney.io",
      start: "Mar 2024",
      end: "Jun 2024",
      note: "Built payments, wallets and payouts features across Chimoney's mobile and web apps, shipping iteratively in an agile team.",
      bullets: {
        payments: "Built payments, wallets and payouts features across mobile and web applications.",
        collaboration: "Shipped features iteratively as part of an agile engineering team.",
      },
    },
    {
      id: "goalr",
      role: "Mobile developer",
      company: "Goalr",
      href: "https://goalr.world",
      start: "Jul 2023",
      end: "Mar 2024",
      note: "Sole mobile developer at Goalr, a fitness app that syncs Apple Health, Strava, Garmin and Google Fit. Designed, built and released the app end-to-end on a tight timeline.",
      bullets: {
        delivery: "Designed, built and released the React Native and Expo app as the sole mobile developer, shipping to iOS and Android.",
        integrations: "Integrated Apple Health, Strava, Garmin and Google Fit to track walks, runs and rides.",
      },
    },
    {
      id: "aviato",
      role: "Backend Engineer",
      company: "Aviato",
      start: "2023",
      end: "2024",
      bullets: {},
    },
    {
      id: "scrim",
      role: "Mobile developer",
      company: "Scrim",
      href: "https://play.google.com/store/apps/details?id=com.usescrim.app",
      start: "2022",
      end: "2023",
      note: "Sole mobile developer for Scrim, a rewards and payments app. Built the app with React Native (Expo) and TypeScript, including wallets, biometric authentication, secure storage, push notifications and OTA updates. Shipped to iOS and Android, and contributed to the web app and API integrations. The app lives on as the Chimoney app.",
      bullets: {
        delivery: "Built the rewards and payments app from the ground up with React Native, Expo and TypeScript; released it on iOS and Android.",
        security: "Implemented wallets, biometric authentication, secure storage, push notifications and over-the-air updates.",
        integrations: "Contributed to the web application and API integrations for payments, crypto swaps and global transfers.",
      },
    },
    {
      id: "earlybean",
      role: "Mobile app developer",
      company: "EarlyBean",
      start: "Aug 2022",
      end: "Mar 2023",
      note: "Sole mobile developer for a finance app that helps families teach children about money. Worked on the interface and business logic.",
      bullets: {
        delivery: "Built the mobile interface and business logic as the sole mobile developer for a family finance and learning app.",
      },
    },
    {
      id: "cykmore",
      role: "Front-end engineer",
      company: "Cykmore",
      start: "Aug 2022",
      end: "Jan 2023",
      note: "Built front-end features with Vue.js and Nuxt.js for a recruitment technology company, working alongside other developers.",
      bullets: {
        web: "Built front-end features with Vue.js and Nuxt.js, collaborating with other developers on recruitment software.",
      },
    },
    {
      id: "buildbrothers",
      role: "Software engineer intern",
      company: "BuildBrothers",
      href: "https://buildbrothers.com",
      start: "2021",
      end: "2022",
      note: "Started my career at BuildBrothers' BuildSpace hub, building web applications and learning production software development.",
      bullets: {
        delivery: "Built web applications at the BuildSpace hub, including WhoDeySell, a local marketplace with price discovery and item swapping.",
      },
    },
  ] satisfies CareerJob[],
  projects: [
    {
      id: "goalr",
      name: "Goalr",
      when: "2023 - 2024",
      blurb: "A fitness app that brings walks, runs and rides into one place.",
      stack: ["React Native", "Expo", "TypeScript"],
      story: [
        { label: "Responsibility", text: "I was the sole mobile developer, responsible for the app from its interface through to release." },
        { label: "Implementation", text: "Integrated Apple Health, Strava, Garmin and Google Fit so the app could sync activity from different services." },
        { label: "Delivery", text: "Designed, built and released the app to the App Store and Google Play on a tight timeline." },
      ],
      links: [
        { label: "goalr.world", href: "https://goalr.world", kind: "web" },
        { label: "App Store", href: "https://apps.apple.com/us/app/goalr-walk-run-ride-earn/id6465899289", kind: "appstore" },
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.goalr", kind: "playstore" },
      ],
    },
    {
      id: "scrim",
      name: "Scrim",
      when: "2022 - 2023",
      blurb: "A rewards and payments app for earning as you spend, swapping crypto and sending transfers by email or phone.",
      stack: ["React Native", "Expo", "TypeScript", "Firebase", "Reanimated"],
      story: [
        { label: "Responsibility", text: "Built the mobile app from the ground up as the sole mobile developer, covering the interface and business logic." },
        { label: "Implementation", text: "Connected wallet and payment flows with biometric authentication, secure storage, push notifications and over-the-air updates. I also contributed to the web app and API integrations." },
        { label: "Delivery", text: "Shipped to iOS and Android. The original Google Play listing now belongs to the Chimoney app." },
      ],
      links: [
        { label: "Google Play (now Chimoney)", href: "https://play.google.com/store/apps/details?id=com.usescrim.app", kind: "playstore" },
      ],
    },
    {
      id: "yusra",
      name: "Yusra",
      when: "2024",
      blurb: "A wallet for every brand: discover stores, earn rewards, save and shop.",
      stack: ["React Native", "Expo", "Next.js", "TypeScript", "PostgreSQL", "Supabase"],
      story: [
        { label: "Responsibility", text: "Worked full-stack across both the mobile app and the web application." },
        { label: "Implementation", text: "Built the mobile product with React Native and Expo, and the browser experience with Next.js. The product covers store discovery, brand wallets, rewards and shopping." },
        { label: "Delivery", text: "Built and shipped both surfaces rather than working on only one client." },
      ],
      links: [{ label: "yusra.app", href: "https://yusra.app", kind: "web" }],
    },
    {
      id: "brimble",
      name: "Brimble",
      when: "2022 - 2025",
      blurb: "A platform for shipping modern websites and applications. Led the front-end implementation, including authentication, validation and third-party integrations.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      links: [{ label: "brimble.io", href: "https://brimble.io", kind: "web" }],
    },
    {
      id: "genztechies",
      name: "GenzTechies",
      when: "2023",
      blurb: "Web applications for a community of young people working in technology.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
      links: [{ label: "genztechies.com", href: "https://genztechies.com", kind: "web" }],
    },
    {
      id: "silo",
      name: "Silo",
      when: "2025 - 2026",
      blurb: "A mobile-first personal finance app with transaction intelligence, fund locking, group savings and bill splitting.",
      stack: ["React Native", "Expo", "TypeScript", "Zustand", "Tailwind CSS"],
      links: [{ label: "silo.ng", href: "https://silo.ng", kind: "web" }],
    },
    {
      id: "kodo",
      name: "Kodo",
      when: "2025 - 2026",
      blurb: "A developer productivity and session tracking platform spanning mobile, web and IDE extensions.",
      stack: ["TypeScript", "React Native", "Expo", "Next.js"],
      links: [{ label: "kodo.codes", href: "https://kodo.codes", kind: "web" }],
    },
    {
      id: "penter",
      name: "Penter",
      when: "2023 - 2024",
      blurb: "A design tool that turns CSV or JSON data into dynamic designs using text, images and colours.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
      links: [{ label: "penter.xyz", href: "https://penter.xyz", kind: "web" }],
    },
    {
      id: "whodeysell",
      name: "WhoDeySell",
      when: "2021 - 2022",
      blurb: "A local marketplace with price discovery and a Swap-It feature for trading items. Built while at BuildBrothers.",
      stack: ["React", "Next.js", "JavaScript"],
      links: [{ label: "whodeysell.com.ng", href: "https://whodeysell.com.ng", kind: "web" }],
    },
  ] satisfies Project[],
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
  ],
  award: "1st place, GenzTechies Hackfest (Jul 2022), with SafePal, a missing-person reporting app.",
};
