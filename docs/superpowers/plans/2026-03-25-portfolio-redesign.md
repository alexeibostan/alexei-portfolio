# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign alexeibostan.com from a multi-page template portfolio to a single-page cinematic scroll experience with 5 sections (Story, Work, Craft, AI, Connect), dark atmospheric aesthetic, and scroll-driven animations.

**Architecture:** Single-page scroll on Next.js 15 static export. All content consolidates into `src/app/[locale]/page.tsx` (server component), which loads locale-specific data and passes it as props to section components. Interactive sections (Timeline, Work, Craft) are client components that receive data via props — no dynamic imports in client components. Framer Motion handles scroll-triggered reveals and complex animations. Existing i18n (next-intl, 4 locales) and static export remain unchanged.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS 3, Framer Motion, next-intl 4, Lucide React

**Spec:** `docs/superpowers/specs/2026-03-25-portfolio-redesign-design.md`

---

## File Structure

### New Files

| File | Responsibility |
|------|---------------|
| `src/components/sections/HeroSection.tsx` | Hero with tagline, role label, stat pills, scroll indicator (client component for staggered entrance animation) |
| `src/components/sections/TimelineSection.tsx` | Horizontal career timeline with scroll-animated nodes |
| `src/components/sections/WorkSection.tsx` | Featured project + compact card grid with swap interaction |
| `src/components/sections/CraftSection.tsx` | Concentric rings skill map + detail panel + languages |
| `src/components/sections/AISection.tsx` | Building WITH/IN AI two-column layout |
| `src/components/sections/ConnectSection.tsx` | CTA, social links, Simple Analytics badge, copyright (client component for word-by-word headline animation) |
| `src/components/ui/ScrollReveal.tsx` | Reusable Framer Motion scroll-triggered reveal wrapper |
| `src/components/ui/TechPill.tsx` | Color-coded technology pill component |
| `src/data/aiTools.ts` | AI tool data (name, description, icon path) |
| `src/data/methodologies.ts` | Middle-ring methodology data (Agile, CI/CD, TDD, etc.) |
| `src/hooks/useActiveSection.ts` | IntersectionObserver hook for nav active state |
| `public/icons/ai/claude.webp` | Bundled AI tool icon |
| `public/icons/ai/cursor.webp` | Bundled AI tool icon |
| `public/icons/ai/codex.webp` | Bundled AI tool icon |

### Modified Files

| File | Change |
|------|--------|
| `src/app/globals.css` | Replace light theme with dark cinematic palette, add film grain + dot grid textures |
| `src/app/[locale]/page.tsx` | Replace current content with 5 section component composition |
| `src/app/[locale]/layout.tsx` | Update metadata to reflect single-page brand voice |
| `src/components/layout/Header.tsx` | Redesign: dark sticky nav, monospace labels, anchor links, active section state |
| `src/components/layout/Layout.tsx` | Remove Footer import (Connect section replaces it) |
| `src/types/index.ts` | Add `problem`, `craft`, `impact` to Project; add `insight` to JobEntry; add `contextLine` to Skill; add new types |
| `src/data/projects.ts` | Add problem/craft/impact fields (placeholder text) |
| `src/data/journey.ts` | Add insight field to each entry; add Dedagroup entry |
| `src/data/skills.ts` | Add contextLine field to skills |
| `src/data/{en,nl,it,ro}/projects.ts` | Add problem/craft/impact fields to locale variants |
| `src/data/{en,nl,it,ro}/journey.ts` | Add insight field to locale variants |
| `src/data/{en,nl,it,ro}/skills.ts` | Compatible without changes (contextLine is optional), but note for future locale-specific context lines |
| `src/messages/{en,nl,it,ro}.json` | Update nav labels, section headings, new content keys |
| `src/app/[locale]/layout.tsx` | Remove Montserrat font import, update body font stack, update metadata |
| `src/app/sitemap.ts` | Simplify to locale roots only |
| `package.json` | Add `framer-motion` dependency |

### Files to Remove

| File | Reason |
|------|--------|
| `src/app/[locale]/about/page.tsx` | Content consolidated into single page |
| `src/app/[locale]/projects/page.tsx` | Content consolidated into single page |
| `src/app/[locale]/skills/page.tsx` | Content consolidated into single page |
| `src/components/layout/Footer.tsx` | Replaced by ConnectSection |
| `src/app/[locale]/Body.tsx` | Move `BrowserLanguageDetector` import into `layout.tsx`, then delete `Body.tsx` |

