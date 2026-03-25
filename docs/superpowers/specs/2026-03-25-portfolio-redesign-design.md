# Portfolio Redesign — Design Spec

## Overview

Full redesign of alexeibostan.com from a multi-page template-style portfolio to a single-page cinematic scroll experience. The site should feel like an interactive narrative that demonstrates frontend craft while telling Alexei's story as an empathy-driven engineer.

## Brand Voice

**Core tagline (hero):**
> Software is a conversation between the people who *build* it and the people who *use* it.
> I make sure both sides are heard.

**Brand positioning:** Not "I write great code" — but "I'm the engineer who cares what happens after deploy." Empathy-driven, product-minded, full-stack.

**Target audience (priority order):**
1. Hiring managers / recruiters at tech companies
2. Technical leads / engineering managers
3. Freelance / contract clients (secondary — Bostan Software Developments, DraughtsAI)

**Company name:** "Bostan Software Developments" is the official entity name (as in `journey.ts`). Use "Bostan Software" as the short form in compact UI elements (timeline, cards). Use the full name only in detailed contexts.

## Aesthetic Direction: Cinematic Developer

A hybrid of cinematic scroll storytelling and developer identity.

### Visual Language

- **Palette:** Dark atmospheric background (`#0a0a0a` → `#0d1117`), warm gold accent (`#c4956a`), green (`#7ee787`), blue (`#58a6ff`), purple (`#d2a8ff`), muted text (`#e8e4df`)
- **Typography:** Georgia serif for display headlines (editorial gravitas) + monospace (`SF Mono` / `Fira Code`) for labels, nav, and technical elements (engineering precision). This pairing is the typographic signature.
- **Textures:** Film grain overlay (subtle, ~2.5% opacity), dot grid background (~2% opacity). Layered for atmospheric depth.
- **Backgrounds:** Gradient meshes transitioning between dark tones. No solid flat backgrounds.

### Motion & Animation

- **Page load:** Staggered fade-in on hero content (role label → headline → payoff → stat pills, ~0.2s intervals)
- **Scroll reveals:** Sections fade up and into view as they enter the viewport (IntersectionObserver-driven)
- **Parallax:** Hero text scrolls slightly slower than background for depth
- **Timeline:** Line draws itself left-to-right as user scrolls, nodes pop in sequentially
- **Concentric rings (Craft):** Draw outward from center on scroll entry; outer ring rotates slowly (60s cycle), middle ring counter-rotates at half speed
- **Project cards:** Smooth expand/collapse animation on featured swap with content cross-fade
- **Hover states:** Subtle border glow, slight lift (translateY -2px), color brightening on interactive elements
- **Mobile:** Animations simplified — no parallax, reduced motion. Tap replaces hover.

## Site Structure

Single-page scroll with 5 sections. Nav is sticky with active section highlighted in gold. Anchor-scroll on nav click with smooth behavior.

### Navigation

- **Desktop:** `alexei.bostan` (left) | `Story  Work  Craft  AI  Connect` (center-right) | `EN` language switcher (right)
- **Mobile:** `alexei.bostan` (left) | hamburger (right) → expandable menu
- **Active state:** Current section label turns gold (`#c4956a`) as user scrolls
- **Language switcher:** Compact bordered pill showing current locale code. 4 locales: EN, NL, IT, RO.
- **Anchor IDs:** Locale-independent (`#story`, `#work`, `#craft`, `#ai`, `#connect`). URLs like `/nl/#work` work naturally with the locale routing.

---

## Section 01 — Story

### Hero (viewport height)

- Role label: `Senior Software Engineer @ Tenpu` in monospace green
- Headline: "Software is a conversation between the people who *build* it and the people who *use* it." — Georgia serif, ~38px, "build" and "use" highlighted in gold italic
- Payoff: "I make sure both sides are heard." — Georgia serif italic, ~22px, 50% opacity
- Stat pills: `9+ years · full-stack · React · Node.js · Mobile · 4 spoken languages` in monospace, color-coded
- Scroll indicator: "Scroll to explore" + fading vertical line at bottom center

### Career Timeline

- Horizontal layout with gradient line (gold → green, representing growth)
- 6 nodes representing actual career history:
  1. **Mobilesoft** (2016) — Frontend Developer — "Where I learned to build for real users"
  2. **Dedagroup** (2019) — Developer — *(brief role, stepping stone)*
  3. **Kirey Group** (2020) — Frontend Developer — "Becoming the go-to for frontend"
  4. **Deliverect** (2021) — Senior Software Engineer — "Full-stack impact at scale"
  5. **Bostan Software** (2024) — Owner & Consultant — "Owning the full loop: build → ship → listen"
  6. **Tenpu** (NOW) — Senior Software Engineer — "Bridging code & customer value"
- Each node: colored dot, year, company name, role title, one-line italic insight ("what I learned about users here"). Insight text is placeholder — Alexei to provide personal versions.
- Current role (Tenpu) has a larger glowing green dot. Bostan Software runs in parallel (since 2024), shown with a dashed connector or dual-track indicator.
- **Mobile:** Flips to vertical timeline, nodes animate top-to-bottom

