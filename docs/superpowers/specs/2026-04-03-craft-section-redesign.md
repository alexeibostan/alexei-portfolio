# Craft Section Redesign

## Problem

The current Craft section uses a concentric rings visualization that:
- Only shows 9 of 33 skills — most skills are invisible to recruiters
- Is hard to scan for keyword matching
- The "User empathy" core concept is buried in a tiny center circle
- The detail panel shows "No additional context available" as a weak default
- The rings don't clearly communicate interactivity

## Design Goals

1. **Full skill visibility** — all 33 skills scannable at a glance
2. **Empathy-first framing** — skills organized by user impact, not just technology category
3. **Depth signal** — context lines tie skills to real projects/experience
4. **Recruiter-friendly** — traditional category names as subtle labels for keyword scanning
5. **Narrative structure** — preserve the Why → How → What story from the original rings concept

## Design

### Section Header (unchanged)
Standard section header: `03 Craft` with divider line and `Skills & Methodologies` subtitle.

### Narrative Header

A horizontal flow banner with a subtle gradient background (gold → green → blue tint, left to right). Three steps connected by arrow icons:

| Step | Label | Main Text | Subtitle |
|------|-------|-----------|----------|
| Why I build | `#c4956a` | *User empathy* | Every decision starts here |
| How I build | `#e16642` | *Ship fast · Get feedback · Iterate* | Agile · CI/CD · Design Systems · Code Review · Mentoring |
| What I build with | `#7ee787` | *React · Next.js · TypeScript* | and 30 more |

- Labels: monospace, 7px, uppercase, letter-spacing 3px
- Main text: display font, italic, 15px (12px for "How" if two lines)
- Subtitles: monospace, 8px, low opacity
- Arrows between steps: SVG chevron-right, very low opacity (0.15)
- Background: `linear-gradient(135deg, rgba(196,149,106,0.04), rgba(126,231,135,0.02), rgba(88,166,255,0.02))` with radial glow accents at left and right edges
- Border: `1px solid rgba(255,255,255,0.04)`
- Padding: 28px 32px, border-radius 14px

### Skill Tile Grid

All 33 skills displayed as clickable tiles in a responsive CSS grid (`grid-template-columns: repeat(auto-fill, minmax(90px, 1fr))`, gap 5px), organized into 3 empathy-framed categories.

**Categories:**

| Empathy Label | Traditional Label (subtle) | Color | Skills |
|---------------|---------------------------|-------|--------|
| What users see | Frontend & UI | `#7ee787` | React, Angular, Next.js, Vue.js, TypeScript, Tailwind CSS, styled-components, vanilla-extract, Radix UI, RxJS, Redux, react-query, Recharts, Zod, Remirror (15) |
| What makes it work | Backend & Data | `#58a6ff` | Node.js, Python, FastAPI, tRPC, Prisma, PostgreSQL, MongoDB, BigQuery, Celery (9) |
| What keeps it solid | DevOps & Testing | `#d2a8ff` | Git, Docker, Kubernetes, ArgoCD, Azure, Storybook, Jest, Vitest, Testing Library (9) |

**Category headers:** Empathy label in category color at ~55% opacity, traditional label in uppercase monospace at ~20% opacity beside it.

**Tile design:**
- Monospace font, 10px name, 8px years
- Default: `background: rgba(255,255,255,0.015)`, `border: 1px solid rgba(255,255,255,0.05)`
- Hover: border brightens, background lightens, `translateY(-1px)` lift
- Active (selected): green border `rgba(126,231,135,0.25)`, green-tinted background, subtle box-shadow glow, name becomes `#e8e4df`, years become green-tinted

**Data change:** The `Skill` type's `category` field needs a new mapping. The existing 5 categories (Frontend, Backend, Libraries, Tools, Testing) merge into 3:
- Frontend + Libraries → "Frontend & UI"
- Backend → "Backend & Data"
- Tools + Testing → "DevOps & Testing"

This mapping should live in the component, not change the data files — keeps locale data untouched.

### Bottom Detail Strip

A persistent horizontal bar below all tile grids that shows the selected skill's details.

**Default state (no skill selected):**
- Dashed border: `1px dashed rgba(126,231,135,0.1)`
- Background: `rgba(126,231,135,0.01)`
- Content: bouncing `↑` arrow (CSS animation) + *"Click a skill to see how I've used it"* in monospace green at low opacity
- Centered layout

**Active state (skill selected):**
- Solid border: `1px solid rgba(126,231,135,0.1)`
- Background: subtle gradient `linear-gradient(135deg, rgba(126,231,135,0.03), rgba(255,255,255,0.01))`
- Radial glow accent in top-left corner
- Layout: horizontal flex with items:
  1. Skill name pill (green monospace, rounded)
  2. Years (large, 22px, light weight) with category label below
  3. Vertical divider line
  4. Context line (italic, display font, ~50% opacity)
- Animates in with framer-motion opacity/y transition

**When a skill has no `contextLine`:** Show the category label and years but leave the context area with a subtle fallback like *"Part of my [category] toolkit"* instead of "No additional context available."

### Languages Strip

Compact horizontal row below the detail strip:
- Label: "Languages" in monospace uppercase
- Items: flag emoji + language name + proficiency level, laid out horizontally with gaps
- Background: `rgba(255,255,255,0.015)`, border `rgba(255,255,255,0.04)`, border-radius 10px

### Mobile Layout

- Narrative header stacks vertically (3 rows) instead of horizontal, arrows become downward
- Tile grid naturally reflows to fewer columns via CSS grid auto-fill
- Detail strip layout stays horizontal but wraps if needed (pill + years on one line, context on next)
- Languages strip wraps naturally

### Animations

- Narrative header: fade in on scroll (ScrollReveal wrapper, already used)
- Tiles: staggered fade-in by category group (delay per group, not per tile — keeps it fast)
- Detail strip: content transitions with framer-motion `key={selectedSkill.name}` for animate-on-change
- Bouncing arrow in default strip: CSS `@keyframes` with subtle translateY

## Data Changes

- **`src/data/methodologies.ts`**: Remove TDD. Keep: Agile/Scrum, CI/CD, Code Review, Mentoring, Design Systems.
- **`src/data/skills.ts`**: No changes to skill entries. Category mapping happens in component.
- **`src/messages/*.json`**: Add new translation keys for empathy labels, narrative text, and updated detail strip copy. Remove old ring-related keys (whatIBuildWith, howIBuild, why, whyIBuild, hoverHint, noContext).

## What Gets Removed

- Concentric rings visualization (`ConcentricRings` component, `RingPill` component)
- `OUTER_RING_NAMES` constant
- Ring-related CSS/styles
- The separate "How I Build" / "Why" / "User empathy" ring layers
- The old detail panel (right column card)

## Out of Scope

- Skill page / dedicated skill detail pages
- Skill filtering or search
- Skill logos/icons
- Changes to other sections
