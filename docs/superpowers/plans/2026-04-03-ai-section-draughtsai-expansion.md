# AI Section DraughtsAI Expansion — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the "Building IN AI" column to properly showcase DraughtsAI with accurate description, feature highlights, real tech stack, and a clickable link.

**Architecture:** Update the AISection component to render 3 feature highlight rows inside the DraughtsAI card, add an external link with icon, update tech pills, and update translations across all 4 locales. No new files needed — only modifications to existing ones.

**Tech Stack:** Next.js, React, Tailwind CSS, next-intl, Lucide React

---

## File Map

- **Modify:** `src/data/aiTools.ts` — update `aiExploring` array
- **Modify:** `src/components/sections/AISection.tsx` — feature highlights, clickable link, updated tech pills
- **Modify:** `src/messages/en.json` — update description, add feature highlight translations
- **Modify:** `src/messages/nl.json` — same
- **Modify:** `src/messages/it.json` — same
- **Modify:** `src/messages/ro.json` — same

---

### Task 1: Update data and translations

**Files:**
- Modify: `src/data/aiTools.ts`
- Modify: `src/messages/en.json`
- Modify: `src/messages/nl.json`
- Modify: `src/messages/it.json`
- Modify: `src/messages/ro.json`

- [ ] **Step 1: Update `aiExploring` in `src/data/aiTools.ts`**

Replace the `aiExploring` array:

```typescript
export const aiExploring: string[] = [
  "LLM APIs",
  "Structured Output",
  "Prompt Engineering",
];
```

- [ ] **Step 2: Update English translations in `src/messages/en.json`**

Replace the `"ai"` object with:

```json
"ai": {
  "sectionIntro": "I don't just use AI — I build with it, build for it, and think about what it means for the people on the other side of the screen.",
  "buildingWith": "Building WITH AI",
  "buildingWithIntro": "AI tools are part of my daily engineering workflow. Not as a crutch — as a multiplier.",
  "buildingIn": "Building IN AI",
  "buildingInIntro": "Actively building products where AI is the core experience, not a feature.",
  "currentlyExploring": "Currently Exploring",
  "active": "Active",
  "draughtsAiDescription": "Two AI models face off in real-time draughts matches — with WebSocket streaming, live spectating, and model leaderboards powered by ELO ratings.",
  "featureStreaming": "Real-time Streaming",
  "featureStreamingDesc": "WebSocket-powered live game spectating",
  "featureLeaderboard": "ELO Leaderboard",
  "featureLeaderboardDesc": "Model rankings tracked across matches",
  "featureArena": "Multi-model Arena",
  "featureArenaDesc": "Any LLM via OpenRouter API integration"
}
```

- [ ] **Step 3: Update Dutch translations in `src/messages/nl.json`**

Replace the `"ai"` object with:

```json
"ai": {
  "sectionIntro": "Ik gebruik niet alleen AI — ik bouw ermee, bouw ervoor, en denk na over wat het betekent voor de mensen aan de andere kant van het scherm.",
  "buildingWith": "Bouwen MET AI",
  "buildingWithIntro": "AI-tools maken deel uit van mijn dagelijkse workflow. Niet als een kruk — als een versterker.",
  "buildingIn": "Bouwen IN AI",
  "buildingInIntro": "Actief producten bouwen waar AI de kernervaring is, niet een functie.",
  "currentlyExploring": "Momenteel Aan Het Verkennen",
  "active": "Actief",
  "draughtsAiDescription": "Twee AI-modellen nemen het tegen elkaar op in realtime dampartijen — met WebSocket-streaming, live meekijken en modelranglijsten op basis van ELO-ratings.",
  "featureStreaming": "Realtime Streaming",
  "featureStreamingDesc": "WebSocket-gestuurde live spelweergave",
  "featureLeaderboard": "ELO-ranglijst",
  "featureLeaderboardDesc": "Modelrankings bijgehouden per wedstrijd",
  "featureArena": "Multi-model Arena",
  "featureArenaDesc": "Elk LLM via OpenRouter API-integratie"
}
```

- [ ] **Step 4: Update Italian translations in `src/messages/it.json`**

Replace the `"ai"` object with:

```json
"ai": {
  "sectionIntro": "Non uso solo l'AI — ci costruisco, costruisco per essa, e penso a cosa significa per le persone dall'altra parte dello schermo.",
  "buildingWith": "Costruire CON l'AI",
  "buildingWithIntro": "Gli strumenti AI fanno parte del mio flusso di lavoro quotidiano. Non come una stampella — come un moltiplicatore.",
  "buildingIn": "Costruire NELL'AI",
  "buildingInIntro": "Costruisco attivamente prodotti dove l'AI è l'esperienza principale, non una funzionalità.",
  "currentlyExploring": "Attualmente Esplorando",
  "active": "Attivo",
  "draughtsAiDescription": "Due modelli AI si sfidano in partite di dama in tempo reale — con streaming WebSocket, spettatori dal vivo e classifiche dei modelli basate su punteggi ELO.",
  "featureStreaming": "Streaming in Tempo Reale",
  "featureStreamingDesc": "Spettacolo di gioco dal vivo via WebSocket",
  "featureLeaderboard": "Classifica ELO",
  "featureLeaderboardDesc": "Ranking dei modelli aggiornato partita dopo partita",
  "featureArena": "Arena Multi-modello",
  "featureArenaDesc": "Qualsiasi LLM tramite integrazione API OpenRouter"
}
```

- [ ] **Step 5: Update Romanian translations in `src/messages/ro.json`**

Replace the `"ai"` object with:

```json
"ai": {
  "sectionIntro": "Nu doar folosesc AI — construiesc cu el, construiesc pentru el și mă gândesc la ce înseamnă pentru oamenii de cealaltă parte a ecranului.",
  "buildingWith": "Construind CU AI",
  "buildingWithIntro": "Instrumentele AI fac parte din fluxul meu zilnic de lucru. Nu ca o cârjă — ca un multiplicator.",
  "buildingIn": "Construind ÎN AI",
  "buildingInIntro": "Construiesc activ produse unde AI-ul este experiența principală, nu o funcționalitate.",
  "currentlyExploring": "Explorând În Prezent",
  "active": "Activ",
  "draughtsAiDescription": "Două modele AI se înfruntă în partide de dame în timp real — cu streaming WebSocket, spectatori live și clasamente ale modelelor bazate pe ratinguri ELO.",
  "featureStreaming": "Streaming în Timp Real",
  "featureStreamingDesc": "Spectacol de joc live prin WebSocket",
  "featureLeaderboard": "Clasament ELO",
  "featureLeaderboardDesc": "Rankingul modelelor urmărit de la meci la meci",
  "featureArena": "Arenă Multi-model",
  "featureArenaDesc": "Orice LLM prin integrare API OpenRouter"
}
```

- [ ] **Step 6: Commit**

```bash
git add src/data/aiTools.ts src/messages/en.json src/messages/nl.json src/messages/it.json src/messages/ro.json
git commit -m "feat(i18n): update DraughtsAI description and add feature highlight translations"
```

---

### Task 2: Update AISection component

**Files:**
- Modify: `src/components/sections/AISection.tsx`

- [ ] **Step 1: Add Lucide icon imports**

At the top of `AISection.tsx`, add after the existing imports:

```typescript
import { Radio, Trophy, Layers, ExternalLink } from "lucide-react";
```

- [ ] **Step 2: Replace the DraughtsAI card JSX**

Replace the entire DraughtsAI featured card block (lines 137-173) with the updated version that includes:
- Clickable link with ExternalLink icon instead of plain text URL
- Feature highlights section (3 rows with icons)
- Updated tech pills

```tsx
{/* DraughtsAI featured card */}
<div className="border border-[#7ee787]/[0.12] rounded-lg p-5 bg-[#7ee787]/[0.03]">
  {/* Top row */}
  <div className="flex items-center justify-between gap-2 mb-1">
    <span className="text-lg font-semibold text-[#e8e4df]">
      DraughtsAI
    </span>
    <span
      className="font-mono-brand text-[9px] text-[#7ee787] rounded-full px-2 py-0.5"
      style={{
        background: "rgba(126,231,135,0.1)",
        border: "1px solid rgba(126,231,135,0.2)",
      }}
    >
      {tAi("active")}
    </span>
  </div>

  {/* Subtitle — clickable link */}
  <a
    href="https://draughtsai.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-xs opacity-40 text-[#e8e4df] mb-3 hover:opacity-60 transition-opacity"
  >
    draughtsai.com
    <ExternalLink className="w-[11px] h-[11px]" />
  </a>

  {/* Description */}
  <p className="text-xs opacity-50 leading-relaxed text-[#e8e4df] mb-4">
    {tAi("draughtsAiDescription")}
  </p>

  {/* Feature highlights */}
  <div className="flex flex-col gap-2 mb-4">
    {[
      { icon: Radio, label: tAi("featureStreaming"), desc: tAi("featureStreamingDesc") },
      { icon: Trophy, label: tAi("featureLeaderboard"), desc: tAi("featureLeaderboardDesc") },
      { icon: Layers, label: tAi("featureArena"), desc: tAi("featureArenaDesc") },
    ].map((feature) => (
      <div
        key={feature.label}
        className="flex items-center gap-2.5 p-2 rounded-md bg-[#7ee787]/[0.04] border border-[#7ee787]/[0.08]"
      >
        <div
          className="w-7 h-7 rounded-md flex-shrink-0 flex items-center justify-center"
          style={{ background: "rgba(126,231,135,0.1)" }}
        >
          <feature.icon className="w-3.5 h-3.5 text-[#7ee787]" />
        </div>
        <div className="flex flex-col">
          <span className="text-[12px] font-semibold text-[#e8e4df]">
            {feature.label}
          </span>
          <span className="text-[11px] opacity-40 text-[#e8e4df]">
            {feature.desc}
          </span>
        </div>
      </div>
    ))}
  </div>

  {/* Tech pills */}
  <div className="flex flex-wrap gap-1.5">
    {["Bun", "Hono", "React 19", "TanStack Start", "Drizzle", "OpenRouter"].map(
      (tech) => (
        <TechPill key={tech} name={tech} />
      )
    )}
  </div>
</div>
```

- [ ] **Step 3: Run build to verify**

```bash
bun run build
```

Expected: Build completes without errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/AISection.tsx
git commit -m "feat: expand DraughtsAI card with feature highlights and clickable link"
```

---

### Task 3: Visual verification

- [ ] **Step 1: Start dev server and verify**

```bash
bun dev
```

Check all 4 locales at:
- `http://localhost:3000/en/#ai`
- `http://localhost:3000/nl/#ai`
- `http://localhost:3000/it/#ai`
- `http://localhost:3000/ro/#ai`

Verify:
- DraughtsAI description is updated
- 3 feature highlight rows render with correct icons (Radio, Trophy, Layers)
- draughtsai.com link is clickable and opens in new tab
- Tech pills show: Bun, Hono, React 19, TanStack Start, Drizzle, OpenRouter
- "Currently Exploring" shows: LLM APIs, Structured Output, Prompt Engineering
- All translations render correctly per locale