---

## Section 02 — Work

### Project Layout: Featured + Grid

One project is always **featured** (expanded) with remaining projects as compact cards below.

### Featured Project (two-column)

- **Left column:** Project identity — name (Georgia serif, ~28px), company + period, tech pills (color-coded by category: green=frontend, blue=backend, purple=mobile, gold=languages), role context line in italic
- **Right column:** Case study narrative with three subsections:
  - **Problem** (gold accent line) — what users struggled with
  - **Craft** (green accent line) — technical approach
  - **Impact** (blue accent line) — what changed

### Compact Project Cards

- Row of cards below the featured project
- Each shows: project name, company + period, tech pills, arrow icon (→ rotated -45deg)
- **Click interaction:** Clicking a compact card smoothly expands it into the featured position. Previous featured card collapses into the compact row. Content cross-fades.
- **Hover:** Border glow, slight lift, arrow rotates to point right

### Projects to Include

All 6 current projects from `src/data/projects.ts`:
1. **Tenpu Procurement Platform** (Tenpu, 2025–Present)
2. **Pulse by Deliverect** (Deliverect, 2023–2025)
3. **Deliverect Design System** (Deliverect, 2022–2023)
4. **P&ID Digitalization Solution** (Bostan Software Developments, 2024–Present)
5. **Consumer Finance Application** (Kirey Group, 2020–2021)
6. **Igea Banca Digital Platform** (Mobilesoft, 2017–2019)

Each needs rewritten descriptions in the Problem → Craft → Impact format. **This is a content authoring task for Alexei** — placeholder descriptions can be derived from current data but the real problem/impact framing requires domain knowledge. Default featured project on load: Tenpu Procurement Platform (most recent).

### Mobile

No split layout — featured project stacks vertically (identity on top, case study below). Compact cards become full-width stacked. Tap to expand.

---

## Section 03 — Craft

### Concentric Rings Skill Map

Three concentric rings representing depth of thinking:

- **Outer ring** — "WHAT I BUILD WITH" (green border): All skills from `src/data/skills.ts` categories Frontend, Backend, Libraries, Tools, and Testing. These are the technologies.
  - Examples: React, Next.js, Angular, Vue.js, TypeScript, Python, FastAPI, Node.js, PostgreSQL, MongoDB, Docker, Jest, etc.
- **Middle ring** — "HOW I BUILD" (gold border): Professional methodologies and practices (not currently in skills data — add to a new `methodologies` array or extend Skill type with a `ring` field). Pills: Agile/Scrum, CI/CD, TDD, Code Review, Mentoring, Design Systems.
- **Inner core** — "WHY" (gold filled): "User empathy" in Georgia italic

**Skill-to-ring mapping rule:** All existing skills from `skills.ts` go to the outer ring. The middle ring contains professional practices that are new data (not currently in skills.ts). The inner core is static text, not data-driven.

### Ring Animation

- Rings draw outward from center on scroll entry
- Outer ring rotates slowly (60s full rotation)
- Middle ring counter-rotates at half speed
- Inner core stays still
- Skill pills fade in once their ring is drawn

### Detail Panel (right side)

- Shows on hover/click of a skill pill
- Displays: skill name + ring category, years of experience (large number), category label, personal context line tying the skill to specific work
- A faint connecting line from hovered pill to detail panel
- Default state: React pre-selected so panel isn't empty on load

### Languages Card

Below the detail panel. Compact card showing:
- 🇬🇧 English (Fluent), 🇮🇹 Italian (Fluent), 🇷🇴 Romanian (Native), 🇳🇱 Dutch (Conversational)

### Mobile

Rings collapse into a categorized vertical list with What / How / Why headers. Tapping a skill expands its detail inline. Languages card stays as-is below.

---

## Section 04 — AI

### Layout: Two Columns

Section intro line in Georgia italic: "I don't just use AI — I build with it, build for it, and think about what it means for the people on the other side of the screen."

### Left Column — Building WITH AI

Header: purple dot + "BUILDING WITH AI" monospace label

Brief intro text: "AI tools are part of my daily engineering workflow. Not as a crutch — as a multiplier."

Three tool cards, each with:
- 32-40px icon from `https://unpkg.com/@lobehub/icons-static-avatar@1.3.0/avatars` (Claude, Cursor, Codex)
- Tool name (13px bold)
- One-line description (11px muted)

Tools:
1. **Claude Code** — AI pair programming in the terminal
2. **Cursor** — AI-native code editor for rapid iteration
3. **Codex** — Autonomous coding agent for parallel tasks

### Right Column — Building IN AI

Header: green dot + "BUILDING IN AI" monospace label

Brief intro text: "Actively building products where AI is the core experience, not a feature."

**DraughtsAI featured card:**
- Name (18px bold) + `draughtsai.com` subtitle
- ACTIVE badge (green monospace pill)
- Description of the AI angle
- Tech pills (AI/ML, Game Analysis, React, Node.js)

