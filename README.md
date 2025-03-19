# Alexei Bostan Portfolio

A personal portfolio website built with Next.js, showcasing my experience as a Senior Software Engineer.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Deployment

This portfolio is configured for GitHub Pages deployment:

### Manual Deployment

1. Build the application:
   ```bash
   npm run deploy
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
2. GitHub Actions workflow is defined in `.github/workflows/deploy.yml`
3. The site will be available at `https://[your-username].github.io/alexei-portfolio/`

## Configuration

- The `next.config.js` file contains configuration for GitHub Pages, including basePath and assetPrefix
- A `.nojekyll` file is included to prevent GitHub Pages from processing the site with Jekyll