---

## Task 1: Install Framer Motion and Download AI Icons

**Files:**
- Modify: `package.json`
- Create: `public/icons/ai/claude.webp`, `public/icons/ai/cursor.webp`, `public/icons/ai/codex.webp`

- [ ] **Step 1: Install framer-motion**

```bash
bun add framer-motion
```

- [ ] **Step 2: Download AI tool icons from LobeHub and save locally**

```bash
mkdir -p public/icons/ai
curl -L "https://unpkg.com/@lobehub/icons-static-avatar@1.3.0/avatars/claude.webp" -o public/icons/ai/claude.webp
curl -L "https://unpkg.com/@lobehub/icons-static-avatar@1.3.0/avatars/cursor.webp" -o public/icons/ai/cursor.webp
curl -L "https://unpkg.com/@lobehub/icons-static-avatar@1.3.0/avatars/openai.webp" -o public/icons/ai/codex.webp
```

Note: Codex is an OpenAI product — use the OpenAI avatar. Verify icon files exist and are valid after download. If any fail, check the CDN package for correct filenames.

- [ ] **Step 3: Verify dev server starts clean**

```bash
bun dev
```

Expected: Dev server starts without errors on localhost:3000.

- [ ] **Step 4: Commit**

```bash
git add package.json bun.lockb public/icons/ai/
git commit -m "chore: add framer-motion and bundle AI tool icons"
```

---

## Task 2: Update Type System and Data Files

**Files:**
- Modify: `src/types/index.ts`
- Create: `src/data/aiTools.ts`, `src/data/methodologies.ts`
- Modify: `src/data/projects.ts`, `src/data/journey.ts`, `src/data/skills.ts`

- [ ] **Step 1: Update types in `src/types/index.ts`**

Add new fields and types:

```typescript
export interface Project {
  company: string;
  name: string;
  type: string;
  period: string;
  description: string;
  problem: string;    // NEW
  craft: string;      // NEW
  impact: string;     // NEW
  skills: string[];
  role: string;
}

export interface JobEntry {
  period: string;
  company: string;
  role: string;
  description: string;
  insight: string;    // NEW — one-line italic text for timeline
}

export interface Skill {
  name: string;
  category: string;
  years: string;
  contextLine?: string;  // NEW — personal sentence tying skill to work
}

export interface AITool {
  name: string;
  description: string;
  iconPath: string;
}

export interface Methodology {
  name: string;
  description?: string;
}
```

- [ ] **Step 2: Create `src/data/aiTools.ts`**

```typescript
import type { AITool } from '@/types';

export const aiTools: AITool[] = [
  {
    name: "Claude Code",
    description: "AI pair programming in the terminal",
    iconPath: "/icons/ai/claude.webp",
  },
  {
    name: "Cursor",
    description: "AI-native code editor for rapid iteration",
    iconPath: "/icons/ai/cursor.webp",
  },
  {
    name: "Codex",
    description: "Autonomous coding agent for parallel tasks",
    iconPath: "/icons/ai/codex.webp",
  },
];

export const aiExploring: string[] = [
  "LLM APIs",
  "Prompt Engineering",
  "AI Agents",
];
```

- [ ] **Step 3: Create `src/data/methodologies.ts`**

```typescript
import type { Methodology } from '@/types';

export const methodologies: Methodology[] = [
  { name: "Agile/Scrum" },
  { name: "CI/CD" },
  { name: "TDD" },
  { name: "Code Review" },
  { name: "Mentoring" },
  { name: "Design Systems" },
];
```

- [ ] **Step 4: Update `src/data/projects.ts` — add problem/craft/impact fields**

Add placeholder problem/craft/impact to each project. Example for first project:

