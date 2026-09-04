import { profile } from "@/data/profile";
import { Icon } from "./icons";

export function Footer() {
  return (
    <footer className="foot">
      <p className="sign">{profile.sign}</p>
      <p className="links">
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Icon.mail className="i" />
        </a>
        <a href={profile.socials.x} target="_blank" rel="noopener" aria-label="X">
          <Icon.x className="i" />
        </a>
        <a href={profile.socials.github} target="_blank" rel="noopener" aria-label="GitHub">
          <Icon.github className="i" />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
          <Icon.linkedin className="i" />
        </a>
      </p>
      <p className="colophon">
        {profile.location}. Set in Bricolage Grotesque and Inter.
      </p>
    </footer>
  );
}
