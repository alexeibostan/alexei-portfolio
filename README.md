# Alexei Bostan Portfolio

A personal portfolio website built with Next.js, showcasing my experience as a Senior Software Engineer.

## Getting Started

First, run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Internationalization**: next-intl (English & Dutch)
- **Package Manager**: Bun
- **Deployment**: GitHub Pages

## Features

- 🌍 **Multilingual Support**: Available in English and Dutch
- 📱 **Responsive Design**: Mobile-first approach
- 🎨 **Modern UI**: Clean design with Tailwind CSS
- 🚀 **Static Export**: Optimized for GitHub Pages deployment
- 🔗 **Dynamic Navigation**: Language-aware routing

## Internationalization

The portfolio supports two languages:
- **English (en)**: Default language
- **Dutch (nl)**: Secondary language

### Language Switching
- Globe icon in the header with dropdown menu
- Preserves current page when switching languages
- Available on both desktop and mobile layouts

### URL Structure
- `/en/` for English content
- `/nl/` for Dutch content
- Automatic redirection from root to default language

### Translation Coverage
- Complete navigation menu translation
- All page content and headings
- Buttons, links, and call-to-action text
- Meta data (page titles and descriptions)

## Deployment

This portfolio is configured for GitHub Pages deployment:

### Manual Deployment

1. Build the application:
   ```bash
   bun run deploy
   ```

2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

### Automatic Deployment

The repository uses GitHub Actions for automatic deployment:

1. When you push to the `main` branch, the site will automatically build and deploy
2. GitHub Actions workflow is defined in `.github/workflows/deploy.yml` and configured to use Bun
3. The site will be available at [https://alexeibostan.github.io/alexei-portfolio/](https://alexeibostan.github.io/alexei-portfolio/)

## Configuration

- The `next.config.js` file contains configuration for GitHub Pages, including basePath and assetPrefix
- A `.nojekyll` file is included to prevent GitHub Pages from processing the site with Jekyll