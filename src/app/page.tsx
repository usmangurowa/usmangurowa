import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import { experiences, links, projects, skills, socials } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Usman Hassan",
    description:
        "Full Stack Engineer that is passionate about building impactful products, contributing to tech communities & exploring emerging technologies. Enthusiastically share insights and knowledge.",
    keywords: [
        "Usman Hassan",
        "Usman Gurowa Hassan",
        "Software Engineer",
        "Full Stack Engineer",
        "React",
        "Next.js",
        "React-Native",
        "TypeScript",
        "Express.js",
        "TailwindCSS",
    ],
    creator: "Usman Hassan",
    publisher: "Usman Hassan",
    openGraph: {
        type: "profile",
        countryName: "Nigeria",
        description: "Full Stack Engineer",
        firstName: "Usman",
        images: [
            {
                url: "/images/me.jpg",
                alt: "Usman Gurowa Hassan",
            },
        ],
        lastName: "Hassan",
        locale: "en_US",
        username: "usmangurowa",
        title: "Usman Hassan",
    },
    twitter: {
        card: "summary_large_image",
        site: "@usmangurowa",
        creator: "@usmangurowa",
        creatorId: "usmangurowa",
        description: "Full Stack Engineer",
        images: [
            {
                url: "/images/me.jpg",
                alt: "Usman Gurowa Hassan",
            },
        ],
        title: "Usman Hassan",
        siteId: "usmangurowa.codes",
    },
};

export default function Home() {
    return (
        <>
            <nav className="flex py-5 fixed w-full z-50">
                <div className="container w-full ">
                    <ul className="flex items-center justify-center md:justify-start gap-3 dark:bg-gray-900/80 bg-gray-50/80 backdrop-blur-sm rounded-full w-full p-5 z-20">
                        {Object.entries(socials).map(
                            ([key, { href, icon: Icon }]) => (
                                <li
                                    key={key}
                                    className="text-lg hover:text-blue-500"
                                >
                                    <Link href={href} target="_blank">
                                        <Icon />
                                    </Link>
                                </li>
                            )
                        )}
                        <li className="flex-grow md:block hidden" />
                        {Object.entries(links).map(([key, href]) => (
                            <li
                                key={key}
                                className="font-semibold  capitalize md:block hidden"
                            >
                                <Link href={href}>{key}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <main className="flex py-5 mt-20 min-h-screen flex-col relative container space-y-6 divide-y dark:divide-gray-900 divide-gray-100 z-10">
                {/* intro */}
                <div className="flex gap-5 md:gap-20 md:flex-row flex-col-reverse">
                    <div className="space-y-2 flex-grow">
                        <h1 className="title text-center md:text-left">
                            Usman Hassan
                        </h1>
                        <p className="dark:text-gray-300 text-gray-800 ">
                            Full Stack Engineer that is passionate about
                            building impactful products, contributing to tech
                            communities & exploring emerging technologies.
                            Enthusiastically share insights and knowledge.
                        </p>
                        <p>Abuja, Nigeria.</p>
                        <ul className="flex items-center gap-3">
                            {Object.entries(socials).map(
                                ([key, { href, icon: Icon }]) => (
                                    <li
                                        key={key}
                                        className="text-lg hover:text-blue-500"
                                    >
                                        <Link href={href} target="_blank">
                                            <Icon />
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="w-40 h-40 relative rounded-xl overflow-hidden flex-shrink-0 mx-auto ">
                        <Image
                            src={"/images/me.jpg"}
                            alt="Usman Gurowa Hassan"
                            fill
                            className="w-full h-full flex-shrink-0"
                        />
                    </div>
                </div>
                {/* About */}
                <div className="space-y-2 py-2">
                    <h2 className="title">About</h2>
                    <p className="dark:text-gray-300 text-gray-800 ">
                        A seasoned Software Engineer with 4 years of experience
                        building full-stack applications with industry-standard
                        tools like React, Next.js, React-Native, TypeScript,
                        Express.js, and TailwindCSS. Introducing agility to my
                        work ethic, i have a keen attention to detail, ensuring
                        that i fully understand the intricacies of a problem,
                        allowing me to devise optimal solutions.
                    </p>
                </div>
                {/* Skills */}
                <SkillsSection />
                <div className="space-y-2 py-2">
                    <h2 className="title">Work Experience</h2>
                    <ul className="space-y-4">
                        {experiences.map((exp) => (
                            <li key={exp.company} className="space-y-1">
                                <div className="w-full flex items-center justify-between">
                                    <h3 className="text-xl font-bold">
                                        {exp.company}
                                    </h3>
                                    <span className="dark:text-gray-300 text-gray-800">
                                        {exp.from} - {exp.to}
                                    </span>
                                </div>
                                <h5 className="text-lg font-semibold dark:text-gray-200 text-gray-900">
                                    {exp.title}
                                </h5>
                                <p className="dark:text-gray-300 text-gray-800 ">
                                    {exp.summary}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <section id="projects" />
            <section className="flex py-5  min-h-screen flex-col  container space-y-5">
                <h2 className="title">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  2xl:grid-cols-4 gap-5">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} {...project} />
                    ))}
                </div>
            </section>
        </>
    );
}
