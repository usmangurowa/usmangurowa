# usmangurowa.dev

Personal site. Next.js 14, Tailwind, Bricolage Grotesque + Inter.

```sh
pnpm install
pnpm dev
```

Career facts, employment, project stacks and delivery stories live in
`src/data/career.ts`. The homepage presentation, biography and skills live in
`src/data/profile.ts`. Blog posts are MDX files in `content/`.

The first career entry supplies the homepage's current role and structured
employment metadata. Keep it current when changing employment; ongoing community
work remains in the career history. Contributions stays directly after the
introduction and actions, before Work.

Website and résumé colours share `src/data/brand.ts`. Both use the bundled
Bricolage Grotesque and Inter variable fonts in `src/assets/fonts/`, with their
SIL Open Font License notices. These Latin subsets were obtained from Google
Fonts. The page layout and PDF renderer load these assets locally; social-image
rendering retains its separate font-loading path.

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

To update the PDFs, use Node.js 22.14+ and pnpm:

```sh
pnpm resumes:generate
pnpm resumes:check
pnpm resumes:test
pnpm exec tsc --noEmit
pnpm lint
```

Update `career.updatedAt` when revising content, then commit the generated PDFs
alongside the source changes. `resumes:check` is read-only and fails if a PDF is
missing or differs from the generated content. The pdfcn/Takumi renderer is a
development dependency; visitors download static files, without a PDF-generation
service or a client-side PDF renderer.

The shared document is `src/components/pdf/resume-document.tsx`; the small,
locally owned pdfcn components and their provenance are documented alongside it.
The PDF checks cover emitted content, fonts, links, page bounds, regeneration
and failure safety. `resumes:test` runs against temporary files, not saved PDFs.

All four versions share one print layout: white A4 pages, the site's typography
and monochrome palette, selectable text and clickable links. Keep every role in
the history, at most two pages per version, and text at least 10.5pt. The mobile
version includes Levenza's current desktop/backend work without presenting it as
mobile development. Generation must fail explicitly rather than silently clip
content or reduce text below the minimum.

Inspect both pages after changing copy. Update `public/llms.txt` to mirror public
biography, work, project and résumé-link changes.

The supplied historical CVs are not committed. Template entries, unconfirmed
metrics, birth date and school-level education are excluded from the public output.