```typescript
{
  company: "Tenpu",
  name: "Tenpu Procurement Platform",
  type: "Enterprise Web Application",
  period: "Nov 2025 - Present",
  description: "Enterprise-grade procurement platform...",
  problem: "Public procurement processes are slow, opaque, and frustrating for both buyers and suppliers navigating RFI and RFP workflows.",
  craft: "Building full-stack with Next.js, TypeScript, tRPC, Prisma, and PostgreSQL on Azure. Focused on workflow clarity and real-time collaboration between stakeholders.",
  impact: "Streamlining procurement workflows so public buyers and suppliers can focus on making the right decisions, not fighting the process.",
  skills: ["Next.js", "TypeScript", "tRPC", "Zod", "Tailwind UI", "Remirror", "Prisma", "PostgreSQL", "Azure"],
  role: "SE",
}
```

Repeat for all 6 projects with placeholder text derived from existing descriptions. Mark with `// TODO: Alexei to refine` comments.

- [ ] **Step 5: Update `src/data/journey.ts` — add insight field and Dedagroup entry**

Add `insight` field to all entries and add missing Dedagroup entry:

```typescript
{
  period: "2019 - 2020",
  company: "Dedagroup",
  role: "Developer",
  description: "Brief stepping-stone role in enterprise software.",
  insight: "Stepping stone to enterprise scale",
}
```

Add `insight` to all existing entries. Example:
- Mobilesoft: `"Where I learned to build for real users"`
- Kirey Group: `"Becoming the go-to for frontend"`
- Deliverect: `"Full-stack impact at scale"`
- Bostan Software: `"Owning the full loop: build → ship → listen"`
- Tenpu: `"Bridging code & customer value"`

- [ ] **Step 6: Update `src/data/skills.ts` — add contextLine to a few key skills**

Add `contextLine` to the most prominent skills (React, Next.js, TypeScript, Python, Node.js). Leave others as `undefined`. Example:

```typescript
{ name: "React", category: "Frontend", years: "4+", contextLine: "Used across every role since Deliverect — from component libraries to the full DraughtsAI platform." }
```

- [ ] **Step 7: Verify build passes**

```bash
bun run build
```

Expected: Build succeeds. Type errors in locale data files are expected (they also need the new fields) — fix in next task.

- [ ] **Step 8: Update locale data files**

Update all locale variants to include the new fields:
- `src/data/{en,nl,it,ro}/projects.ts` — add problem/craft/impact (same English placeholders for now, translate later)
- `src/data/{en,nl,it,ro}/journey.ts` — add insight field, add Dedagroup entry

- [ ] **Step 9: Verify build passes cleanly**

```bash
bun run build
```

Expected: Clean build with no type errors.

- [ ] **Step 10: Commit**

```bash
git add src/types/ src/data/
git commit -m "feat: update data model with case study fields, AI tools, and methodologies"
```

---

## Task 3: Redesign Global Styles — Dark Cinematic Palette

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace CSS variables with dark cinematic palette**

Replace the `:root` and `.dark` color definitions in `globals.css` with the new palette:

```css
:root {
  /* Dark cinematic palette */
  --background: 220 20% 4%;          /* #0a0a0a → #0d1117 */
  --foreground: 30 12% 90%;          /* #e8e4df */
  --card: 220 18% 7%;                /* slightly lighter dark */
  --card-foreground: 30 12% 90%;
  --primary: 28 30% 59%;             /* gold #c4956a */
  --primary-foreground: 220 20% 4%;
  --secondary: 130 60% 70%;          /* green #7ee787 */
  --accent: 215 100% 67%;            /* blue #58a6ff */
  --accent-purple: 265 80% 80%;      /* purple #d2a8ff */
  --muted: 220 15% 15%;
  --muted-foreground: 30 6% 50%;
  --border: 220 15% 12%;
  --ring: 28 30% 59%;
  --radius: 0.5rem;
}
```

Remove the `.dark` block (the site is always dark now).

- [ ] **Step 2: Add film grain and dot grid textures**

Add to `globals.css`:

```css
/* Film grain overlay — z-index 40 to sit below sticky header (z-50) */
.film-grain::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 40;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Dot grid background */
.dot-grid {
  background-image: radial-gradient(circle, rgba(255,255,255,0.5) 0.5px, transparent 0.5px);
  background-size: 32px 32px;
  opacity: 0.02;
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
```

- [ ] **Step 3: Add typography utilities**

