# CLAUDE.md — Alexei Bostan Portfolio

## Project Overview

Personal portfolio website for Alexei Bostan (Senior Software Engineer). A statically exported, multilingual Next.js site deployed to GitHub Pages at `https://alexeibostan.com`.

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 3 with CSS variable-based theming
- **i18n**: next-intl 4 — 4 locales: `en`, `nl`, `it`, `ro`
- **Icons**: Lucide React
- **UI Components**: shadcn/ui (New York style, Zinc base color)
- **Package Manager**: Bun (primary), npm lock file also present
- **Deployment**: GitHub Actions → GitHub Pages (static export from `build/`)

## Commands

```bash
bun dev          # Start dev server (turbopack, binds 0.0.0.0)
bun run build    # Production build (static export to build/)
bun run lint     # ESLint
bun run deploy   # Build + add .nojekyll for GitHub Pages
bun run seo:validate       # Validate SEO on localhost:3000
bun run seo:validate:prod  # Validate SEO on production
```

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Root page (redirects to default locale)
│   ├── robots.ts               # Dynamic robots.txt
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── globals.css             # Global styles + CSS variables
│   └── [locale]/               # Locale-based dynamic routing
│       ├── layout.tsx          # i18n-aware layout
│       ├── Body.tsx            # Body wrapper with language detection
│       ├── page.tsx            # Home page
│       ├── about/page.tsx      # About page
│       ├── projects/page.tsx   # Projects page
│       └── skills/page.tsx     # Skills page (hexagonal grid)
├── components/
│   ├── layout/                 # Layout components (Header, Footer, Layout, LanguageSwitcher)
│   ├── StructuredData.tsx      # JSON-LD schema renderer
│   ├── BrowserLanguageDetector.tsx
│   └── Providers.tsx
├── data/                       # Static portfolio content
│   ├── en/, nl/, it/, ro/      # Locale-specific data modules
│   ├── projects.ts, skills.ts, companies.ts, journey.ts  # Master data
│   └── projectsByCompany.ts    # Grouping utility
├── messages/                   # i18n translation JSON files (en, nl, it, ro)
├── lib/
│   ├── utils.ts                # cn() — clsx + tailwind-merge
│   ├── metadata.ts             # SEO metadata generation
│   └── pathUtils.ts            # i18n path utilities
├── types/
│   └── index.ts                # Shared types: Project, JobEntry, Company, Skill
└── i18n.ts                     # next-intl configuration
```

## Key Architecture Decisions

- **Static export** (`output: 'export'`): No server runtime. All pages pre-rendered. Build output goes to `build/` (not `.next/`).
- **Locale routing**: `[locale]` dynamic segment. Pages use `generateStaticParams()` to pre-render all 4 locales.
- **Data pattern**: Portfolio content lives in `src/data/` as TypeScript modules. Locale-specific versions are in `src/data/{locale}/`. Pages import data server-side based on the locale param.
- **No API routes**: Purely static — no backend, no database.
- **No testing framework**: Only a basic `pathUtils.test.ts` exists. No Jest/Vitest configured.

## Conventions

- **Path alias**: `@/*` maps to `./src/*` — always use `@/` imports.
- **Styling**: Use Tailwind utility classes. Theme colors are defined as CSS variables in `globals.css` (HSL format). Key brand colors: primary `#325080`, accent `#e16642`, secondary `#c18f68`.
- **Components**: Functional components only. Use Server Components by default (no `"use client"` unless needed for interactivity).
- **Types**: Shared types in `src/types/index.ts`. Import from `@/types`.
- **i18n translations**: UI strings go in `src/messages/{locale}.json`. Structured data goes in `src/data/{locale}/`.
- **ESLint rules**: `@typescript-eslint/no-unused-vars` is off. `react/no-unescaped-entities` is off.

## Environment Variables

- `NEXT_PUBLIC_SITE_URL` — Site URL (defaults to `https://alexeibostan.com`)
- `BASE_PATH` — Base path for static export (set in CI, empty string for production)

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on push to `main`:
1. Installs deps with Bun
2. Runs `bun run build` with `BASE_PATH=""`
3. Deploys `build/` to GitHub Pages via `JamesIves/github-pages-deploy-action@v4`

## Adding Content

- **New project**: Add to `src/data/projects.ts` and locale variants in `src/data/{locale}/projects.ts`
- **New skill**: Add to `src/data/skills.ts` and locale variants
- **New locale**: Add locale to `src/i18n.ts`, create `src/messages/{locale}.json`, create `src/data/{locale}/` directory with all data files
- **New page**: Create `src/app/[locale]/pagename/page.tsx`, add `generateStaticParams`, update sitemap in `src/app/sitemap.ts`
