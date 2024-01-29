import type { Metadata } from "next";
import { Roboto_Slab, Poppins } from "next/font/google";

import "./globals.css";

const roboto = Roboto_Slab({ subsets: ["latin"] });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}