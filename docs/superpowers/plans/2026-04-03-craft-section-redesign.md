# Craft Section Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the concentric rings Craft section with a narrative header (Why → How → What), empathy-framed skill tile grid, and persistent bottom detail strip.

**Architecture:** Full rewrite of `CraftSection.tsx` — remove `ConcentricRings`, `RingPill`, and all ring logic. Replace with three new sub-components: `NarrativeHeader`, `SkillTileGrid`, and `DetailStrip`. The component remains `"use client"` for skill selection state. Category mapping (5 old → 3 new) lives in the component. Translation keys updated across all 4 locales.

**Tech Stack:** React, Framer Motion, next-intl, Tailwind CSS

**Spec:** `docs/superpowers/specs/2026-04-03-craft-section-redesign.md`

---

### Task 1: Remove TDD from methodologies data

**Files:**
- Modify: `src/data/methodologies.ts`

- [ ] **Step 1: Remove TDD entry**

```typescript
import type { Methodology } from '@/types';

export const methodologies: Methodology[] = [
  { name: "Agile/Scrum" },
  { name: "CI/CD" },
  { name: "Code Review" },
  { name: "Mentoring" },
  { name: "Design Systems" },
];
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/alexeibostan/Documents/GitHub/alexei-portfolio && bun run build`
Expected: Build succeeds (methodologies is just data, no type changes)

- [ ] **Step 3: Commit**

```bash
git add src/data/methodologies.ts
git commit -m "chore: remove TDD from methodologies list"
```

---

### Task 2: Update i18n translation keys (all 4 locales)

**Files:**
- Modify: `src/messages/en.json`
- Modify: `src/messages/nl.json`
- Modify: `src/messages/it.json`
- Modify: `src/messages/ro.json`

- [ ] **Step 1: Update en.json craft section**

Replace the entire `"craft"` block with:

```json
"craft": {
  "skillsAndMethodologies": "Skills & Methodologies",
  "whyIBuild": "Why I build",
  "whyValue": "User empathy",
  "whySub": "Every decision starts here",
  "howIBuild": "How I build",
  "howValue": "Ship fast · Get feedback · Iterate",
  "howSub": "Agile · CI/CD · Design Systems · Code Review · Mentoring",
  "whatIBuildWith": "What I build with",
  "whatValue": "React · Next.js · TypeScript",
  "whatSub": "and 30 more",
  "whatUsersSee": "What users see",
  "whatMakesItWork": "What makes it work",
  "whatKeepsItSolid": "What keeps it solid",
  "frontendAndUI": "Frontend & UI",
  "backendAndData": "Backend & Data",
  "devopsAndTesting": "DevOps & Testing",
  "years": "years",
  "clickToExplore": "Click a skill to see how I've used it",
  "partOfToolkit": "Part of my {category} toolkit",
  "languagesISpeak": "Languages I Speak",
  "english": "English",
  "italian": "Italian",
  "romanian": "Romanian",
  "dutch": "Dutch",
  "fluent": "Fluent",
  "native": "Native",
  "conversational": "Conversational"
}
```

- [ ] **Step 2: Update nl.json craft section**

Replace `"craft"` block with Dutch translations:

```json
"craft": {
  "skillsAndMethodologies": "Vaardigheden & Methodologieën",
  "whyIBuild": "Waarom ik bouw",
  "whyValue": "Empathie voor gebruikers",
  "whySub": "Elke beslissing begint hier",
  "howIBuild": "Hoe ik bouw",
  "howValue": "Snel leveren · Feedback krijgen · Itereren",
  "howSub": "Agile · CI/CD · Design Systems · Code Review · Mentoring",
  "whatIBuildWith": "Waarmee ik bouw",
  "whatValue": "React · Next.js · TypeScript",
  "whatSub": "en nog 30 meer",
  "whatUsersSee": "Wat gebruikers zien",
  "whatMakesItWork": "Wat het laat werken",
  "whatKeepsItSolid": "Wat het solide houdt",
  "frontendAndUI": "Frontend & UI",
  "backendAndData": "Backend & Data",
  "devopsAndTesting": "DevOps & Testing",
  "years": "jaar",
  "clickToExplore": "Klik op een vaardigheid om te zien hoe ik het heb gebruikt",
  "partOfToolkit": "Onderdeel van mijn {category} toolkit",
  "languagesISpeak": "Talen die ik spreek",
  "english": "Engels",
  "italian": "Italiaans",
  "romanian": "Roemeens",
  "dutch": "Nederlands",
  "fluent": "Vloeiend",
  "native": "Moedertaal",
  "conversational": "Conversationeel"
}
```