```css
/* Typography */
.font-display {
  font-family: Georgia, 'Times New Roman', serif;
}

.font-mono-brand {
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace;
}

/* Scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 4: Remove old custom classes**

Remove `.shall-we`, `.green`, `.black`, `.social-icon` classes that were part of the old light theme. Keep `.skip-to-content` and `.nav-bar` (update `.nav-bar` if needed).

- [ ] **Step 5: Verify dev server renders dark background**

```bash
bun dev
```

Open localhost:3000 — page should now have dark background. Content will look broken (colors wrong) — that's expected, we'll fix components next.

- [ ] **Step 6: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: replace light theme with dark cinematic palette and textures"
```

---

## Task 4: Build Shared UI Components

**Files:**
- Create: `src/components/ui/ScrollReveal.tsx`
- Create: `src/components/ui/TechPill.tsx`
- Create: `src/hooks/useActiveSection.ts`

- [ ] **Step 1: Create `src/hooks/useActiveSection.ts`**

```typescript
"use client";

import { useState, useEffect } from 'react';

const SECTION_IDS = ['story', 'work', 'craft', 'ai', 'connect'] as const;
export type SectionId = typeof SECTION_IDS[number];

export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>('story');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: '-40% 0px -40% 0px' } // NOTE: may need tuning during visual testing — Story section at page top might not intersect the narrow middle band
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
```

- [ ] **Step 2: Create `src/components/ui/ScrollReveal.tsx`**

```typescript
"use client";

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children, delay = 0, className }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Create `src/components/ui/TechPill.tsx`**

```typescript
interface TechPillProps {
  name: string;
  category?: string;
  size?: 'sm' | 'md';
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Frontend: { bg: 'rgba(126,231,135,0.1)', text: '#7ee787', border: 'rgba(126,231,135,0.15)' },
  Backend: { bg: 'rgba(88,166,255,0.1)', text: '#58a6ff', border: 'rgba(88,166,255,0.15)' },
  Libraries: { bg: 'rgba(196,149,106,0.1)', text: '#c4956a', border: 'rgba(196,149,106,0.15)' },
  Tools: { bg: 'rgba(210,168,255,0.1)', text: '#d2a8ff', border: 'rgba(210,168,255,0.15)' },
  Testing: { bg: 'rgba(88,166,255,0.1)', text: '#58a6ff', border: 'rgba(88,166,255,0.15)' },
  Mobile: { bg: 'rgba(210,168,255,0.1)', text: '#d2a8ff', border: 'rgba(210,168,255,0.15)' },
  default: { bg: 'rgba(255,255,255,0.04)', text: 'rgba(255,255,255,0.5)', border: 'rgba(255,255,255,0.08)' },
};

