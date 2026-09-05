import type { LinkKind, Project, Skill } from "@/data/profile";
import { Icon } from "./icons";
import { SkillIcon } from "./skill-icon";

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
        <li key={p.id} className="work">
          <div className="work-head">
            <h3>{p.name}</h3>
            <span className="work-when">{p.when}</span>
          </div>
          <p>{p.blurb}</p>
          <p className="project-stack">
            <span className="ink">Built with:</span> {p.stack.join(", ")}
          </p>
          {p.story ? (
            <dl className="project-story">
              {p.story.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.text}</dd>
                </div>
              ))}
            </dl>
          ) : null}
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
  groups: readonly { group: string; items: readonly Skill[] }[];
}) {
  return (
    <dl className="skills">
      {groups.map((g) => (
        <div key={g.group} className="contents">
          <dt>{g.group}</dt>
          <dd>
            {g.items.map((s) => (
              <span key={s.name} className="skill">
                {s.icon ? <SkillIcon name={s.icon} /> : null}
                {s.name}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
