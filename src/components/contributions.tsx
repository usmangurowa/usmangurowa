import { profile } from "@/data/profile";
import { getContributions, monthLabels } from "@/lib/github";

const DAY_CLASSES = ["day", "day l1", "day l2", "day l3", "day l4"];

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
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
      <div className="calscroll" tabIndex={0} role="region" aria-label="Contribution calendar">
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
          {cal.weeks.flatMap((week, weekIndex) =>
            week.map((d) => (
              <i
                key={d.date}
                className={DAY_CLASSES[d.level]}
                style={{
                  gridColumn: weekIndex + 1,
                  gridRow: new Date(d.date + "T00:00:00Z").getUTCDay() + 1,
                }}
                title={`${d.count} on ${d.date}`}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
