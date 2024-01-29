"use client";

import { skills } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const SkillsSection = () => {
    // get color scheme from browser
    const [scheme, setScheme] = React.useState("light");
    // const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        // setMounted(true);
        setScheme(
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
        );
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => {
                setScheme(e.matches ? "dark" : "light");
            });
        return () => {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", () => {});
        };
    }, []);
    return (
        <div className="space-y-2 py-2">
            <h2 className="title">Skills</h2>
            <ul className="flex flex-row items-center flex-wrap gap-2">
                {Object.entries(skills).map(([key, title]) => (
                    <li key={key} title={title}>
                        <Image
                            src={`https://cdn.simpleicons.org/${key}/${
                                scheme === "light" ? "black" : "white"
                            }`}
                            alt={title}
                            width={25}
                            height={25}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsSection;
