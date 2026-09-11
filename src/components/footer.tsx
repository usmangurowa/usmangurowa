import { profile } from "@/data/profile";
import { Icon } from "./icons";
import { Signature } from "./signature";

export function Footer() {
  return (
    <footer className="foot">
      <Signature className="sign-svg" />
      <p className="links">
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Icon.mail className="i" />
        </a>
        <a href={profile.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X">
          <Icon.x className="i" />
        </a>
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Icon.github className="i" />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Icon.linkedin className="i" />
        </a>
      </p>
      <p className="colophon">
        {profile.location}. Set in Bricolage Grotesque and Inter; signature in Yellowtail.
      </p>
    </footer>
  );
}
