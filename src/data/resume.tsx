import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Usman Hassan",
  initials: "US",
  url: "https://www.usmangurowa.codes",
  location: "Abuja, Nigeria",
  locationLink: "https://www.google.com/maps/place/abuja",
  description:
    "I am Passionate about building impactful products, contributing to tech communities & exploring emerging technologies. I enthusiastically share insights and knowledge.",
  summary:
    "I'm a software engineer passionate about technology and community building. My journey began with coding and quickly evolved into teaching, mentoring, and creating innovative solutions like Brimble, a web hosting platform. As a Community Software Engineering Lead, I've dedicated myself to supporting developers, organizing hackathons, and contributing to open-source projects. My goal is to make technology more accessible and help others grow in their tech careers.",
  // "Started my career in 2021 as web developer. Won my first hackathon one year later, start learning mobile development with react-native and expo. Got a job as fullstack developer at Brimble a web hosting platform, where building one of the best application."
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "JavaScript",
    "Postgres",
    "Express.js",
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
        "Interned as hardware engineer, learning the intricate working of hardware devices. Learning drone technology and how to build and maintain drones."
    },
    {
      company: "Yusra",
      badges: [],
      href: "https://yusra.app",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/yusra.png",
      start: "March 2024",
      end: "Present",
      description:
        "Worked as a fullstack developer on Yusra, implementing both mobile and web applications."
    },
    //

    {
      company: "Brimble",
      href: "https://brimble.io/",
      badges: [],
      location: "Delaware, United States",
      title: "Software Engineer",
      logoUrl: "/brimble.jpg",
      start: "Aug 2022",
      end: "Present",
      description:
        "Led the front-end development of Brimble, independently creating over 90% of the interface. Specialized in web development, implemented Authentication, Validation, and third-party integrations, ensuring a seamless user experience."
    },
    {
      company: "Goalr",
      href: "https://goalr.world",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Software Engineer",
      logoUrl: "/goalr.jpg",
      start: "July 2023",
      end: "Mar 2024",
      description:
        "As the sole Mobile App Developer at Goalr, efficiently developed and released an application within a tight timeframe. Demonstrated passion and dedication, successfully meeting tight deadlines through effective time and resource management."
    },
    {
      company: "Chimoney",
      href: "https://chimoney.io",
      badges: [],
      location: "Canada",
      title: "Full-Stack Developer",
      logoUrl: "/chimoney.jpg",
      start: "Mar 2024",
      end: "June 2024",
      description:
        "Worked as a Full-Stack Developer at Chimoney, contributing to the development of a web and mobile application. Demonstrated proficiency in web and mobile development, agile feature implementation, and valuable leadership within the community."
    },
    {
      company: "GenzTechies",
      href: "https://genztechies.com",
      badges: [],
      location: "World",
      title: "Software Engineering Lead",
      logoUrl: "/genztechies.jpg",
      start: "Aug 2022",
      end: "Present",
      description:
        "Currently contributing as a Software Engineering Lead at Genztechies, playing a pivotal role in building various web applications. Exhibited proficiency in web application development, agile feature implementation, and valuable leadership within the community."
    }
  ],
  education: [
    {
      school: "Taraba State University",
      href: "https://tsuniversity.edu.ng",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/tsu.png",
      start: "2022",
      end: "Present"
    },
    {
      school: "Nigerian Army College of Environmental Science and Technology",
      href: "#",
      degree: "Diplomat In of Computer Science",
      logoUrl: "/",
      start: "2018",
      end: "2021"
    }
  ],
  projects: [
    {
      title: "Brimble",
      href: "https://brimble.io",
      dates: "Jan 2024 - Feb 2024",
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
      title: "Yusra",
      href: "https://yusra.app",
      dates: "March 2024 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
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
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: []
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: []
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: []
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends"
        }
      ]
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint"
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning"
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet"
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server"
        }
      ]
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet"
        }
      ]
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017"
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient"
        }
      ]
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip"
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/"
        }
      ]
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend"
        }
      ]
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/"
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/"
        }
      ]
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: []
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis"
        }
      ]
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a"
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native"
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68"
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native"
        }
      ]
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: []
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native"
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68"
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native"
        }
      ]
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch"
        }
      ]
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes"
        }
      ]
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic"
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails"
        }
      ]
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native"
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails"
        }
      ]
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11"
        }
      ]
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark"
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
