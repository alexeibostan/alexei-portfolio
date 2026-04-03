# Design Polish & Production Readiness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix design inconsistencies across all sections — whitespace, borders, colors, contrast, card heights — and make the portfolio production-ready.

**Architecture:** Pure CSS/styling changes across 7 files. No structural changes to components. Introduce CSS custom properties for border opacities, replace hardcoded hex colors with CSS variable references, and tighten spacing.

**Tech Stack:** Tailwind CSS, CSS custom properties, Next.js/React (JSX style props)

---

### Task 1: Add Border Tier CSS Variables

Standardize the 5+ different border opacity levels into 3 semantic tiers in `globals.css`.

**Files:**
- Modify: `src/app/globals.css:5-22` (`:root` block)

- [ ] **Step 1: Add border tier variables to `:root`**

Add these 3 lines inside the existing `:root` block, after `--accent-purple`:

```css
    --border-subtle: 0 0% 100% / 0.05;
    --border-default: 0 0% 100% / 0.08;
    --border-emphasis: 0 0% 100% / 0.15;
```

- [ ] **Step 2: Verify dev server renders correctly**

Run: `bun dev` and confirm no visual regressions at `http://localhost:3000`. The new variables aren't consumed yet so nothing should change.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add semantic border tier CSS variables"
```

---

### Task 2: Fix Excessive Vertical Whitespace

The biggest visual issue. Reduce dead zones between sections and in the Connect footer.

**Files:**
- Modify: `src/components/sections/ConnectSection.tsx:51` (min-h-screen → smaller)
- Modify: `src/components/sections/AISection.tsx:41` (py-20 → py-16)
- Modify: `src/components/sections/CraftSection.tsx:41` (py-20 → py-16)

- [ ] **Step 1: Reduce Connect section height**

In `src/components/sections/ConnectSection.tsx`, line 51, change:
```tsx
// FROM:
min-h-screen
// TO:
min-h-[70vh]
```

The `min-h-screen` forces a full viewport on large monitors, creating a massive gap. `70vh` keeps it substantial without the desert.

- [ ] **Step 2: Tighten AI section padding**

In `src/components/sections/AISection.tsx`, line 41, change:
```tsx
// FROM:
py-20
// TO:
py-16
```

- [ ] **Step 3: Tighten Craft section padding**

In `src/components/sections/CraftSection.tsx`, line 41, change:
```tsx
// FROM:
py-20
// TO:
py-16
```

- [ ] **Step 4: Visual check**

Run dev server. Scroll through the entire page and verify:
- No section feels cramped
- The "scroll desert" between AI and Connect is gone
- Connect section still centers its content vertically

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/ConnectSection.tsx src/components/sections/AISection.tsx src/components/sections/CraftSection.tsx
git commit -m "fix: reduce excessive vertical whitespace between sections"
```

---

### Task 3: Standardize Border Opacities Across All Sections

Replace the inconsistent `white/[0.04]`, `white/[0.05]`, `white/[0.06]`, `white/[0.08]`, `white/[0.12]` with the 3 CSS variable tiers.

**Files:**
- Modify: `src/components/sections/WorkSection.tsx` (lines 53, 57, 177)
- Modify: `src/components/sections/AISection.tsx` (lines 51, 57, 207)
- Modify: `src/components/sections/CraftSection.tsx` (lines 194, 469)
- Modify: `src/components/sections/ConnectSection.tsx` (line 97)

- [ ] **Step 1: Standardize WorkSection borders**

In `src/components/sections/WorkSection.tsx`:

Line 53 — featured card border:
```tsx
// FROM:
border border-white/[0.06]
// TO:
border border-white/[0.08]
```

Line 57 — internal divider:
```tsx
// FROM:
md:border-r md:border-white/[0.06]
// TO:
md:border-r md:border-white/[0.08]
```

Line 177 — compact card border:
```tsx
// FROM:
border border-white/[0.06]
// TO:
border border-white/[0.08]
```

Line 177 — compact card hover:
```tsx
// FROM:
hover:border-white/[0.12]
// TO:
hover:border-white/[0.15]
```

- [ ] **Step 2: Standardize AISection borders**

In `src/components/sections/AISection.tsx`:

