import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "8rem",
                lg: "16rem",
                xl: "16rem",
                "2xl": "16rem",
            },
        },
        extend: {
            colors: {
                gray: {
                    "50": "hsl(120, 6%, 97%)",
                    "100": "hsl(100, 5%, 89%)",
                    "200": "hsl(108, 5%, 78%)",
                    "300": "hsl(105, 4%, 64%)",
                    "400": "hsl(113, 4%, 50%)",
                    "500": "hsl(113, 4%, 40%)",
                    "600": "hsl(111, 4%, 32%)",
                    "700": "hsl(120, 4%, 26%)",
                    "800": "hsl(120, 3%, 22%)",
                    "900": "hsl(120, 3%, 19%)",
                    "950": "hsl(120, 4%, 5%)",
                },
            },
        },
    },
    plugins: [],
};
export default config;