- [ ] **Step 3: Update it.json craft section**

Replace `"craft"` block with Italian translations:

```json
"craft": {
  "skillsAndMethodologies": "Competenze & Metodologie",
  "whyIBuild": "Perché costruisco",
  "whyValue": "Empatia per l'utente",
  "whySub": "Ogni decisione parte da qui",
  "howIBuild": "Come costruisco",
  "howValue": "Spedisci veloce · Raccogli feedback · Itera",
  "howSub": "Agile · CI/CD · Design Systems · Code Review · Mentoring",
  "whatIBuildWith": "Con cosa costruisco",
  "whatValue": "React · Next.js · TypeScript",
  "whatSub": "e altri 30",
  "whatUsersSee": "Ciò che gli utenti vedono",
  "whatMakesItWork": "Ciò che lo fa funzionare",
  "whatKeepsItSolid": "Ciò che lo mantiene solido",
  "frontendAndUI": "Frontend & UI",
  "backendAndData": "Backend & Data",
  "devopsAndTesting": "DevOps & Testing",
  "years": "anni",
  "clickToExplore": "Clicca su una competenza per vedere come l'ho usata",
  "partOfToolkit": "Parte del mio toolkit {category}",
  "languagesISpeak": "Lingue che parlo",
  "english": "Inglese",
  "italian": "Italiano",
  "romanian": "Rumeno",
  "dutch": "Olandese",
  "fluent": "Fluente",
  "native": "Madrelingua",
  "conversational": "Conversazionale"
}
```

- [ ] **Step 4: Update ro.json craft section**

Replace `"craft"` block with Romanian translations:

```json
"craft": {
  "skillsAndMethodologies": "Competențe & Metodologii",
  "whyIBuild": "De ce construiesc",
  "whyValue": "Empatie pentru utilizator",
  "whySub": "Fiecare decizie începe aici",
  "howIBuild": "Cum construiesc",
  "howValue": "Livrează rapid · Primește feedback · Iterează",
  "howSub": "Agile · CI/CD · Design Systems · Code Review · Mentoring",
  "whatIBuildWith": "Cu ce construiesc",
  "whatValue": "React · Next.js · TypeScript",
  "whatSub": "și încă 30",
  "whatUsersSee": "Ce văd utilizatorii",
  "whatMakesItWork": "Ce îl face să funcționeze",
  "whatKeepsItSolid": "Ce îl menține solid",
  "frontendAndUI": "Frontend & UI",
  "backendAndData": "Backend & Data",
  "devopsAndTesting": "DevOps & Testing",
  "years": "ani",
  "clickToExplore": "Apasă pe o competență pentru a vedea cum am folosit-o",
  "partOfToolkit": "Parte din toolkit-ul meu {category}",
  "languagesISpeak": "Limbi vorbite",
  "english": "Engleză",
  "italian": "Italiană",
  "romanian": "Română",
  "dutch": "Olandeză",
  "fluent": "Fluent",
  "native": "Nativă",
  "conversational": "Conversațional"
}
```

- [ ] **Step 5: Verify build**

Run: `cd /Users/alexeibostan/Documents/GitHub/alexei-portfolio && bun run build`
Expected: Build fails because CraftSection still references old keys — that's expected, we'll fix it in Task 3.

- [ ] **Step 6: Commit**

```bash
git add src/messages/en.json src/messages/nl.json src/messages/it.json src/messages/ro.json
git commit -m "feat(i18n): update craft section translation keys for redesign"
```

---

### Task 3: Rewrite CraftSection component

**Files:**
- Modify: `src/components/sections/CraftSection.tsx` (full rewrite)

- [ ] **Step 1: Write the complete new CraftSection**

Replace the entire contents of `src/components/sections/CraftSection.tsx` with:

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Skill } from "@/types";

interface CraftSectionProps {
  skills: Skill[];
}

// Map old 5 categories → 3 empathy-framed groups
const CATEGORY_MAP: Record<string, string> = {
  Frontend: "frontendUI",
  Backend: "backendData",
  Libraries: "frontendUI",
  Tools: "devopsTesting",
  Testing: "devopsTesting",
};

const CATEGORY_ORDER = ["frontendUI", "backendData", "devopsTesting"] as const;

type MergedCategory = (typeof CATEGORY_ORDER)[number];

const CATEGORY_CONFIG: Record<
  MergedCategory,
  { color: string; empathyKey: string; traditionalKey: string }
