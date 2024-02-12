"use client";

import { projects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
    name,
    image,
    description,
    link,
    status,
}: (typeof projects)[number]) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    return (
        <div
            key={name}
            className="w-full rounded-lg dark:bg-gray-900/50 bg-gray-50/50 flex flex-col"
        >
            <Link
                href={link}
                className="w-full h-44 relative rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                target="_blank"
            >
                <Image
                    src={`/images/${image}.png`}
                    alt={name}
                    fill
                    className={`w-full h-full flex-shrink-0 transition-all hover:scale-110 duration-300 ease-out object-cover ${
                        imageLoaded ? "" : "invisible"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(false)}
                />
                {/* skeleton div with tailwind */}
                {!imageLoaded && (
                    <div
                        className={
                            "absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
                        }
                    />
                )}
            </Link>
            <div className="p-5 flex flex-col  flex-grow">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-500 dark:text-gray-300 line-clamp-4 flex-grow">
                    {description}
                </p>

                <ul className="w-full flex items-center mt-2 ">
                    <li className="dark:bg-gray-900 bg-gray-100 rounded-full px-2 py-1 text-xs uppercase">
                        {status}
                    </li>
                    <li className="flex-grow" />
                    <li>
                        <Link href={link} target="_blank">
                            <FiExternalLink />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;