export function TechPill({ name, category, size = 'sm' }: TechPillProps) {
  const colors = categoryColors[category ?? 'default'] ?? categoryColors.default;
  const sizeClasses = size === 'sm' ? 'text-[9px] px-2 py-0.5' : 'text-[10px] px-2.5 py-1';

  return (
    <span
      className={`font-mono-brand ${sizeClasses} rounded-full inline-block`}
      style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
    >
      {name}
    </span>
  );
}
```

- [ ] **Step 4: Verify build passes**

```bash
bun run build
```

Expected: Clean build. Components aren't used yet — just verifying no type/import errors.

- [ ] **Step 5: Commit**

```bash
git add src/hooks/ src/components/ui/ScrollReveal.tsx src/components/ui/TechPill.tsx
git commit -m "feat: add shared UI components (ScrollReveal, TechPill, useActiveSection)"
```

---

## Task 5: Update i18n Messages and Remove Montserrat

**Files:**
- Modify: `src/messages/en.json`, `src/messages/nl.json`, `src/messages/it.json`, `src/messages/ro.json`
- Modify: `src/app/[locale]/layout.tsx`

This task MUST run before building any section components, as they depend on the new translation keys.

- [ ] **Step 1: Update `src/messages/en.json` with new section labels**

Add/update keys:

```json
{
  "navigation": {
    "story": "Story",
    "work": "Work",
    "craft": "Craft",
    "ai": "AI",
    "connect": "Connect"
  },
  "hero": {
    "roleLabel": "Senior Software Engineer @ Tenpu",
    "headline": "Software is a conversation between the people who {build} it and the people who {use} it.",
    "payoff": "I make sure both sides are heard.",
    "scrollToExplore": "Scroll to explore"
  },
  "sections": {
    "myJourney": "My Journey",
    "work": "Work",
    "selectedProjects": "Selected Projects",
    "craft": "Craft",
    "ai": "AI",
    "connect": "Connect"
  },
  "connect": {
    "headline": "Let's build something that {matters}",
    "subtitle": "I'm always open to connecting with product managers, designers, and fellow engineers who believe the best technology is built with the user at its heart.",
    "downloadResume": "Download Resume (PDF)",
    "copyright": "© {year} Alexei Bostan · Built with Next.js"
  }
}
```

Remove deprecated keys for old page-specific content (about page, skills page headings, etc.). Keep keys still used in the new single-page sections.

- [ ] **Step 2: Update other locale files**

Update `nl.json`, `it.json`, `ro.json` with same key structure. Use English as placeholder for now — commit message should note that NL/IT/RO translations are pending.

- [ ] **Step 3: Remove Montserrat font from layout**

In `src/app/[locale]/layout.tsx`:
- Remove the `import { Montserrat } from 'next/font/google'` and its variable declaration
- Update the `<body>` className to remove the Montserrat font variable
- The body will now use the default sans-serif + our custom `.font-display` and `.font-mono-brand` classes

- [ ] **Step 4: Verify build passes**

```bash
bun run build
```

Expected: Clean build. Some pages may show translation warnings if they reference removed keys — that's fine, those pages will be deleted later.

- [ ] **Step 5: Commit**

```bash
git add src/messages/ src/app/[locale]/layout.tsx
git commit -m "feat: update i18n messages for new sections and remove Montserrat font (NL/IT/RO translations pending)"
```

---

## Task 6: Redesign Header with Anchor Navigation

**Files:**
- Modify: `src/components/layout/Header.tsx`

- [ ] **Step 1: Rewrite Header component**

Redesign the Header as a dark sticky nav with monospace labels, anchor links, and active section highlighting. Key changes:

- Background: dark/transparent with blur backdrop
- Nav links: anchor links (`#story`, `#work`, `#craft`, `#ai`, `#connect`) instead of page routes
- Active section: gold color from `useActiveSection` hook
- Brand name: `alexei.bostan` in monospace
- Language switcher: compact bordered pill (keep existing `LanguageSwitcher` component, restyle)
- Mobile: hamburger menu with same anchor links
- Remove social icons from header (they move to Connect section)
- **Retain skip-to-content link** — the existing `.skip-to-content` class in globals.css provides this. Ensure the link targets `#story` (the first content section).

Font classes: `font-mono-brand` for nav labels, brand name.

Scroll behavior on nav click: use `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })` instead of Next.js `<Link>`.

- [ ] **Step 2: Verify nav renders correctly on dev server**

```bash
bun dev
```

Open localhost:3000 — header should be dark with monospace nav items. Links won't scroll yet (sections don't exist).

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: redesign header with dark sticky nav and anchor navigation"
```

---

## Task 7: Build Section 01 — Story (Hero + Timeline)

**Files:**
- Create: `src/components/sections/HeroSection.tsx`
- Create: `src/components/sections/TimelineSection.tsx`

- [ ] **Step 1: Create `src/components/sections/HeroSection.tsx`**

Client component (`"use client"`) for staggered entrance animation:
- Full viewport height (`min-h-screen`) with dark gradient background
- Staggered fade-in on load: role label (0.2s delay) → headline (0.5s) → payoff (0.8s) → stat pills (1.1s). Use Framer Motion `motion.div` with `initial={{ opacity: 0, y: 20 }}` and `animate={{ opacity: 1, y: 0 }}` with staggered `transition.delay`.
- Parallax effect: wrap hero content in `motion.div` with `style={{ y: useTransform(scrollY, [0, 500], [0, 150]) }}` so text scrolls slower than viewport. Disable parallax with `prefers-reduced-motion` media query check.
- Role label in monospace green
- Headline with "build" and "use" in gold italic using `<em>` tags
- Payoff line at 50% opacity
- Stat pills row with color-coded monospace text
- Scroll indicator at bottom center
- Section `id="story"` for anchor navigation

Accept pre-loaded translations and data as props (passed from server-component page.tsx). Do NOT use `useTranslations` in this client component — receive translated strings as props instead.

- [ ] **Step 2: Create `src/components/sections/TimelineSection.tsx`**

Client component (`"use client"`) for scroll animation:
- Receive journey data as props (loaded by parent server component page.tsx)
- Horizontal timeline with gradient line (gold → green)
- 6 nodes with colored dots, year, company, role, insight text
- Tenpu node: larger dot with green glow (`box-shadow`)
- Bostan Software: dashed border on dot to indicate parallel role
- Framer Motion: line draws left-to-right on scroll, nodes stagger in
- Mobile: vertical layout via Tailwind responsive classes (`flex-col md:flex-row`)

- [ ] **Step 3: Verify sections render on dev server**

Temporarily import and render both components in `src/app/[locale]/page.tsx` to verify they display correctly.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/HeroSection.tsx src/components/sections/TimelineSection.tsx
git commit -m "feat: add Story section (hero + career timeline)"
```

