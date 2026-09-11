import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/profile";
import { resumePath, resumes } from "@/data/resumes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résumés",
  description: "Download Usman Hassan's general, backend, frontend or mobile development résumé.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Résumés | Usman Hassan",
    description: "General, backend, frontend and mobile development résumés.",
    url: "/resume",
  },
};

export default function ResumePage() {
  return (
    <>
      <nav aria-label="Page navigation" className="mb-10 flex items-center justify-between">
        <Link href="/">← {profile.name}</Link>
        <ThemeToggle />
      </nav>
      <h1 className="masthead-title">Résumés</h1>
      <p className="lede">
        Four versions of the same career history, with different emphasis.
        The general version covers mobile, web, desktop and full-stack work.
        Each is a text-based PDF.
      </p>
      <section className="section" aria-label="Résumé downloads">
        <ul className="works">
          {resumes.map((resume) => (
            <li key={resume.id} className="work">
              <h2>{resume.label}</h2>
              <p>{resume.description}</p>
              <div className="ctas">
                <a className="cta" href={resumePath(resume.id)} aria-label={`View ${resume.label.toLowerCase()} résumé PDF`}>
                  <span>View PDF</span>
                </a>
                <a className="cta" href={resumePath(resume.id)} download aria-label={`Download ${resume.label.toLowerCase()} résumé PDF`}>
                  <span>Download PDF</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <p className="colophon">
        Contact: <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
    </>
  );
}