**Currently Exploring subsection:**
- Dashed border container
- Dashed-border pills: LLM APIs, Prompt Engineering, AI Agents

### Mobile

Columns stack vertically. Building WITH AI on top, Building IN AI below.

---

## Section 05 — Connect

### Layout: Centered, Full Viewport Height

- Section number (05) centered with horizontal lines on each side
- Headline: "Let's build something that *matters*" — Georgia serif, ~32px. "matters" in gold italic (visual callback to hero's "build" and "use")
- Subtitle: "I'm always open to connecting with product managers, designers, and fellow engineers who believe the best technology is built with the user at its heart."
- Social links as bordered button row: Email, LinkedIn, GitHub, Instagram — each with inline SVG icon + label
- Resume download link below in monospace gold with dashed underline
- Simple Analytics badge: standard badge from `https://simpleanalyticsbadge.com/alexeibostan.com`
- Copyright line: `© 2026 Alexei Bostan · Built with Next.js` in monospace, very low opacity

### Animation

- Headline fades in word-by-word on scroll entry
- Link buttons stagger in from below
- Hover on buttons: border brightens, subtle background fill, slight lift

---

## Technical Architecture

### Framework

Stays on Next.js 15 with static export. Single-page scroll replaces multi-page routing.

### Key Changes from Current Architecture

- **Pages consolidation:** All content moves to `src/app/[locale]/page.tsx` as sections. Remove `about/`, `projects/`, `skills/` page directories.
- **Components:** New section components (`HeroSection`, `TimelineSection`, `WorkSection`, `CraftSection`, `AISection`, `ConnectSection`) replace current page-level components.
- **Animation library:** Use Framer Motion for scroll-triggered reveals, staggered animations, parallax, and complex sequences (ring animations, card expand/collapse). CSS transitions for simple hover states. Adds ~30KB gzipped but the concentric ring and project card animations justify it.
- **Scroll behavior:** Smooth scroll anchoring. IntersectionObserver tracks which section is in view for nav active state.
- **Header:** Redesigned — sticky, dark/transparent, monospace nav labels, language switcher as compact pill.
- **Footer:** Removed as separate component — Connect section serves as the footer.

### i18n

- 4 locales remain: EN, NL, IT, RO
- `src/messages/{locale}.json` updated with new section labels and content
- `src/data/{locale}/` updated with Problem → Craft → Impact project descriptions
- `generateStaticParams()` still pre-renders all locales

### Data Changes

- **Projects:** Each project needs `problem`, `craft`, `impact` fields instead of a single `description`
- **Journey:** Timeline entries need an `insight` field (one-line italic text)
- **Skills:** Add `contextLine` field — personal sentence tying the skill to your work
- **AI tools:** New data file `src/data/aiTools.ts` with tool name, description, icon URL
- **AI exploring:** New data for "Currently Exploring" pills

### Static Export

Remains `output: 'export'` to `build/`. No server runtime needed. GitHub Pages deployment unchanged.

### SEO Considerations

- Single page means all content is on one URL per locale — good for content density, but loses individual page URLs for projects/skills
- Structured data (JSON-LD) should be updated to reflect the single-page structure
- Sitemap simplifies to just locale roots: `/en/`, `/nl/`, `/it/`, `/ro/`
- Meta description updated to reflect brand voice

### External Resources

- AI tool icons: Download from `https://unpkg.com/@lobehub/icons-static-avatar@1.3.0/avatars` and bundle locally in `public/icons/ai/` to avoid runtime CDN dependency on a static site.
- Simple Analytics badge: `https://simpleanalyticsbadge.com/alexeibostan.com` (external, acceptable since it's an analytics service)
- Fonts: Georgia (system serif), monospace stack: `'SF Mono', 'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace`. SF Mono is macOS-only; Fira Code covers Linux; Cascadia Code covers Windows. All are system fonts — no webfont download needed. If cross-platform consistency is critical, bundle Fira Code as a webfont (~50KB).

### Performance

- Dark theme means fewer large white areas to render
- Film grain: CSS-only SVG filter (no image files)
- Dot grid: CSS radial-gradient (no image files)
- Animations: CSS transitions preferred, Framer Motion for complex sequences
- Images: Profile photo (existing), AI tool icons (small, cached via CDN)

### Accessibility

- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>` (Connect section)
- Skip-to-content link retained
- `prefers-reduced-motion`: Disable parallax, slow rotations, and staggered reveals. Keep instant state changes.
- Color contrast: gold `#c4956a` on `#0a0a0a` = ~5.3:1 (passes AA for all text sizes). Muted text `#e8e4df` at 50% opacity (~`#747270`) on dark = ~4.7:1 (passes AA for normal text). Verify all combinations during implementation — any text below 4.5:1 at its rendered size needs adjustment.
- Keyboard navigation: Tab through nav, project cards, skill pills, social links
- ARIA labels on interactive elements (project card swap, skill detail panel)
