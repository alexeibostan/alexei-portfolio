# Internationalization Implementation

This document describes the internationalization (i18n) implementation added to Alexei's portfolio website.

## Overview

The portfolio now supports multiple languages using next-intl, with English as the default language and Dutch as the second language option. The implementation provides a complete translation of all user-facing content.

## Languages Supported

- **English (en)**: Default language
- **Dutch (nl)**: Second language option (chosen because Alexei is based in the Netherlands)

## Technical Implementation

### Core Technologies
- **next-intl**: Modern i18n library for Next.js App Router
- **Next.js 15**: App Router with dynamic routing
- **TypeScript**: Full type safety for translations

### File Structure
```
src/
├── i18n.ts                     # i18n configuration
├── middleware.ts                # Locale routing middleware
├── messages/
│   ├── en.json                 # English translations
│   └── nl.json                 # Dutch translations
└── app/
    ├── layout.tsx              # Root layout
    └── [locale]/               # Localized pages
        ├── layout.tsx          # Locale-specific layout
        ├── page.tsx            # Home page
        ├── about/page.tsx      # About page
        ├── projects/page.tsx   # Projects page
        └── skills/page.tsx     # Skills page
```

### Key Features

1. **Language Switcher**
   - Globe icon in header with dropdown menu
   - Available on both desktop and mobile
   - Preserves current page when switching languages
   - Smooth hover animations

2. **URL Structure**
   - `/en/` for English content
   - `/nl/` for Dutch content
   - Automatic redirection to default language

3. **Complete Translation Coverage**
   - Navigation menu
   - Page content and headings
   - Buttons and links
   - Footer content
   - Meta data (page titles and descriptions)

4. **Responsive Design**
   - Language switcher adapts to mobile layout
   - All translated content maintains responsive design

## Translation Scope

### Navigation
- Home → Home / Home
- Projects → Projects / Projecten
- Skills → Skills / Vaardigheden
- About → About / Over Mij

### Common Elements
- Contact Me → Contact Me / Neem Contact Op
- View All Projects → View All Projects / Bekijk Alle Projecten
- Visit Website → Visit Website / Bezoek Website

### Page-Specific Content
- **Home Page**: Hero section, featured projects, skills overview, company logos, CTA
- **About Page**: Professional profile, experience details, leadership section
- **Projects Page**: Project descriptions, role legend, company information
- **Skills Page**: Technical skills, language proficiencies, recognition section

## Development Notes

### Static Export Compatibility
The implementation is configured to work with Next.js static export (`output: 'export'`) for GitHub Pages deployment. The middleware handles locale routing while maintaining static generation compatibility.

### Translation Management
- All translations are stored in JSON files under `src/messages/`
- Organized by namespace (navigation, common, home, about, projects, skills, metadata, footer)
- Easy to maintain and extend with additional languages

### Type Safety
- Full TypeScript support with proper typing for translation keys
- Server-side translation functions for optimal performance
- Client-side hooks for interactive components

## Future Enhancements

Potential improvements for the i18n implementation:

1. **Additional Languages**: Easy to add more languages by creating new JSON files
2. **Dynamic Content**: Support for user-generated content translation
3. **Date/Number Formatting**: Locale-specific formatting
4. **RTL Support**: Right-to-left language support if needed

## Usage

### For Developers
```typescript
// Server components
const t = await getTranslations();
t('home.title')

// Client components  
const t = useTranslations();
t('navigation.home')
```

### For Content Updates
1. Edit the appropriate JSON file in `src/messages/`
2. Use the same key structure for both languages
3. Test both language versions

## Deployment

The i18n implementation is fully compatible with static export and GitHub Pages deployment. No additional server configuration is required.