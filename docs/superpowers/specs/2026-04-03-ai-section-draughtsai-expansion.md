# AI Section — DraughtsAI Expansion

## Goal

Expand the "Building IN AI" column of the AI section to properly showcase DraughtsAI as a project built WITH AI APIs. Update the description, add feature highlights, fix tech pills, add a clickable link, and update "Currently Exploring" pills.

## Current State

The right column has a DraughtsAI card with a generic description ("AI-powered draughts analysis platform"), inaccurate tech pills (AI/ML, Game Analysis, React, Node.js), a non-clickable URL, and generic exploring pills (LLM APIs, Prompt Engineering, AI Agents).

## Changes

### 1. DraughtsAI Description

Replace the current description across all 4 locales with a blended description that covers both what it does and how it's built:

**EN:** "Two AI models face off in real-time draughts matches — with WebSocket streaming, live spectating, and model leaderboards powered by ELO ratings."

Translate equivalently for NL, IT, RO.

### 2. Feature Highlights (new)

Add 3 feature highlight rows inside the card, below the description and above the tech pills. Each row has a Lucide icon, a bold label, and a short description. Styled consistently with the tool cards in the left column (icon + text, subtle background).

| Icon (Lucide) | Label | Description |
|---|---|---|
| Radio | Real-time Streaming | WebSocket-powered live game spectating |
| Trophy | ELO Leaderboard | Model rankings tracked across matches |
| Layers | Multi-model Arena | Any LLM via OpenRouter API integration |

These labels and descriptions need i18n translations across all 4 locales.

### 3. Tech Pills (updated)

Replace current pills `["AI/ML", "Game Analysis", "React", "Node.js"]` with:
`["Bun", "Hono", "React 19", "TanStack Start", "Drizzle", "OpenRouter"]`

### 4. Clickable Link

Change the "draughtsai.com" subtitle from plain text to an anchor tag linking to `https://draughtsai.com/` with `target="_blank"` and `rel="noopener noreferrer"`. Add a subtle Lucide `ExternalLink` icon (12px) next to it.

### 5. Currently Exploring Pills (updated)

Replace `["LLM APIs", "Prompt Engineering", "AI Agents"]` with:
`["LLM APIs", "Structured Output", "Prompt Engineering"]`

Update in `src/data/aiTools.ts`.

## Files to Modify

- `src/components/sections/AISection.tsx` — feature highlights, clickable link, ExternalLink icon
- `src/data/aiTools.ts` — update `aiExploring` array
- `src/messages/en.json` — update description, add feature highlight translations
- `src/messages/nl.json` — same
- `src/messages/it.json` — same
- `src/messages/ro.json` — same

## Visual Style

Feature highlights use the same card pattern as the left column's tool cards: subtle green-tinted background (`bg-[#7ee787]/[0.04]`), green-tinted border (`border-[#7ee787]/[0.08]`), Lucide icon in a rounded container, bold label + muted description.
