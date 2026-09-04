import type { LinkKind, Project } from "@/data/profile";
import { Icon } from "./icons";

const LINK_ICON: Record<LinkKind, (p: React.SVGProps<SVGSVGElement>) => JSX.Element> = {
  web: Icon.external,
  appstore: Icon.apple,
  playstore: Icon.play,
  github: Icon.github,
};

export function Projects({ projects }: { projects: readonly Project[] }) {
  return (
    <ul className="works">
      {projects.map((p) => (
        <li key={p.name} className="work">
          <div className="work-head">
            <h3>{p.name}</h3>
            <span className="work-when">{p.when}</span>
          </div>
          <p>{p.blurb}</p>
          <div className="ctas">
            {p.links.map((l) => {
              const I = LINK_ICON[l.kind];
              return (
                <a key={l.href} className="cta" href={l.href} target="_blank" rel="noopener">
                  <I className="i" aria-hidden="true" />
                  <span>{l.label}</span>
                </a>
              );
            })}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Skills({
  groups,
}: {
  groups: readonly { group: string; items: readonly string[] }[];
}) {
  return (
    <dl className="skills">
      {groups.map((g) => (
        <div key={g.group} className="contents">
          <dt>{g.group}</dt>
          <dd>
            {g.items.map((s) => (
              <span key={s} className="skill">
                {s}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