> = {
  frontendUI: {
    color: "#7ee787",
    empathyKey: "whatUsersSee",
    traditionalKey: "frontendAndUI",
  },
  backendData: {
    color: "#58a6ff",
    empathyKey: "whatMakesItWork",
    traditionalKey: "backendAndData",
  },
  devopsTesting: {
    color: "#d2a8ff",
    empathyKey: "whatKeepsItSolid",
    traditionalKey: "devopsAndTesting",
  },
};

function groupSkills(skills: Skill[]): Record<MergedCategory, Skill[]> {
  const groups: Record<MergedCategory, Skill[]> = {
    frontendUI: [],
    backendData: [],
    devopsTesting: [],
  };
  for (const skill of skills) {
    const mapped = CATEGORY_MAP[skill.category] as MergedCategory | undefined;
    if (mapped) groups[mapped].push(skill);
  }
  return groups;
}

function NarrativeHeader({
  tCraft,
}: {
  tCraft: ReturnType<typeof useTranslations>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="relative mb-10 flex flex-col md:flex-row items-center gap-6 md:gap-0 rounded-[14px] px-8 py-7 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(196,149,106,0.04) 0%, rgba(126,231,135,0.02) 50%, rgba(88,166,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 10% 50%, rgba(196,149,106,0.06) 0%, transparent 50%), radial-gradient(ellipse at 90% 50%, rgba(88,166,255,0.04) 0%, transparent 50%)",
        }}
      />

      {/* Why */}
      <div className="flex-1 text-center relative z-10">
        <div
          className="font-mono-brand uppercase tracking-[3px] mb-2"
          style={{ fontSize: "7px", color: "rgba(196,149,106,0.5)" }}
        >
          {tCraft("whyIBuild")}
        </div>
        <div className="font-display italic text-[15px] text-[#e8e4df] font-light">
          {tCraft("whyValue")}
        </div>
        <div
          className="font-mono-brand mt-1.5"
          style={{ fontSize: "8px", color: "rgba(255,255,255,0.2)" }}
        >
          {tCraft("whySub")}
        </div>
      </div>

      {/* Arrow */}
      <div className="w-[60px] flex items-center justify-center flex-shrink-0 relative z-10 rotate-90 md:rotate-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e8e4df"
          strokeWidth="1.5"
          style={{ opacity: 0.15 }}
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>

      {/* How */}
      <div className="flex-1 text-center relative z-10">
        <div
          className="font-mono-brand uppercase tracking-[3px] mb-2"
          style={{ fontSize: "7px", color: "rgba(225,102,66,0.5)" }}
        >
          {tCraft("howIBuild")}
        </div>
        <div className="font-display italic text-[12px] text-[#e8e4df] font-light leading-relaxed">
          {tCraft("howValue")}
        </div>
        <div
          className="font-mono-brand mt-1.5"
          style={{ fontSize: "8px", color: "rgba(255,255,255,0.2)" }}
        >
          {tCraft("howSub")}
        </div>
      </div>

      {/* Arrow */}
      <div className="w-[60px] flex items-center justify-center flex-shrink-0 relative z-10 rotate-90 md:rotate-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e8e4df"
          strokeWidth="1.5"
          style={{ opacity: 0.15 }}
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>

      {/* What */}
      <div className="flex-1 text-center relative z-10">
        <div
          className="font-mono-brand uppercase tracking-[3px] mb-2"
          style={{ fontSize: "7px", color: "rgba(126,231,135,0.5)" }}
        >
          {tCraft("whatIBuildWith")}
        </div>
        <div className="font-display italic text-[15px] text-[#e8e4df] font-light">
          {tCraft("whatValue")}
        </div>
        <div
          className="font-mono-brand mt-1.5"
          style={{ fontSize: "8px", color: "rgba(255,255,255,0.2)" }}
        >
          {tCraft("whatSub")}
        </div>
      </div>
    </motion.div>
  );
}

function SkillTile({
  skill,
  color,
  isActive,
  onClick,
}: {
  skill: Skill;
  color: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg cursor-pointer text-center transition-all duration-200 hover:-translate-y-0.5"
      style={{
        padding: "10px 6px",
        background: isActive
          ? `${color}0A`
          : "rgba(255,255,255,0.015)",
        border: `1px solid ${isActive ? `${color}40` : "rgba(255,255,255,0.05)"}`,
        boxShadow: isActive
          ? `0 0 20px ${color}08`
          : "none",
      }}
    >
      <div
        className="font-mono-brand transition-colors duration-200"
        style={{
          fontSize: "10px",
          color: isActive ? "#e8e4df" : "rgba(255,255,255,0.45)",
        }}
      >
        {skill.name}
      </div>
      <div
        className="font-mono-brand mt-0.5"
        style={{
          fontSize: "8px",
          color: isActive ? `${color}66` : "rgba(255,255,255,0.13)",
        }}
      >
        {skill.years}
      </div>
    </button>
  );
}