---

## Task 8: Build Section 02 — Work

**Files:**
- Create: `src/components/sections/WorkSection.tsx`

- [ ] **Step 1: Create `src/components/sections/WorkSection.tsx`**

Client component (`"use client"`) — receives projects array as props from server-component page.tsx:
- Section header: `02` label + "Work" in Georgia serif
- State: `featuredIndex` (default: 0, Tenpu Procurement Platform)
- Featured project: two-column grid
  - Left: project name (Georgia serif), company + period, `TechPill` components, role context in italic
  - Right: Problem → Craft → Impact narrative with colored accent lines (gold/green/blue)
- Compact cards: row of remaining projects with name, company, tech pills, arrow icon
- Click handler: `setFeaturedIndex(i)` with Framer Motion `AnimatePresence` for cross-fade
- Hover: border glow via Tailwind `hover:border-[color]/20` + `hover:-translate-y-0.5`
- Section `id="work"`
- Mobile: stack featured project vertically, compact cards full-width

Use `ScrollReveal` wrapper for initial section appearance.

- [ ] **Step 2: Verify featured swap works on dev server**

Add WorkSection to page.tsx temporarily. Click compact cards — featured project should swap with animation.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/WorkSection.tsx
git commit -m "feat: add Work section with featured project swap"
```

---

## Task 9: Build Section 03 — Craft

**Files:**
- Create: `src/components/sections/CraftSection.tsx`

- [ ] **Step 1: Create `src/components/sections/CraftSection.tsx`**

Client component (`"use client"`) for interactive skill map:
- Section header: `03` + "Craft" in Georgia serif
- Two-column layout: rings (left) + detail panel (right)

**Concentric rings (left):**
- Three concentric circles using CSS `border-radius: 50%` with absolute positioning
- Outer ring: green border, skill pills from `skills.ts` positioned around ring using CSS transforms (calculate angle per skill)
- Middle ring: gold border, methodology pills from `methodologies.ts`
- Inner core: gold filled circle with "User empathy" text
- Framer Motion: rings scale in from 0 on scroll entry (staggered: core → middle → outer)
- Outer ring: `animate={{ rotate: 360 }}` with `transition={{ duration: 60, repeat: Infinity, ease: "linear" }}`
- Middle ring: counter-rotate at 120s duration
- `prefers-reduced-motion`: disable rotations

**Detail panel (right):**
- State: `selectedSkill` (default: first React skill)
- On hover/click of skill pill: update state, panel shows skill name, ring label, years, category, contextLine
- Languages card below: flags + language names + proficiency
- Section `id="craft"`

**Mobile:**
- Hide rings, show categorized vertical list with What/How/Why headers
- Use Tailwind `hidden md:flex` / `flex md:hidden` for responsive swap

- [ ] **Step 2: Verify rings render and skill selection works**

Test on dev server. Hover a skill → detail panel updates. Verify rings animate.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/CraftSection.tsx
git commit -m "feat: add Craft section with concentric rings skill map"
```

---

## Task 10: Build Section 04 — AI

**Files:**
- Create: `src/components/sections/AISection.tsx`

- [ ] **Step 1: Create `src/components/sections/AISection.tsx`**

Server component (no complex interactivity needed):
- Section header: `04` + "AI" in Georgia serif
- Intro line in Georgia italic
- Two-column grid (`md:grid-cols-2`)