Line 51 — divider:
```tsx
// FROM:
h-px bg-white/[0.06]
// TO:
h-px bg-white/[0.08]
```

Line 57 — card border:
```tsx
// FROM:
border border-white/[0.06]
// TO:
border border-white/[0.08]
```

Line 207 — exploring section:
```tsx
// FROM:
border border-dashed border-white/[0.08]
// TO (keep as-is, already matches default tier):
border border-dashed border-white/[0.08]
```

- [ ] **Step 3: Standardize CraftSection borders**

In `src/components/sections/CraftSection.tsx`:

Line 194 — inactive skill tile border (inline style):
```tsx
// FROM:
border: "1px solid rgba(255,255,255,0.05)"
// TO:
border: "1px solid rgba(255,255,255,0.08)"
```

Line 469 — languages strip border (inline style):
```tsx
// FROM:
border: "1px solid rgba(255,255,255,0.04)"
// TO:
border: "1px solid rgba(255,255,255,0.08)"
```

- [ ] **Step 4: Standardize ConnectSection borders**

In `src/components/sections/ConnectSection.tsx`:

Line 97 — social links:
```tsx
// FROM:
border border-white/[0.12]
// TO:
border border-white/[0.15]
```

Hover state on same element:
```tsx
// FROM:
hover:border-white/20
// TO:
hover:border-white/25
```

- [ ] **Step 5: Visual check all sections**

Scroll through the full page. Borders should now look consistent — subtle but visible at default state, clearly brighter on hover.

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/WorkSection.tsx src/components/sections/AISection.tsx src/components/sections/CraftSection.tsx src/components/sections/ConnectSection.tsx
git commit -m "fix: standardize border opacities to 3 consistent tiers"
```

---

### Task 4: Replace Hardcoded Hex Colors with CSS Variables

Replace direct `#c4956a`, `#7ee787`, `#58a6ff`, `#d2a8ff` usage with `hsl(var(--primary))`, etc.

**Files:**
- Modify: `src/components/sections/HeroSection.tsx` (lines 48, 80-94)
- Modify: `src/components/sections/WorkSection.tsx` (lines 30, 61, 99)
- Modify: `src/components/sections/AISection.tsx` (lines 45, 62, 134-141)
- Modify: `src/components/sections/CraftSection.tsx` (lines 91)
- Modify: `src/components/sections/ConnectSection.tsx` (lines 58, 76, 110)

- [ ] **Step 1: Replace colors in HeroSection**

In `src/components/sections/HeroSection.tsx`:

Line 48 — role label:
```tsx
// FROM:
text-[#7ee787]
// TO:
text-[hsl(var(--secondary))]
```

Lines 80-94 — stats pills. Replace each hardcoded color:
```tsx
// #c4956a → hsl(var(--primary))
// #7ee787 → hsl(var(--secondary))
// #58a6ff → hsl(var(--accent))
// #d2a8ff → hsl(var(--accent-purple))
```

Also replace the hero background gradient (line 37):
```tsx
// FROM:
from-[#0a0a0a] via-[#12101a] to-[#0d1117]
// TO:
from-[hsl(var(--background))] via-[#12101a] to-[#0d1117]
```

Note: Keep the `via` and `to` colors hardcoded — they're intentional variations of the background that don't map to existing variables.

- [ ] **Step 2: Replace colors in WorkSection**

In `src/components/sections/WorkSection.tsx`:

Line 30 — section number:
```tsx
// FROM:
text-[#c4956a]
// TO:
text-[hsl(var(--primary))]
```

Line 61 — featured dot:
```tsx
// FROM:
backgroundColor: "#7ee787"
// TO:
backgroundColor: "hsl(var(--secondary))"
```

Lines 99-163 — Problem/Craft/Impact accent bars. Replace:
```tsx
// #c4956a → hsl(var(--primary))
// #7ee787 → hsl(var(--secondary))
// #58a6ff → hsl(var(--accent))
```

- [ ] **Step 3: Replace colors in AISection**

In `src/components/sections/AISection.tsx`:

Line 45 — section number:
```tsx
// FROM:
text-[#c4956a]
// TO:
text-[hsl(var(--primary))]
```

