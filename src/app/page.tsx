import { Contributions } from "@/components/contributions";
import { Footer } from "@/components/footer";
import { Ledger, WorkLedger } from "@/components/ledger";
import { Lede, Masthead } from "@/components/masthead";
import { Projects, Skills } from "@/components/projects";
import { profile } from "@/data/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${profile.url}/#website`,
      url: profile.url,
      name: profile.name,
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${profile.url}/#profile`,
      url: profile.url,
      name: `${profile.name}, ${profile.title.toLowerCase()}`,
      isPartOf: { "@id": `${profile.url}/#website` },
      mainEntity: { "@id": `${profile.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${profile.url}/#person`,
      url: profile.url,
      name: profile.name,
      jobTitle: profile.title,
      description: profile.description,
      email: `mailto:${profile.email}`,
      homeLocation: { "@type": "Place", name: profile.location },
      sameAs: Object.values(profile.socials),
      knowsAbout: profile.skills.flatMap((g) => g.items.map((s) => s.name)),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Masthead />
      <Lede />

      <section className="section" aria-labelledby="work">
        <h2 id="work">Work</h2>
        <WorkLedger jobs={profile.work} />
      </section>

      <section className="section" aria-labelledby="skills">
        <h2 id="skills">Skills</h2>
        <Skills groups={profile.skills} />
      </section>

      <section className="section" aria-labelledby="projects">
        <h2 id="projects">Projects</h2>
        <Projects projects={profile.projects} />
      </section>

      <Contributions />

      <section className="section" aria-labelledby="recognition">
        <h2 id="recognition">Recognition</h2>
        <Ledger items={profile.recognition} />
      </section>

      <section className="section" aria-labelledby="education">
        <h2 id="education">Education</h2>
        <Ledger items={profile.education} />
      </section>

      <Footer />
    </>
  );
}
