# SEO Implementation Guide

This portfolio website implements comprehensive SEO optimization following best practices for Next.js 14 app router applications.

## 🎯 Features Implemented

### 1. Meta Tags
- **Title Tags**: Unique, optimized titles (50-60 characters) for each page
- **Meta Descriptions**: Compelling descriptions (150-160 characters) for search snippets
- **Essential Meta Tags**: Charset, viewport, and robots directives
- **Keywords**: Relevant keywords for each page and locale

### 2. Open Graph Tags
Complete Open Graph implementation for rich social media previews:
- `og:title` - Page title for social sharing
- `og:description` - Page description for social sharing
- `og:url` - Canonical URL for the page
- `og:image` - High-quality image (1200x630px)
- `og:type` - Content type (website/article)
- `og:site_name` - Site name for branding
- `og:locale` - Language and region

### 3. Twitter Card Tags
Optimized Twitter Cards for better engagement:
- `twitter:card` - Large image card type
- `twitter:site` - Twitter handle
- `twitter:title` - Twitter-specific title
- `twitter:description` - Twitter-specific description
- `twitter:image` - Twitter-optimized image

### 4. Schema.org Structured Data (JSON-LD)
Rich structured data for search engines:
- **Person Schema**: Professional information, job title, social profiles
- **Website Schema**: Site information, author details, language
- **Automatic generation** per page and locale

### 5. International SEO
- **Multi-language support**: EN, NL, IT, RO
- **hreflang tags**: Proper language targeting
- **Locale-specific metadata**: Translated titles and descriptions
- **Canonical URLs**: Prevent duplicate content issues

### 6. Technical SEO
- **Sitemap.xml**: Auto-generated for all pages and locales
- **Robots.txt**: Search engine crawling directives  
- **Dynamic OG Images**: Generated images with page-specific content
- **Mobile-friendly**: Responsive viewport configuration

## 🛠 Setup Instructions

### 1. Environment Variables
Copy `.env.example` to `.env.local` and configure:

```bash
# Required: Your website's base URL
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional: Google Search Console verification
GOOGLE_SITE_VERIFICATION=your-verification-code

# Optional: Base path for subdirectory deployment
BASE_PATH=
```

### 2. Social Media Configuration
Update your social media handles in:
- `src/lib/metadata.ts` - Twitter handle
- `src/components/StructuredData.tsx` - Social media profiles
- Translation files - Update `sameAs` URLs in person schema

### 3. Custom Images
Replace default images in `/public/`:
- `profile.webp` - Your profile image (1200x630px recommended)
- Favicon files (already configured)

## 📊 Validation & Testing

### Automated Validation
Use the included SEO validation script:

```bash
# Install dependencies
npm install node-html-parser

# Test your local development server
node scripts/validate-seo.js http://localhost:3000/en

# Test production deployment
node scripts/validate-seo.js https://your-domain.com/en
```

### Manual Testing Tools
1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### SEO Checklist
- [ ] All pages have unique titles (50-60 chars)
- [ ] All pages have compelling descriptions (150-160 chars)
- [ ] Open Graph tags are present and valid
- [ ] Twitter Cards are configured properly
- [ ] Structured data validates without errors
- [ ] Images are optimized and include alt text
- [ ] Site loads fast (check Core Web Vitals)
- [ ] Mobile-friendly (responsive design)
- [ ] HTTPS enabled
- [ ] Sitemap submitted to Google Search Console

## 🎨 Customization

### Adding New Pages
When adding new pages:

1. **Add metadata generation**:
```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return generateSEOMetadata({
    title: t('pages.yourpage.title'),
    description: t('pages.yourpage.description'),
    // ... other config
  });
}
```

2. **Update translation files**:
```json
{
  "metadata": {
    "pages": {
      "yourpage": {
        "title": "Your Page Title",
        "description": "Your page description"
      }
    }
  }
}
```

3. **Update sitemap** in `src/app/sitemap.ts`:
```typescript
const pages = ['', '/about', '/projects', '/skills', '/yourpage']
```

### Custom Schema Types
For blog posts, products, or other content types, extend the schema generation:

```typescript
export function generateBlogPostSchema(config: SEOConfig & { 
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: config.title,
    description: config.description,
    author: {
      '@type': 'Person',
      name: config.authorName,
    },
    datePublished: config.datePublished,
    dateModified: config.dateModified,
  }
}
```

## 📈 Performance Impact

This SEO implementation adds minimal overhead:
- **Structured data**: ~2-3KB per page
- **Meta tags**: ~1-2KB per page
- **Dynamic OG images**: Generated on-demand, cached by Next.js
- **No runtime impact**: All metadata is generated at build time

## 🔧 Troubleshooting

### Common Issues

1. **Missing environment variables**:
   - Ensure `NEXT_PUBLIC_SITE_URL` is set
   - Check `.env.local` file exists and is properly formatted

2. **Invalid structured data**:
   - Use Google's Rich Results Test to validate
   - Check for JSON syntax errors in schema generation

3. **Social media previews not updating**:
   - Clear social media caches using their debugger tools
   - Ensure images are publicly accessible
   - Check image dimensions (OG: 1200x630, Twitter: 1200x600)

4. **Sitemap not found**:
   - Verify `src/app/sitemap.ts` exists
   - Check Next.js is generating sitemap at `/sitemap.xml`
   - Submit sitemap URL to Google Search Console

### Debug Mode
Enable debug logging by adding to your layout:

```typescript
if (process.env.NODE_ENV === 'development') {
  console.log('SEO Config:', seoConfig);
  console.log('Generated Schema:', [personSchema, websiteSchema]);
}
```

## 📚 Additional Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Schema.org Documentation](https://schema.org/)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

## 🤝 Contributing

When contributing to SEO improvements:
1. Test changes with the validation script
2. Verify social media previews work correctly
3. Check that structured data validates
4. Update this documentation for new features
