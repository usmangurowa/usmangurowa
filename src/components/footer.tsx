import { profile } from "@/data/profile";
import { Icon } from "./icons";
import { Signature } from "./signature";

export function Footer() {
  return (
    <footer className="foot" aria-labelledby="contact">
      <h2 id="contact">Get in touch</h2>
      <p className="contact-copy">
        For engineering roles, collaborations, or a conversation about something you&apos;re building, email{" "}
        <a className="ink" href={`mailto:${profile.email}`}>{profile.email}</a>.
      </p>
      <p className="links">
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
      <Signature className="sign-svg" />
      <p className="colophon">
        {profile.location}. Set in Bricolage Grotesque and Inter; signature in Yellowtail.
      </p>
    </footer>
  );
}