Lines 134-141 — DraughtsAI card green references:
```tsx
// FROM:
border-[#7ee787]/[0.12]
bg-[#7ee787]/[0.03]
text-[#7ee787]
// TO:
border-[hsl(var(--secondary))]/[0.12]
bg-[hsl(var(--secondary))]/[0.03]
text-[hsl(var(--secondary))]
```

- [ ] **Step 4: Replace colors in CraftSection**

In `src/components/sections/CraftSection.tsx`:

Line 91 — narrative header category label color:
```tsx
// FROM:
rgba(196,149,106,0.5)
// TO: keep as rgba since it's an inline style with custom opacity
```

Actually, for CraftSection inline styles using `rgba(126,231,135,...)` patterns — these use the raw RGB for fine-grained opacity. Keep inline styles using rgba as-is since CSS variable composition with arbitrary opacity in inline styles is verbose. Only replace Tailwind class-based colors.

- [ ] **Step 5: Replace colors in ConnectSection**

In `src/components/sections/ConnectSection.tsx`:

Line 58 — section number:
```tsx
// FROM:
text-[#c4956a]
// TO:
text-[hsl(var(--primary))]
```

Line 76 — italic accent words:
```tsx
// FROM:
text-[#c4956a]
// TO:
text-[hsl(var(--primary))]
```

Line 110 — resume link:
```tsx
// FROM:
text-[#c4956a]
// TO:
text-[hsl(var(--primary))]
```

- [ ] **Step 6: Visual regression check**

All colors should look identical. The hex values and CSS variables resolve to the same HSL colors.

- [ ] **Step 7: Commit**

```bash
git add src/components/sections/HeroSection.tsx src/components/sections/WorkSection.tsx src/components/sections/AISection.tsx src/components/sections/CraftSection.tsx src/components/sections/ConnectSection.tsx
git commit -m "refactor: replace hardcoded hex colors with CSS variable references"
```

---

### Task 5: Remove Simple Analytics Badge

~~Already done — badge removed from `ConnectSection.tsx` (lines 116-123 deleted).~~

---

### Task 6: Equalize Compact Project Card Heights

The work section compact cards have uneven heights due to varying tech pill counts.

**Files:**
- Modify: `src/components/sections/WorkSection.tsx` (line 177, compact card container)

- [ ] **Step 1: Add min-height and flex structure to compact cards**

In `src/components/sections/WorkSection.tsx`, on the compact card wrapper (line ~177):

```tsx
// FROM:
className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4 ... flex-1"
// TO:
className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4 ... flex-1 min-h-[180px] flex flex-col"
```

Then ensure the tech pills area is pushed to the bottom with `mt-auto` on the pills container:
```tsx
// The tech pills flex wrapper should have:
className="flex flex-wrap gap-1.5 mt-auto"
```

- [ ] **Step 2: Cap visible tech pills at 3 consistently**

Find the tech pill rendering logic in the compact cards. Ensure the slice is consistent:
```tsx
// Ensure all compact cards show max 3 pills + overflow count:
{project.technologies.slice(0, 3).map(...)}
{project.technologies.length > 3 && (
  <span className="text-[9px] opacity-30">+{project.technologies.length - 3}</span>
)}
```

- [ ] **Step 3: Visual check**

All 5 compact cards should now have equal height. Tech pills should align at the bottom consistently.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/WorkSection.tsx
git commit -m "fix: equalize compact project card heights and cap tech pills at 3"
```

---

### Task 7: Fix Section Number Consistency (Connect Section)

Section 05 uses centered layout with decorative lines and `opacity-40`, while sections 01-04 use left-aligned gold with `opacity-60`.

**Files:**
- Modify: `src/components/sections/ConnectSection.tsx` (lines 58-64)

- [ ] **Step 1: Update section number opacity**

In `src/components/sections/ConnectSection.tsx`, find the section number element (line ~58-64):

```tsx
// FROM:
opacity-40
// TO:
opacity-60
```

This matches sections 01-04. The centered layout is fine since Connect is a different context (footer/CTA), but the opacity should match.

- [ ] **Step 2: Visual check**

The "05" should now have the same visual weight as "01"-"04".

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ConnectSection.tsx
git commit -m "fix: match Connect section number opacity to other sections"
```

