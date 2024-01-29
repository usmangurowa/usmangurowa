import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const links = {
    projects: "#projects",
    experience: "#experience",
    skills: "#skills",
    // contact: "#contact",
};

const socials = {
    github: { href: "https://github.com/usmangurowa", icon: FaGithub },
    linkedin: {
        href: "https://www.linkedin.com/in/usmangurowa/",
        icon: FaLinkedin,
    },
    twitter: {
        href: "https://twitter.com/usmangurowa",
        icon: FaTwitter,
    },
    email: {
        href: "mailto:usmanhassangu@gmail.com",
        icon: FiMail,
    },
};

const experiences = [
    {
        title: "Front-End Engineer",
        company: "Brimble",
        location: "Delaware, United States",
        summary:
            "Led the front-end development of Brimble, independently creating over 90% of the interface. Specialized in web development, implemented Authentication, Validation, and third-party integrations, ensuring a seamless user experience.",
        description:
            "The platform for shipping modern websites and applications with ease.",
        from: "2022",
        to: "2024",
        responsibilities: [
            "Front-End Development Expertise: Independently built over 90% of Brimble's front-end interface, showcasing proficiency in web development.",
            "Comprehensive Logic Implementation: Integrated crucial functionalities such as Authentication and Validation into Brimble's front-end.",
            "Third-Party Integrations: Successfully incorporated third-party integrations with key platforms such as GitHub, Google, Firebase, and Progressive Web Applications (PWAs).",
        ],
    },
    {
        title: "Backend Engineer",
        company: "Aviato",
        location: "San Francisco, United States",
        summary:
            "Served as a Backend Engineer at Aviato, mastering the creation of API endpoints in Node.js. Specialized in testing and documentation, emphasizing a problem-solving focus with a reduced reliance on third-party libraries.",
        description: "The ultimate search engine for startups.",
        from: "2023",
        to: "2024",
        responsibilities: [
            "Independent API Endpoint Creation: Mastered the creation of API endpoints in Node.js without relying on third-party frameworks like Express.js.",
            "Proficient Testing and Documentation: Acquired skills in thorough testing and documentation of API applications.",
            "Problem-Solving Focus: Developed a problem-solving mindset by reducing dependence on third-party libraries.",
        ],
    },
    {
        title: "Mobile App Developer",
        company: "Goalr",
        location: "Lagos, Nigeria",
        summary:
            "As the sole Mobile App Developer at Goalr, efficiently developed and released an application within a tight timeframe. Demonstrated passion and dedication, successfully meeting tight deadlines through effective time and resource management.",
        description: "The ultimate search engine for startups.",
        from: "2023",
        to: "2024",
        responsibilities: [
            "Mobile Development Efficiency: As the sole mobile developer at Goalr, successfully developed and released an application within a tight timeframe of less than two months.",
            "Passionate Problem Solver: Displayed passion and dedication toward working on Goalr.",
            "Meeting Tight Deadlines: Met the target deadline by effectively managing time and resources.",
        ],
    },
    {
        title: "Software Engineering Lead",
        company: "Genztechies",
        location: "Lagos, Nigeria",
        summary:
            "Served as a Software Engineering Lead at Genztechies, playing a pivotal role in building various web applications. Exhibited proficiency in web application development, agile feature implementation, and valuable leadership within the community.",
        description: "The ultimate search engine for startups.",
        from: "2022",
        to: "2024",
        responsibilities: [
            "Web Application Expertise: Played a pivotal role in building various web applications at GenZtechies.",
            "Agile Feature Implementation: Exhibited agility in implementing new features and resolving bugs promptly.",
            "Valuable Leadership: Established a reputation as a valuable team member through consistent contributions to the community and leadership in engineering-related tasks.",
        ],
    },
    {
        title: "Full Stack Engineer",
        company: "BuildBrothers",
        location: "Benue, Nigeria",
        summary:
            "Contributed actively as a Full Stack Engineer at BuildBrothers, emphasizing effective collaboration, leadership, and individual contributions. Managed projects from initiation to delivery, ensuring all objectives were met within specified timelines.",
        description: "The ultimate search engine for startups.",
        from: "2021",
        to: "2022",
        responsibilities: [
            "Collaborative Project Contributions: Actively contributed to team projects at BuildBrothers.",
            "Ownership and Project Completion: Exhibited leadership by taking ownership of projects and seeing them through to completion.",
            "Emphasis on Individual Contributions: Recognized the importance of personal opinions and contributions within the team.",
        ],
    },
];

