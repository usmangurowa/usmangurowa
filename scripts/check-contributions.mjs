import assert from "node:assert/strict";
import { getContributions, monthLabels, parseContributionCalendar } from "../src/lib/github.ts";

const counts = [0, 1, 2, 5, 10, 30, 1000, 0, 2, 0, 6, 1, 20, 7];
const levels = [0, 1, 1, 2, 2, 3, 4, 0, 1, 0, 2, 1, 3, 2];
const days = counts.map((count, index) => ({
  date: new Date(Date.UTC(2026, 0, 28 + index)).toISOString().slice(0, 10),
  count,
  level: levels[index],
}));

function fixture(entries) {
  const rowOrder = [...entries].sort((a, b) =>
    new Date(a.date).getUTCDay() - new Date(b.date).getUTCDay() || a.date.localeCompare(b.date)
  );
  return `
    <h2 tabindex="-1"> ${entries.reduce((sum, day) => sum + day.count, 0).toLocaleString("en-US")}
      contributions in the last year </h2>
    <table class="ContributionCalendar-grid"><tbody><tr>
      ${rowOrder.map((day) => `
        <td data-date="${day.date}" id="day-${day.date}" data-level="${day.level}"></td>
      `).join("")}
      <td class="ContributionCalendar-day"></td>
    </tr></tbody></table>
    ${entries.map((day) => `
      <tool-tip for="day-${day.date}"><span>${day.count ? day.count.toLocaleString("en-US") : "No"}</span>
        ${day.count === 1 ? "contribution" : "contributions"} on a calendar date.</tool-tip>
    `).join("")}
  `;
}

const html = fixture(days);
const expected = { total: 1084, weeks: [days.slice(0, 4), days.slice(4, 11), days.slice(11)] };
assert.deepEqual(parseContributionCalendar(html), expected);
assert.deepEqual(monthLabels(expected.weeks), [{ label: "Feb", column: 2 }]);
assert.deepEqual(parseContributionCalendar(html.replaceAll("1,000", "1&#44;000")), expected);
assert.equal(parseContributionCalendar(fixture(days.map(day => ({ ...day, count: 0, level: 0 })))).total, 0);

const leapDays = ["2024-02-28", "2024-02-29", "2024-03-01"].map(date => ({ date, count: 1, level: 1 }));
assert.deepEqual(parseContributionCalendar(fixture(leapDays)).weeks, [leapDays]);
const yearDays = ["2025-12-31", "2026-01-01"].map(date => ({ date, count: 1, level: 1 }));
assert.deepEqual(parseContributionCalendar(fixture(yearDays)).weeks, [yearDays]);

for (const broken of [
  "<html><h1>Sign in to GitHub</h1></html>",
  html.replace("1,084", "1,085"),
  html.replace('data-level="4"', 'data-level="5"'),
  html.replace('data-level="4"', 'data-level=""'),
  html.replace('data-level="4"', 'data-level=" "'),
  html.replace('data-level="4"', ""),
  html.replace('data-date="2026-01-28"', 'data-date="2026-02-30"'),
  html.replace('for="day-2026-01-28"', 'for="missing-cell"'),
  html.replaceAll("1,000", "many"),
  html.replace('id="day-2026-01-28"', ""),
  html + '<tool-tip for="day-2026-01-28">No contributions on a date.</tool-tip>',
  fixture([...days, days[0]]),
  html.replace('data-date="2026-01-29"', 'data-date="2026-01-28"'),
  fixture(days.filter(day => day.date !== "2026-02-04")),
  fixture([]),
]) {
  assert.throws(() => parseContributionCalendar(broken));
}

const originalFetch = globalThis.fetch;
const originalError = console.error;
const originalToken = process.env.GITHUB_TOKEN;
const diagnostics = [];
try {
  delete process.env.GITHUB_TOKEN;
  console.error = (...args) => diagnostics.push(args.join(" "));
  globalThis.fetch = async (url, options) => {
    assert.equal(url, "https://github.com/users/usmangurowa/contributions");
    assert.equal(options.next.revalidate, 3600);
    assert.equal(options.headers["Accept-Language"], "en-US");
    assert.equal(new Headers(options.headers).has("Authorization"), false);
    assert.equal(options.body, undefined);
    assert.ok(options.signal instanceof AbortSignal);
    return new Response(html);
  };
  assert.deepEqual(await getContributions("usmangurowa"), expected);
  assert.equal(diagnostics.length, 0);
  process.env.GITHUB_TOKEN = "sentinel-must-not-be-sent";
  assert.deepEqual(await getContributions("usmangurowa"), expected);
  assert.equal(diagnostics.length, 0);

  for (const response of [
    new Response("", { status: 429 }),
    new Response("", { status: 404 }),
    new Response("<html>Unexpected response</html>"),
  ]) {
    const before = diagnostics.length;
    globalThis.fetch = async () => response;
    assert.equal(await getContributions("usmangurowa"), null);
    assert.equal(diagnostics.length, before + 1);
  }
  globalThis.fetch = async () => { throw new TypeError("Network unavailable"); };
  assert.equal(await getContributions("usmangurowa"), null);
  assert.equal(diagnostics.length, 4);
  assert.ok(diagnostics.every(message => !message.includes("sentinel-must-not-be-sent")));
} finally {
  globalThis.fetch = originalFetch;
  console.error = originalError;
  if (originalToken === undefined) delete process.env.GITHUB_TOKEN;
  else process.env.GITHUB_TOKEN = originalToken;
}

console.log("Contribution calendar parser and request checks passed.");
