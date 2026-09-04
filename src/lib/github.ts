export type Day = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type Calendar = {
  total: number;
  weeks: Day[][];
};

const LEVELS: Record<string, Day["level"]> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

export async function getContributions(login: string): Promise<Calendar | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY, variables: { login } }),
      next: { revalidate: 60 * 60 * 24 },
    });
    if (!res.ok) return null;

    const json = await res.json();
    const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal) return null;

    return {
      total: cal.totalContributions as number,
      weeks: (cal.weeks as any[]).map((w) =>
        (w.contributionDays as any[]).map((d) => ({
          date: d.date as string,
          count: d.contributionCount as number,
          level: LEVELS[d.contributionLevel as string] ?? 0,
        }))
      ),
    };
  } catch {
    return null;
  }
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Month labels positioned by 1-based grid column of the first week in that month. */
export function monthLabels(weeks: Day[][]) {
  const labels: { label: string; column: number }[] = [];
  let last = -1;
  weeks.forEach((week, i) => {
    const first = week[0];
    if (!first) return;
    const month = new Date(first.date + "T00:00:00Z").getUTCMonth();
    if (month !== last) {
      // A partial first month would collide with the next label; keep the fuller one
      const prev = labels[labels.length - 1];
      if (prev && i + 1 - prev.column < 3) labels.pop();
      labels.push({ label: MONTHS[month], column: i + 1 });
      last = month;
    }
  });
  return labels;
}