**Left column — Building WITH AI:**
- Purple dot + "BUILDING WITH AI" monospace label
- Intro text
- Three tool cards from `aiTools.ts`: 32px icon via `<Image>`, tool name, description
- Cards: dark glass-like background (`bg-white/[0.03]`), colored border per tool

**Right column — Building IN AI:**
- Green dot + "BUILDING IN AI" monospace label
- Intro text
- DraughtsAI featured card: name, `draughtsai.com` link, ACTIVE badge, description, tech pills
- Currently Exploring: dashed border container with dashed-border pills

- Section `id="ai"`
- Mobile: columns stack vertically
- Wrap in `ScrollReveal` for entrance animation

- [ ] **Step 2: Verify AI section renders with icons**

Check that bundled icons load correctly from `/icons/ai/`.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/AISection.tsx
git commit -m "feat: add AI section with Building WITH/IN columns"
```

---

## Task 11: Build Section 05 — Connect

**Files:**
- Create: `src/components/sections/ConnectSection.tsx`

- [ ] **Step 1: Create `src/components/sections/ConnectSection.tsx`**

Client component (`"use client"`) for word-by-word headline animation:
- Full viewport height, centered content
- Section number `05` with horizontal lines
- Headline: "Let's build something that *matters*" — "matters" in gold italic. Animate word-by-word on scroll entry using Framer Motion `motion.span` with staggered delays per word.
- Subtitle text about connecting with PMs/designers/engineers
- Social links row: Email, LinkedIn, GitHub, Instagram — bordered buttons with Lucide icons
- Resume PDF download link in monospace gold
- Simple Analytics badge: `<img>` tag with `src="https://simpleanalyticsbadge.com/alexeibostan.com"` and `alt` text
- Copyright line: `© {new Date().getFullYear()} Alexei Bostan · Built with Next.js`
- Section `id="connect"`, also wraps in `<footer>` semantic element
- Hover on buttons: use Tailwind `hover:bg-white/5 hover:border-white/20 hover:-translate-y-0.5 transition-all`

- [ ] **Step 2: Verify Connect section renders**

Check social links, badge loads, copyright displays.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ConnectSection.tsx
git commit -m "feat: add Connect section with social links and analytics badge"
```

---

## Task 12: Compose Single Page and Remove Old Pages

**Files:**
- Modify: `src/app/[locale]/page.tsx`
- Modify: `src/components/layout/Layout.tsx`
- Remove: `src/app/[locale]/about/page.tsx`, `src/app/[locale]/projects/page.tsx`, `src/app/[locale]/skills/page.tsx`
- Remove: `src/components/layout/Footer.tsx`
- Remove: `src/app/[locale]/Body.tsx` (if no longer needed)

- [ ] **Step 1: Rewrite `src/app/[locale]/page.tsx`**

Replace entire content with section composition. **Critical: page.tsx is a server component** — it loads all locale-specific data and passes it as props to client section components. Client components do NOT import data or use dynamic imports.

```typescript
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { CraftSection } from '@/components/sections/CraftSection';
import { AISection } from '@/components/sections/AISection';
import { ConnectSection } from '@/components/sections/ConnectSection';

// Import data loaders
async function loadLocaleData(locale: string) {
  // Dynamic import based on locale — this runs server-side only
  const { projects } = await import(`@/data/${locale}/projects`);
  const { professionalJourney } = await import(`@/data/${locale}/journey`);
  const { skills } = await import(`@/data/${locale}/skills`);
  // Non-locale data
  const { aiTools, aiExploring } = await import('@/data/aiTools');
  const { methodologies } = await import('@/data/methodologies');
  const { companies } = await import(`@/data/${locale}/companies`);
  return { projects, professionalJourney, skills, aiTools, aiExploring, methodologies, companies };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const data = await loadLocaleData(locale);

  return (
    <>
      <div className="film-grain" />
      <div className="dot-grid" />
      <HeroSection translations={/* hero translations */} />
      <TimelineSection journey={data.professionalJourney} />
      <WorkSection projects={data.projects} />
      <CraftSection skills={data.skills} methodologies={data.methodologies} />
      <AISection aiTools={data.aiTools} aiExploring={data.aiExploring} />
      <ConnectSection translations={/* connect translations */} />
    </>
  );
}
```