const skills = {
    javascript: "JavaScript",
    typescript: "TypeScript",
    react: "React.js",
    tailwindcss: "TailwindCSS",
    nextdotjs: "Next.js",
    nodedotjs: "Node.js",
    express: "Express.js",
    mongodb: "MongoDB",
    prisma: "Prisma",
    nestjs: "Nest.js",
    // zustand: "Zustand",
    expo: "Expo",
    fastify: "Fastify",
    reactquery: "React Query",
    reactrouter: "React Router",
    python: "Python",
    redux: "Redux",
    github: "Git & GitHub",
};

const projects = [
    {
        name: "Brimble",
        description:
            "A platform for shipping modern websites and applications with ease.",
        image: "/images/projects/brimble.png",
        link: "https://brimble.io/",
        source: "",
        tags: ["next.js", "tailwindcss", "typescript"],
        status: "in-progress",
        is_public: false,
    },
    {
        name: "WebShot",
        description:
            "A web application that allows users to take screenshots of websites.",
        image: "webshot",
        link: "https://webshot.vercel.app/",
        source: "https://github.com/usmangurowa/webshot",
        tags: ["next.js", "tailwindcss", "typescript"],
        status: "completed",
        is_public: true,
    },

    {
        name: "Genztechies",
        description: "Africa's Fastest Growing Network for Gen-Zs in Tech.",
        image: "genztechies",
        link: "https://www.genztechies.com/",
        source: "",
        tags: ["next.js", "tailwindcss", "typescript", "aos"],
        status: "completed",
        is_public: false,
    },
    {
        name: "Goalr",
        description: "A Wellness and Fitness Services Platform.",
        image: "goalr",
        link: "https://goalr.world",
        source: "",
        tags: ["react-native", "expo", "tailwindcss", "typescript"],
        status: "completed",
        is_public: false,
    },
    {
        name: "Penter",
        description:
            "A web application that helps you to create dynamic designs",
        image: "penter",
        link: "https://penter-app.vercel.app/",
        source: "",
        tags: ["next.js", "tailwindcss", "typescript"],
        status: "completed",
        is_public: false,
    },

    {
        name: "Scrim",
        description:
            "With Scrim, you can request payments from anyone globally using their email address.",
        image: "scrim",
        link: "https://scrim.ai/",
        source: "",
        tags: [
            "next.js",
            "tailwindcss",
            "typescript",
            "react.js",
            "shadncui",
            "react-native",
            "expo",
        ],
        status: "completed",
        is_public: false,
    },
    {
        name: "ClearLink ",
        description: "A project based assessment for a talent hunt i built.",
        image: "clearlink",
        link: "https://talentsync-assignment.vercel.app/",
        source: "",
        tags: ["next.js", "tailwindcss", "typescript", "react.js", "shadncui"],
        status: "completed",
        is_public: true,
    },
    {
        name: "WhoDeySell",
        description:
            "A people driven marketplace for buying and selling goods.",
        image: "whodeysell",
        link: "https://whodeysell.com.ng/",
        source: "",
        tags: ["next.js", "mui", "javascript", "react"],
        status: "completed",
        is_public: false,
    },
    {
        name: "Safe Pal",
        description:
            "Help your loved ones stay safe with Safe Pal, a mobile application that allows users to send their location to trusted contacts.",
        image: "/images/projects/safepal.png",
        link: "#",
        source: "",
        tags: ["next.js", "javascript", "firebase"],
        status: "discontinued",
        is_public: false,
    },
];

export { socials, experiences, skills, links, projects };
