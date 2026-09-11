# usmangurowa.dev

Personal site. Next.js 14, Tailwind, Bricolage Grotesque + Inter.

```sh
pnpm install
pnpm dev
```

Career facts, employment, project stacks and delivery stories live in
`src/data/career.ts`. The homepage presentation, biography and skills live in
`src/data/profile.ts`. Blog posts are MDX files in `content/`.

## GitHub contributions

No environment variables or GitHub token are required. The homepage and social
preview read GitHub's public contribution calendar for the profile, including
any anonymized private-contribution counts the profile owner has made public.
This deliberately uses the same source visitors see on GitHub rather than
token-scoped GraphQL totals, which can differ.

Requests are cached and revalidated hourly on subsequent visits, not in real
time. Social networks may also cache preview images independently. The adapter
validates each day's date, count and level, checks for missing/duplicate dates,
and reconciles the sum with GitHub's displayed total. GitHub's calendar HTML is
not a versioned API; if its format changes or a request fails, the graph is
omitted and a bounded server diagnostic is logged instead of inventing counts.

Run `pnpm contributions:check` for parser and request regression checks.

## Résumés

Four committed, text-based PDFs are served directly by Next.js:

| Version | Public path |
| --- | --- |
| General (default) | `/resume/general.pdf` |
| Backend | `/resume/backend.pdf` |
| Frontend | `/resume/frontend.pdf` |
| Mobile | `/resume/mobile.pdf` |

The `/resume` page lists all versions. The old `/resume.pdf` URL permanently
redirects to the general version. On the deployed site these paths use
`https://usmangurowa.dev`; committing files does not deploy them.

Variant summaries, skills and employment bullet selections live in
`src/data/resumes.ts`. All versions use the same underlying career facts.
Keep dates and role titles consistent; tailoring changes emphasis, not history.
Aviato intentionally has no responsibility bullets until those details are supplied.

To update the PDFs, use Node.js 22.6+ (for TypeScript stripping) and pnpm:

```sh
pnpm resumes:generate
pnpm resumes:check
pnpm exec tsc --noEmit
pnpm lint
```

Update `career.updatedAt` when revising content, then commit the generated PDFs
alongside the source changes. `resumes:check` is read-only and fails if a PDF is
missing or differs from the generated content. PDFKit is a development dependency;
visitors download static files, without a PDF-generation service or external fonts.
Inspect both pages after changing copy. Update `public/llms.txt` to mirror public
biography, work, project and résumé-link changes.

The supplied historical CVs are not committed. Template entries, unconfirmed
metrics, birth date and school-level education are excluded from the public output.
