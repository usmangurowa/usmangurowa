import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/profile";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${bricolage.variable}`}>
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