Keep existing `generateStaticParams()`. The exact prop shapes will be refined during implementation — the key pattern is: **server loads data, client receives via props**.

- [ ] **Step 2: Update `src/components/layout/Layout.tsx`**

Remove Footer import and rendering. The Layout now wraps only Header + main content:

```typescript
<Header locale={locale} />
<main className="flex-grow">
  {children}
</main>
```

- [ ] **Step 3: Delete old page files**

```bash
rm src/app/\[locale\]/about/page.tsx
rm src/app/\[locale\]/projects/page.tsx
rm src/app/\[locale\]/skills/page.tsx
rm src/components/layout/Footer.tsx
```

Remove the `about/`, `projects/`, `skills/` directories if empty after deletion.

- [ ] **Step 4: Update `src/app/[locale]/layout.tsx` metadata**

Update the page metadata to reflect the single-page brand voice:
- Title: "Alexei Bostan — Senior Software Engineer"
- Description: Use the brand tagline

- [ ] **Step 5: Full build verification**

```bash
bun run build
```

Expected: Clean build. Only 4 locale pages generated (one per locale root). No 404s for removed pages.

- [ ] **Step 6: Dev server smoke test**

```bash
bun dev
```

Verify on localhost:3000:
- All 5 sections render in order
- Nav anchor links scroll to correct sections
- Active section highlights in nav while scrolling
- Language switcher works (changes locale, content updates)
- Film grain and dot grid textures visible
- Mobile responsive: check at 375px width

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: compose single-page scroll and remove old multi-page structure"
```

---

## Task 13: Update Sitemap and SEO

**Files:**
- Modify: `src/app/sitemap.ts`
- Modify: `src/lib/metadata.ts`

- [ ] **Step 1: Simplify `src/app/sitemap.ts`**

Change pages array to only the root:

```typescript
const pages = [''];
```

This generates sitemap entries for `/en/`, `/nl/`, `/it/`, `/ro/` only.

- [ ] **Step 2: Update metadata in `src/lib/metadata.ts`**

Update the default SEO metadata to reflect the new brand voice:
- Description: "Senior Software Engineer bridging code and customer value. 9+ years building full-stack software with user empathy at the core."
- Keywords: update to reflect new positioning

- [ ] **Step 3: Update JSON-LD structured data**

In `src/lib/metadata.ts`, update `generatePersonSchema()` and `generateWebsiteSchema()` to reflect the single-page structure. Remove references to individual page URLs (about, projects, skills) that no longer exist. Update the person description to match the new brand voice.

Also check `src/app/[locale]/layout.tsx` where `StructuredData` is rendered — ensure it passes updated schema data.

- [ ] **Step 4: Verify sitemap and metadata**

```bash
bun run build
```

Check `build/sitemap.xml` has only locale root URLs. Check `build/en/index.html` has correct meta tags and JSON-LD.

- [ ] **Step 5: Commit**

```bash
git add src/app/sitemap.ts src/lib/metadata.ts
git commit -m "feat: update sitemap and SEO metadata for single-page structure"
```

---

## Task 14: Final Polish, Lint, and Accessibility Check

**Files:**
- Various

- [ ] **Step 1: Run lint**

```bash
bun run lint
```

Fix any lint errors.

- [ ] **Step 2: Full production build**

```bash
bun run build
```

Expected: Clean build, no warnings, static export to `build/`.

- [ ] **Step 3: Visual review on dev server**

```bash
bun dev
```

Walk through all 5 sections on desktop and mobile viewports:
- [ ] Hero loads with staggered animation
- [ ] Timeline nodes animate on scroll
- [ ] Project card swap works smoothly
- [ ] Concentric rings animate and skill selection updates detail panel
- [ ] AI section icons load, cards display correctly
- [ ] Connect section social links work, analytics badge loads
- [ ] Nav active state updates while scrolling
- [ ] Language switcher works across all 4 locales
- [ ] `prefers-reduced-motion` disables animations (test in browser dev tools)
- [ ] Keyboard navigation works (tab through interactive elements)

- [ ] **Step 4: Commit any final fixes**

```bash
git add -A
git commit -m "fix: final polish and lint cleanup"
```
