# Favicon Rebrand Design

## Problem

The current favicon is a light-background circle with dark "AB" initials — designed for the old light theme. It clashes with the new dark cinematic palette (dark backgrounds, gold/green/blue accents, editorial serif + monospace typography).

## Chosen Design

**Italic serif "ab" monogram with subtle gold border on dark background.**

### Visual Specification

- **Background**: `#0d1117` (site `--background` color), `rx="6"` rounded corners
- **Text**: Lowercase italic "ab" in Georgia/serif (`font-display`), `font-size="16"` in 32px viewBox, `font-weight="300"`, color `#c4956a` (brand primary/gold)
- **Border**: 1px stroke at `#c4956a` with 25% opacity (`stroke-opacity="0.25"`), inset by 1px, `rx="5"` rounded corners
- **Format**: SVG-based favicon with PNG fallbacks generated for all required sizes

### Design Rationale

- Gold italic serif matches the site's editorial tone (`font-display` italic headings throughout)
- Lowercase "ab" mirrors the casual, personal brand of "alexei.bostan" in the header
- Subtle gold border provides definition in browser tabs without being heavy — echoes the site's `--border-subtle` pattern
- Dark background ensures the favicon blends with dark browser UIs and doesn't create a jarring light square

## Files to Create/Update

### SVG Source (new)
- `public/favicon.svg` — scalable vector favicon, referenced via `<link rel="icon" type="image/svg+xml">`

### PNG Rasters (replace existing)
All generated from the SVG at appropriate sizes:
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/favicon.ico` (contains 16x16 and 32x32)
- `public/apple-touch-icon.png` (180x180)
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`

### Metadata Updates
- `public/site.webmanifest` — update `theme_color` to `#0d1117`, `background_color` to `#0d1117`
- `src/app/[locale]/layout.tsx` — add `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` for modern browsers

## Implementation Approach

Since we can't run image conversion tools in this environment, the approach is:

1. **Create `public/favicon.svg`** — the canonical source of truth, used directly by modern browsers
2. **Update `site.webmanifest`** — fix theme/background colors to match dark brand
3. **Update layout.tsx** — add SVG favicon link tag (modern browsers prefer SVG over ICO)
4. **PNG generation** — use an external tool (e.g., Inkscape CLI, sharp, or an online converter) to generate PNG rasters from the SVG. Alternatively, create simplified SVGs at each target size and convert.

Note: The existing `.ico` and `.png` files will remain as fallbacks until PNGs are regenerated. Modern browsers will prefer the SVG.

## Verification

1. Build succeeds (`bun run build`)
2. SVG favicon renders correctly in Chrome, Firefox, Safari tabs
3. Favicon appears with gold "ab" on dark background at all sizes
4. `site.webmanifest` theme color matches site
