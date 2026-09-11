import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { getContributions } from "@/lib/github";

export const alt = `${profile.name}, ${profile.title.toLowerCase()}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetch a static instance of a Google Font subset to just the glyphs we need.
async function googleFont(family: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`;
  const css = await (
    await fetch(url, {
      headers: {
        // Old Safari UA makes Google serve TTF instead of woff, which satori needs.
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();
  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error(`No font URL for ${family}`);
  return (await fetch(match[1])).arrayBuffer();
}

const LEVEL_OPACITY = [1, 0.3, 0.55, 0.8, 1];

export default async function Image() {
  const cal = await getContributions(profile.handle);
  const total = cal ? cal.total.toLocaleString("en-US") : null;
  const caption = total ? `${total} contributions in the last year on GitHub.` : "";

  const [bricolage, inter] = await Promise.all([
    googleFont("Bricolage+Grotesque:wght@600", profile.name),
    googleFont("Inter:wght@400", profile.standfirst + caption + "0123456789,."),
  ]);

  const gap = 4;
  const weeks = cal?.weeks ?? [];
  const cell = weeks.length ? Math.floor((1032 - (weeks.length - 1) * gap) / weeks.length) : 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px 64px",
          background: "#ffffff",
          color: "#5c5c5c",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Bricolage",
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#000000",
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.4, marginTop: 22, maxWidth: 940 }}>
            {profile.standfirst}
          </div>
        </div>

        {cal ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, marginBottom: 18 }}>{caption}</div>
            <div style={{ display: "flex", gap }}>
              {weeks.map((week, wi) => (
                <div
                  key={wi}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap,
                    marginTop: new Date(week[0].date + "T00:00:00Z").getUTCDay() * (cell + gap),
                  }}
                >
                  {week.map((d) => (
                    <div
                      key={d.date}
                      style={{
                        width: cell,
                        height: cell,
                        borderRadius: 3,
                        background: d.level === 0 ? "#d8d8d8" : "#000000",
                        opacity: LEVEL_OPACITY[d.level],
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ fontSize: 22 }}>{profile.url.replace("https://", "")}</div>
        )}
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: bricolage, weight: 600, style: "normal" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
      ],
    }
  );
}