function DetailStrip({
  skill,
  tCraft,
  categoryLabel,
}: {
  skill: Skill | null;
  tCraft: ReturnType<typeof useTranslations>;
  categoryLabel: string;
}) {
  if (!skill) {
    return (
      <div
        className="mt-6 rounded-xl flex items-center justify-center gap-2.5"
        style={{
          padding: "20px 28px",
          border: "1px dashed rgba(126,231,135,0.1)",
          background: "rgba(126,231,135,0.01)",
        }}
      >
        <span
          className="text-sm animate-bounce"
          style={{ color: "rgba(126,231,135,0.2)" }}
        >
          ↑
        </span>
        <span
          className="font-mono-brand"
          style={{ fontSize: "11px", color: "rgba(126,231,135,0.3)" }}
        >
          {tCraft("clickToExplore")}
        </span>
      </div>
    );
  }

  const contextLine =
    skill.contextLine ||
    tCraft("partOfToolkit", { category: categoryLabel });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2 }}
        className="mt-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative overflow-hidden"
        style={{
          padding: "20px 28px",
          border: "1px solid rgba(126,231,135,0.1)",
          background:
            "linear-gradient(135deg, rgba(126,231,135,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        }}
      >
        {/* Glow accent */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: -30,
            left: -30,
            width: 100,
            height: 100,
            background:
              "radial-gradient(circle, rgba(126,231,135,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Pill */}
        <span
          className="font-mono-brand rounded-full flex-shrink-0 relative z-10"
          style={{
            fontSize: "11px",
            padding: "5px 14px",
            background: "rgba(126,231,135,0.08)",
            color: "#7ee787",
            border: "1px solid rgba(126,231,135,0.15)",
          }}
        >
          {skill.name}
        </span>

        {/* Years + category */}
        <div className="flex-shrink-0 relative z-10" style={{ minWidth: 90 }}>
          <div
            className="font-light"
            style={{ fontSize: "22px", color: "#7ee787" }}
          >
            {skill.years} {tCraft("years")}
          </div>
          <div
            className="font-mono-brand uppercase tracking-[1px] mt-0.5"
            style={{ fontSize: "8px", color: "rgba(126,231,135,0.4)" }}
          >
            {categoryLabel}
          </div>
        </div>

        {/* Divider */}
        <div
          className="hidden sm:block flex-shrink-0"
          style={{
            width: 1,
            height: 36,
            background: "rgba(255,255,255,0.06)",
          }}
        />

        {/* Context line */}
        <p
          className="font-display italic leading-relaxed flex-1 relative z-10"
          style={{
            fontSize: "13px",
            color: skill.contextLine
              ? "rgba(232,228,223,0.5)"
              : "rgba(232,228,223,0.3)",
          }}
        >
          {contextLine}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

export function CraftSection({ skills }: CraftSectionProps) {
  const tSections = useTranslations("sections");
  const tCraft = useTranslations("craft");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const groupedSkills = groupSkills(skills);

  const languages = [
    { flag: "🇬🇧", name: tCraft("english"), proficiency: tCraft("fluent") },
    { flag: "🇮🇹", name: tCraft("italian"), proficiency: tCraft("fluent") },
    { flag: "🇷🇴", name: tCraft("romanian"), proficiency: tCraft("native") },
    {
      flag: "🇳🇱",
      name: tCraft("dutch"),
      proficiency: tCraft("conversational"),
    },
  ];

  // Find which merged category the selected skill belongs to
  const selectedCategory = selectedSkill
    ? (CATEGORY_MAP[selectedSkill.category] as MergedCategory)
    : null;
  const selectedCategoryLabel = selectedCategory
    ? tCraft(CATEGORY_CONFIG[selectedCategory].traditionalKey)
    : "";

  return (
    <ScrollReveal>
      <section id="craft" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono-brand text-[11px] text-[#c4956a] opacity-60 tracking-[1px]">
              03
            </span>
            <h2 className="font-display text-2xl text-[#e8e4df] font-light">
              {tSections("craft")}
            </h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span
              className="font-mono-brand text-right opacity-30"
              style={{ fontSize: "11px" }}
            >
              {tCraft("skillsAndMethodologies")}
            </span>
          </div>

          {/* Narrative header */}
          <NarrativeHeader tCraft={tCraft} />

          {/* Skill tile grids */}
          {CATEGORY_ORDER.map((catKey, groupIndex) => {
            const config = CATEGORY_CONFIG[catKey];
            const catSkills = groupedSkills[catKey];
            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className="mb-5"
              >
                {/* Category header */}
                <div className="flex items-baseline gap-2 mb-2.5">
                  <span
                    className="font-mono-brand"
                    style={{
                      fontSize: "8px",
                      letterSpacing: "2px",
                      color: config.color,
                      opacity: 0.55,
                    }}
                  >
                    {tCraft(config.empathyKey)}
                  </span>
                  <span
                    className="font-mono-brand uppercase"
                    style={{
                      fontSize: "7px",
                      letterSpacing: "2px",
                      color: "rgba(255,255,255,0.2)",
                    }}
                  >
                    {tCraft(config.traditionalKey)}
                  </span>
                </div>

                {/* Tile grid */}
                <div
                  className="grid gap-[5px]"
                  style={{
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(90px, 1fr))",
                  }}
                >
                  {catSkills.map((skill) => (
                    <SkillTile
                      key={skill.name}
                      skill={skill}
                      color={config.color}
                      isActive={selectedSkill?.name === skill.name}
                      onClick={() => setSelectedSkill(skill)}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Detail strip */}
          <DetailStrip
            skill={selectedSkill}
            tCraft={tCraft}
            categoryLabel={selectedCategoryLabel}
          />

          {/* Languages strip */}
          <div
            className="mt-4 flex items-center gap-4 flex-wrap rounded-[10px]"
            style={{
              padding: "14px 16px",
              background: "rgba(255,255,255,0.015)",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <span
              className="font-mono-brand uppercase"
              style={{
                fontSize: "7px",
                letterSpacing: "2px",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              {tCraft("languagesISpeak")}
            </span>
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5">
                <span style={{ fontSize: "13px" }}>{lang.flag}</span>
                <span
                  className="font-mono-brand"
                  style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}
                >
                  {lang.name}
                </span>
                <span
                  className="font-mono-brand"
                  style={{ fontSize: "7px", color: "rgba(255,255,255,0.15)" }}
                >
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
```

- [ ] **Step 2: Verify the file saved correctly**

Run: `head -5 /Users/alexeibostan/Documents/GitHub/alexei-portfolio/src/components/sections/CraftSection.tsx`
Expected: `"use client";` on line 1

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/CraftSection.tsx
git commit -m "feat: rewrite CraftSection with narrative header and tile grid"
```

---

### Task 4: Update page.tsx to remove methodologies prop

**Files:**
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Remove methodologies import and prop**

In `src/app/[locale]/page.tsx`, remove the import:

```typescript
import { methodologies } from '@/data/methodologies';
```

And change the CraftSection usage from:

```tsx
<CraftSection skills={skills} methodologies={methodologies} />
```

to:

```tsx
<CraftSection skills={skills} />
```

Also remove the `Methodology` type import if present.

- [ ] **Step 2: Verify build**

Run: `cd /Users/alexeibostan/Documents/GitHub/alexei-portfolio && bun run build`
Expected: Build succeeds. All pages render correctly.

- [ ] **Step 3: Commit**

```bash
git add src/app/[locale]/page.tsx
git commit -m "refactor: remove methodologies prop from CraftSection usage"
```

---

### Task 5: Visual verification and polish

**Files:**
- Possibly modify: `src/components/sections/CraftSection.tsx` (minor tweaks)

- [ ] **Step 1: Start dev server and verify**

Run: `cd /Users/alexeibostan/Documents/GitHub/alexei-portfolio && bun dev`

Open `http://localhost:3000/en/` and verify:
1. Section header shows "03 Craft" with "Skills & Methodologies"
2. Narrative header shows Why → How → What flow with arrows
3. All 33 skills visible in 3 categories with empathy + traditional labels
4. No tile is selected by default — detail strip shows dashed "Click a skill..." invitation
5. Clicking a skill activates the tile (green glow) and shows detail strip with pill, years, context
6. Skills without contextLine show "Part of my [category] toolkit" fallback
7. Languages strip at bottom with flags
8. Mobile: narrative header stacks vertically, tiles reflow, strip wraps

- [ ] **Step 2: Check all locales**

Visit `/nl/`, `/it/`, `/ro/` and verify translations render correctly in the narrative header, category labels, detail strip, and languages.

- [ ] **Step 3: Fix any spacing/styling issues found**

Apply any needed tweaks to `CraftSection.tsx`.

- [ ] **Step 4: Final build check**

Run: `cd /Users/alexeibostan/Documents/GitHub/alexei-portfolio && bun run build`
Expected: Clean build, no errors.

- [ ] **Step 5: Commit any polish changes**

```bash
git add -u
git commit -m "fix: polish craft section spacing and styling"
```

(Skip if no changes were needed.)
