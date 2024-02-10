import type { Metadata } from "next";
import { Roboto_Slab, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const roboto = Roboto_Slab({ subsets: ["latin"] });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Usman's Portfolio",
    description:
        "Full Stack Engineer that is passionate about building impactful products, contributing to tech communities & exploring emerging technologies. Enthusiastically share insights and knowledge.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
            <GoogleAnalytics gaId="GTM-TBV72HDW" />
        </html>
    );
}
