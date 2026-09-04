# usmangurowa.codes

Personal site. Next.js 14, Tailwind, Bricolage Grotesque + Inter.

```sh
pnpm install
pnpm dev
```

Content lives in `src/data/profile.ts`. Blog posts are MDX files in `content/`.

## Environment

| Variable       | Purpose                                                                          |
| -------------- | -------------------------------------------------------------------------------- |
| `GITHUB_TOKEN` | Read-only token for the GitHub GraphQL API. Powers the contributions heatmap; the section is hidden if unset. |

Drop a `resume.pdf` in `public/` for the download button.
