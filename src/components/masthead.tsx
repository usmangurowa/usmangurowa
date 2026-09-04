import { profile } from "@/data/profile";
import { Icon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function Masthead() {
  const words = profile.name.split(" ");
  let index = 0;

  return (
    <header className="masthead">
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h1 aria-label={profile.name}>
          <span aria-hidden="true">
            {words.map((word, wi) => (
              <span key={wi} className="word">
                {Array.from(word).map((c) => {
                  const i = index++;
                  return (
                    <span key={i} className="ch" style={{ "--i": i } as React.CSSProperties}>
                      {c}
                    </span>
                  );
                })}
                {wi < words.length - 1 ? (
                  <span className="ch" style={{ "--i": index++ } as React.CSSProperties}>
                    {" "}
                  </span>
                ) : null}
              </span>
            ))}
          </span>
        </h1>
        <nav aria-label="Links" className="flex items-center gap-1 self-end sm:self-auto sm:pt-1.5">
          <a className="toggle" href={profile.socials.x} target="_blank" rel="noopener" aria-label="X">
            <Icon.x className="i" />
          </a>
          <a className="toggle" href={profile.socials.github} target="_blank" rel="noopener" aria-label="GitHub">
            <Icon.github className="i" />
          </a>
          <a className="toggle" href={profile.socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
            <Icon.linkedin className="i" />
          </a>
          <a className="toggle" href={`mailto:${profile.email}`} aria-label="Email">
            <Icon.mail className="i" />
          </a>
          <ThemeToggle />
        </nav>
      </div>
      <p className="standfirst">{profile.standfirst}</p>
    </header>
  );
}

export function Lede() {
  return (
    <>
      <p className="lede">
        I build products end to end: the app in your pocket, the site beside it, the API
        underneath and the box it runs on. Shipping since 2021, mostly{" "}
        <span className="ink">TypeScript</span>, <span className="ink">React Native</span> and{" "}
        <span className="ink">Next.js</span>, usually as the only mobile engineer in the room.
      </p>
      <p className="lede">
        Outside work I lead engineering at{" "}
        <a href="https://genztechies.com" target="_blank" rel="noopener">
          GenzTechies
        </a>
        , where I mentor developers and help run the kind of hackathon that got me started. Easy to
        reach at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
      </p>
      <p className="actions">
        <a className="button" href={profile.resume} download>
          <Icon.download className="i" />
          Download résumé
        </a>
        <a className="button quiet" href={profile.socials.x} target="_blank" rel="noopener">
          Message on
          <Icon.x className="i" aria-label="X" role="img" />
        </a>
      </p>
    </>
  );
}
