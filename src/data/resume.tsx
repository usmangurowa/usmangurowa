import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Usman Hassan",
  initials: "US",
  url: "https://www.usmangurowa.codes",
  location: "Abuja, Nigeria",
  locationLink: "https://www.google.com/maps/place/abuja",
  description:
    "Mobile-focused software engineer (React Native & Expo). Passionate about building impactful products, contributing to tech communities & exploring emerging technologies.",
  summary:
    "I'm a software engineer specializing in mobile development with React Native and Expo. I started out in 2021 as a web developer and won my first hackathon a year later with a mobile app. Since then I've been the sole mobile developer behind apps like Scrim and Goalr — owning everything from architecture and API integrations to App Store and Play Store releases — and shipped mobile and web products at Chimoney and Yusra. I also led front-end development at Brimble, a web hosting platform, and serve as Software Engineering Lead at GenzTechies, where I mentor developers and organize hackathons.",
  avatarUrl: "/me.jpg",
  skills: [
    "React Native",
    "Expo",
    "TypeScript",
    "React",
    "Next.js",
    "Reanimated",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "JavaScript",
    "Python",
    "Postgres",
    "Supabase",
    "Firebase"
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "usmanhassangu@gmail.com",
    tel: "+234 8139223164",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/usmangurowa",
        icon: Icons.github,

        navbar: true
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/usmangurowa",
        icon: Icons.linkedin,

        navbar: true
      },
      X: {
        name: "X",
        url: "https://x.com/usmangurowa",
        icon: Icons.x,

        navbar: true
      },

      email: {
        name: "Send Email",
        url: "mailto:usmanhassangu@gmail.com",
        icon: Icons.email,
        navbar: false
      }
    }
  },

  work: [
    {
      company: "Terrahaptix",
      href: "https://terrahaptix.com",
      badges: [],
      location: "On-Site",
      title: "Hardware Engineering Intern",
      logoUrl: "/terrahaptix.jpg",
      start: "Sept 2024",
      end: "Dec 2024",
      description:
        "Interned as a hardware engineer, learning the intricate workings of hardware devices and drone technology — building and maintaining drones."
    },
    {
      company: "Yusra",
      badges: [],
      href: "https://yusra.app",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/yusra.png",
      start: "March 2024",
      end: "Dec 2024",
      description:
        "Full-stack engineer on Yusra, a brand-wallet shopping and rewards app. Built and shipped both the mobile app (React Native & Expo) and the web application."
    },
    {
      company: "Chimoney",
      href: "https://chimoney.io",
      badges: [],
      location: "Canada (Remote)",
      title: "Full-Stack Developer",
      logoUrl: "/chimoney.jpg",
      start: "Mar 2024",
      end: "June 2024",
      description:
        "Built features across Chimoney's mobile and web apps — payments, wallets and payouts — shipping iteratively in an agile team."
    },
    {
      company: "Goalr",
      href: "https://goalr.world",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Mobile Developer",
      logoUrl: "/goalr.jpg",
      start: "July 2023",
      end: "Mar 2024",
      description:
        "Sole mobile developer at Goalr, a fitness app that syncs Apple Health, Strava, Garmin and Google Fit. Designed, built and released the app end-to-end on a tight timeline."
    },
    {
      company: "Scrim",
      href: "https://github.com/usmangurowa/scrim",
      badges: [],
      location: "Remote",
      title: "Mobile Developer",
      logoUrl: "/scrim.png",
      start: "2022",
      end: "2023",
      description:
        "Sole mobile developer. Built the entire Scrim app from the ground up with React Native (Expo) and TypeScript — wallets and payments, biometric authentication, secure storage, push notifications and OTA updates — and shipped it to iOS and Android. Also contributed to the web app and API integrations."
    },
    {
      company: "Brimble",
      href: "https://brimble.io/",
      badges: [],
      location: "Delaware, United States",
      title: "Software Engineer",
      logoUrl: "/brimble.jpg",
      start: "Aug 2022",
      end: "Early 2025",
      description:
        "Led the front-end development of Brimble, a web hosting platform — independently creating over 90% of the interface. Implemented authentication, validation and third-party integrations, ensuring a seamless user experience."
    },
    {
      company: "GenzTechies",
      href: "https://genztechies.com",
      badges: [],
      location: "Remote",
      title: "Software Engineering Lead",
      logoUrl: "/genztechies.jpg",
      start: "Aug 2022",
      end: "Present",
      description:
        "Software Engineering Lead at GenzTechies, Africa's fastest-growing network for Gen-Zs in tech. Build the community's web applications, mentor developers and help organize hackathons."
    },
    {
      company: "BuildBrothers (BuildSpace)",
      href: "https://buildbrothers.com",
      badges: [],
      location: "Nigeria",
      title: "Software Engineer Intern",
      logoUrl: "/buildspace.jpg",
      start: "2021",
      end: "2022",
      description:
        "Started my career at BuildBrothers' BuildSpace hub, building web applications and learning production software development."
    }
  ],
  education: [
    {
      school: "Taraba State University",
      href: "https://tsuniversity.edu.ng",
      degree: "B.Sc. Computer Science",
      logoUrl: "/tsu.png",
      start: "2022",
      end: "2025"
    },
    {
      school: "Nigerian Army College of Environmental Science and Technology",
      href: "#",
      degree: "Diploma in Computer Science",
      logoUrl: "/",
      start: "2018",
      end: "2021"
    }
  ],
  projects: [
    {
      title: "Scrim",
      href: "https://github.com/usmangurowa/scrim",
      dates: "2022 - 2023",
      active: true,
      description:
        "A payments mobile app I built solo end-to-end — wallets, biometric auth, push notifications and OTA updates — shipped to iOS and Android.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "React Navigation",
        "Reanimated",
        "Firebase",
        "SWR"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/usmangurowa/scrim",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/scrim.png",
      video: ""
    },
    {
      title: "Goalr",
      href: "https://goalr.world",
      dates: "July 2023 - Mar 2024",
      active: true,
      description:
        "A fitness app that syncs Apple Health, Strava, Garmin and Google Fit to track walks, runs and rides. Built and released the mobile app solo.",
      technologies: ["React Native", "Expo", "TypeScript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://goalr.world",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "/goalr.png",
      video: ""
    },
    {
      title: "Yusra",
      href: "https://yusra.app",
      dates: "March 2024 - Dec 2024",
      active: true,
      description:
        "A wallet for every brand, all in one app — shoppers discover stores, create brand wallets, earn rewards, save and shop in one place. Built the mobile and web apps.",
      technologies: [
        "React Native",
        "Expo",
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Supabase"
      ],
      links: [
        {
          type: "Website",
          href: "https://yusra.app",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "/yusra-web.png",
      video: ""
    },
    {
      title: "Brimble",
      href: "https://brimble.io",
      dates: "Aug 2022 - 2025",
      active: true,
      description:
        "A platform for shipping modern websites and applications with ease.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "PayStack",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://brimble.io",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "/brimble.png",
      video: ""
    },
    {
      title: "GenzTechies",
      href: "https://genztechies.com",
      dates: "April 2023 - September 2023",
      active: true,
      description: "Africa's Fastest Growing Network for Gen-Zs in Tech.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers"
      ],
      links: [
        {
          type: "Website",
          href: "https://genztechies.com",
          icon: <Icons.globe className="size-3" />
        }
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />
        // }
      ],
      image: "/genztechies.png",
      video: ""
    },
    {
      title: "Penter",
      href: "https://penter.xyz",
      dates: "April 2023 - March 2024",
      active: true,
      description: "A web application that helps you to create dynamic designs",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers"
      ],
      links: [
        {
          type: "Website",
          href: "https://penter.xyz",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "/penter.png",
      video: ""
    }
  ],
  hackathons: [
    {
      title: "GenzTechies Hackathon",
      dates: "July 2022",
      location: "Nigeria",
      description:
        "Won 1st place at my first-ever hackathon with SafePal, a mobile app for reporting missing persons that uses consent-based location tracking to give security agencies the data they need to find them. This win led me into the GenzTechies core community, where I now serve as Software Engineering Lead.",
      image: "/genztechies.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/usmangurowa/safepal"
        }
      ]
    }
  ]
} as const;

`

THINGS I HAVE DONE
- Teach programning
- Mentor People
- Community Software Engineering Lead
- Hosted and Organised Hackathons
- Won a hackathon
- Built a SaaS (Brimble, a webhosting platform similar to Vercel and Netlify)
- Built open source projects
- Contributed to open source projects
- Active community member
- mentor community member
`;
