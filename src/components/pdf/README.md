# Resume PDFs

`ResumeDocument` is the single flow-layout document for all four variants.
Canonical content comes from `src/data/career.ts` and `src/data/resumes.ts`;
the light palette and font families come from `src/data/brand.ts`.
No content is fetched or uploaded while rendering.

## pdfcn provenance

The locally owned `pdfcn/` components adapt these MIT-licensed registry sources,
retrieved on 2026-09-11:

- <https://pdfcn.dev/r/takumi/text.json>
- <https://pdfcn.dev/r/takumi/heading.json>
- <https://pdfcn.dev/r/takumi/utils.json> (`lib/pdf-primitives.tsx`)

Upstream: <https://github.com/shadcn-labs/pdfcn>. The upstream copyright and
license are preserved in `pdfcn/LICENSE`.

The adaptation keeps the theme-driven Text/Heading styles and point-to-CSS-pixel
conversion from the actual Takumi registry. It replaces the registry's mutable
theme-provider/serializer state with an explicit immutable theme, uses semantic
heading tags, and retains only the text/layout properties this document needs.
SVG, tables, forms, browser UI, unused typography variants, and the registry's
unrelated theme dependencies are intentionally not installed. This small manual
registry import needs no `components.json` or website scaffolding.

## Rendering and integrity

- `pnpm resumes:generate`: render and inspect all four buffers, then stage files
  and rename them to the existing `/resume/{id}.pdf` targets.
- `pnpm resumes:check`: regenerate and compare **exact bytes**, without writes.
- `pnpm resumes:test`: isolated Node regressions, including separate-process
  determinism, foreign cwd, missing/stale artifacts, bad selections/dates,
  absent fonts, overflow in the last variant, and unchanged saved bytes on failure.

Takumi 0.14.3 runs locally via `tsx`, without a browser or changes to the website's
TSConfig. The shared local WOFF2 fonts are read relative to module URLs. Body text
is 10.5pt Inter (400/600); the name is 27pt Bricolage Grotesque (600), section
labels 12pt. All component lengths are points; the pdfcn primitive boundary
converts them to Takumi's 96-DPI CSS pixels. No shrinking or page-range cropping.

`src/lib/pdf/inspect.ts` parses the emitted PDF with PDF.js. It checks real A4
page geometry, at most two pages, font sizes/embedded families, text bounds,
absence of raster/hidden text, ordered selected content, unbroken employers and
projects, heading companionship, live links, continuation identity/page counters,
tagging, and dates fixed to `career.updatedAt`. The footer reserves its own band.
Variable-font subset PostScript names retain upstream names; they are not weight
labels for the selected CSS instances.

Validation, font-loading, rendering, and inspection failures never replace
outputs. Staged files are cleaned in `finally`. As with the previous generator,
each filesystem rename is atomic, but the four renames are not a transactional
filesystem operation: an I/O failure during renaming can leave a partly updated
set. The error is surfaced; rerun generation after fixing the filesystem.

No canonical selections were trimmed. Empty bullet arrays keep the employment
heading; responsibility notes are not substituted for selected bullets. Education
prints both institution detail and any expanded note.
