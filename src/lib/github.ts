import { load } from "cheerio/slim";

export type Day = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type Calendar = {
  total: number;
  weeks: Day[][];
};

export function parseContributionCalendar(html: string): Calendar {
  const $ = load(html);
  const heading = $("h2")
    .toArray()
    .map((element) => $(element).text().replace(/\s+/g, " ").trim())
    .find((text) => /^[\d,]+ contributions? in the last year$/.test(text));
  const total = Number(heading?.split(" ")[0].replaceAll(",", ""));
  if (!Number.isSafeInteger(total) || total < 0) {
    throw new Error("GitHub calendar total is missing or invalid.");
  }

  const tooltips = new Map<string, string>();
  for (const element of $("tool-tip[for]").toArray()) {
    const target = $(element).attr("for");
    if (target) {
      if (tooltips.has(target)) {
        throw new Error("GitHub calendar contains duplicate tooltips.");
      }
      tooltips.set(target, $(element).text().replace(/\s+/g, " ").trim());
    }
  }

  const days: Day[] = [];
  for (const element of $("td[data-date]").toArray()) {
    const cell = $(element);
    const date = cell.attr("data-date");
    const id = cell.attr("id");
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !id) {
      throw new Error("GitHub calendar day is missing its date or identifier.");
    }
    const timestamp = Date.parse(date + "T00:00:00Z");
    if (!Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== date) {
      throw new Error("GitHub calendar contains an invalid date.");
    }

    const level = ([0, 1, 2, 3, 4] as const).find((value) => String(value) === cell.attr("data-level"));
    if (level === undefined) {
      throw new Error("GitHub calendar contains an invalid contribution level.");
    }
    const countMatch = tooltips.get(id)?.match(/^(No|[\d,]+) contributions? on\b/);
    if (!countMatch) {
      throw new Error("GitHub calendar day is missing its contribution count.");
    }
    const count = countMatch[1] === "No" ? 0 : Number(countMatch[1].replaceAll(",", ""));
    if (!Number.isSafeInteger(count) || count < 0) {
      throw new Error("GitHub calendar contains an invalid contribution count.");
    }
    days.push({ date, count, level });
  }

  days.sort((a, b) => a.date.localeCompare(b.date));
  if (!days.length || days.reduce((sum, day) => sum + day.count, 0) !== total) {
    throw new Error("GitHub calendar days do not match its reported total.");
  }

  const weeks: Day[][] = [];
  let week: Day[] = [];
  let previousTimestamp: number | undefined;
  for (const day of days) {
    const date = new Date(day.date + "T00:00:00Z");
    const timestamp = date.getTime();
    if (previousTimestamp !== undefined && timestamp - previousTimestamp !== 86400000) {
      throw new Error("GitHub calendar dates are duplicated or incomplete.");
    }
    if (!weeks.length || date.getUTCDay() === 0) {
      week = [];
      weeks.push(week);
    }
    week.push(day);
    previousTimestamp = timestamp;
  }
  return { total, weeks };
}

export async function getContributions(login: string): Promise<Calendar | null> {
  try {
    const res = await fetch(
      `https://github.com/users/${encodeURIComponent(login)}/contributions`,
      {
        headers: { Accept: "text/html", "Accept-Language": "en-US" },
        next: { revalidate: 60 * 60 },
        signal: AbortSignal.timeout(10000),
      }
    );
    if (!res.ok) {
      console.error(`GitHub public contributions request failed: HTTP ${res.status}.`);
      return null;
    }

    return parseContributionCalendar(await res.text());
  } catch {
    console.error("GitHub public contributions could not be fetched or parsed.");
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