---

### Task 8: Accessibility — Fix Low-Contrast Text

Several text elements use opacity values that fail WCAG AA (4.5:1 contrast ratio). On the `#0a0a0a` background with `#e8e4df` foreground, anything below ~`opacity-40` fails.

**Files:**
- Modify: `src/components/sections/HeroSection.tsx` (scroll indicator, line 99-109)
- Modify: `src/components/sections/CraftSection.tsx` (sub-labels at opacity-20)
- Modify: `src/components/sections/ConnectSection.tsx` (subtitle opacity)

- [ ] **Step 1: Fix Hero scroll indicator contrast**

In `src/components/sections/HeroSection.tsx`, line ~103:
```tsx
// FROM:
opacity-30
// TO:
opacity-40
```

This is decorative but still contains readable text ("SCROLL TO EXPLORE"), so it needs minimum contrast.

- [ ] **Step 2: Fix CraftSection sub-label contrast**

In `src/components/sections/CraftSection.tsx`, find the narrative header sub-labels (the lines under "User empathy", "Ship fast", etc.) at `opacity-20`:
```tsx
// FROM:
opacity: 0.2
// TO:
opacity: 0.35
```

- [ ] **Step 3: Add aria-hidden to decorative overlays**

In `src/app/[locale]/page.tsx`, the film-grain and dot-grid overlays should already be non-interactive (`pointer-events: none` in CSS). Verify they also have `aria-hidden="true"`:

```tsx
<div className="film-grain" aria-hidden="true" />
<div className="dot-grid" aria-hidden="true" />
```

- [ ] **Step 4: Visual check**

Low-contrast text should be slightly more visible but still subtle. The aesthetic intent is preserved.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/HeroSection.tsx src/components/sections/CraftSection.tsx src/app/[locale]/page.tsx
git commit -m "fix: improve text contrast for WCAG AA compliance"
```

---

### Task 9: Polish — Resume Link Visual Weight

The resume download link is an important CTA but uses a dashed underline with low opacity. Give it slightly more presence.

**Files:**
- Modify: `src/components/sections/ConnectSection.tsx` (line ~110)

- [ ] **Step 1: Improve resume link styling**

In `src/components/sections/ConnectSection.tsx`, find the resume download link:

```tsx
// FROM:
className="... opacity-60 ..."
// with dashed border-bottom

// TO:
className="... opacity-70 hover:opacity-100 ..."
// Change border from dashed to solid, thinner:
// border-bottom: 1px solid currentColor (via border-b)
```

Replace the dashed underline approach with:
```tsx
<a className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[1px] uppercase text-[hsl(var(--primary))] opacity-70 hover:opacity-100 transition-opacity border-b border-[hsl(var(--primary))]/30 hover:border-[hsl(var(--primary))]/60 pb-0.5">
  ↓ Download Resume (PDF)
</a>
```

- [ ] **Step 2: Visual check**

The link should feel clickable and intentional — not hidden.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ConnectSection.tsx
git commit -m "fix: improve resume download link visibility"
```

---

### Task 10: Final Visual QA & Build Verification

**Files:**
- None modified — verification only

- [ ] **Step 1: Run production build**

```bash
bun run build
```

Expected: Clean build with no errors or warnings.

- [ ] **Step 2: Run lint**

```bash
bun run lint
```

Expected: No new lint errors.

- [ ] **Step 3: Full visual walkthrough**

Open `http://localhost:3000` and check:
- [ ] Hero section loads cleanly with correct colors
- [ ] Timeline spacing feels right
- [ ] Work section cards are uniform height
- [ ] Craft section borders are visible and consistent
- [ ] AI section has no dead zone below it
- [ ] Connect section is proportional (not full viewport)
- [ ] Simple Analytics badge is a subtle text link
- [ ] Resume link is visible and clickable
- [ ] No jarring opacity jumps between sections
- [ ] Scroll through all 4 locales (en, nl, it, ro) to check nothing broke

- [ ] **Step 4: Commit any final tweaks**

If visual QA reveals minor spacing adjustments needed, fix and commit with:
```bash
git commit -m "fix: final visual polish adjustments"
```
