import { ThemeProvider } from "@/components/theme-provider";
import { brand } from "@/data/brand";
import { profile } from "@/data/profile";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type { CSSProperties } from "react";
import "./globals.css";

const inter = localFont({
  src: "../assets/fonts/Inter-latin-variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const bricolage = localFont({
  src: "../assets/fonts/BricolageGrotesque-latin-variable.woff2",
  weight: "200 800",
  variable: "--font-bricolage",
  display: "swap",
});

const brandVariables: CSSProperties & Record<`--${string}`, string> = {
  "--light-paper": brand.light.paper,
  "--light-ink": brand.light.ink,
  "--light-muted": brand.light.muted,
  "--light-rule": brand.light.rule,
  "--light-leader": brand.light.leader,
  "--light-raised": brand.light.raised,
  "--dark-paper": brand.dark.paper,
  "--dark-ink": brand.dark.ink,
  "--dark-muted": brand.dark.muted,
  "--dark-rule": brand.dark.rule,
  "--dark-leader": brand.dark.leader,
  "--dark-raised": brand.dark.raised,
};

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: {
    default: `${profile.name}, ${profile.title.toLowerCase()}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  openGraph: {
    title: `${profile.name}, ${profile.title.toLowerCase()}`,
    description: profile.description,
    url: profile.url,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name}, ${profile.title.toLowerCase()}`,
    description: profile.description,
    creator: `@${profile.handle}`,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    types: { "text/plain": "/llms.txt" },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${bricolage.variable}`} style={brandVariables}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="mx-auto max-w-[41rem] px-6 pb-24 pt-[clamp(3rem,9vw,5.5rem)]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
