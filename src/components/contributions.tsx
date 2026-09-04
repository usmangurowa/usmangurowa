import { profile } from "@/data/profile";
import { getContributions, monthLabels } from "@/lib/github";

export async function Contributions() {
  const cal = await getContributions(profile.handle);
  if (!cal) return null;

  const labels = monthLabels(cal.weeks);
  const total = cal.total.toLocaleString("en-US");

  return (
    <section className="section" aria-labelledby="contributions">
      <h2 id="contributions">Contributions</h2>
      <p className="calnote">
        {total} contributions in the last year on{" "}
        <a href={profile.socials.github} target="_blank" rel="noopener">
          GitHub
        </a>
        .
      </p>
      <div className="calscroll">
        <div className="calmonths">
          {labels.map((m) => (
            <span key={m.column} style={{ gridColumn: m.column }}>
              {m.label}
            </span>
          ))}
        </div>
        <div
          className="calgrid"
          role="img"
          aria-label={`${total} GitHub contributions in the last year`}
        >
          {cal.weeks.flatMap((week) =>
            week.map((d) => (
              <i key={d.date} className={`day l${d.level}`} title={`${d.count} on ${d.date}`} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
