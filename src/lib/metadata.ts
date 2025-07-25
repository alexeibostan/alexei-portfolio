import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  url: string
  locale: string
  siteName: string
  authorName: string
  authorJobTitle: string
  authorCompany?: string
  twitterHandle?: string
  keywords?: string[]
  ogImage?: string
  twitterImage?: string
}

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    url,
    locale,
    siteName,
    authorName,
    authorJobTitle,
    authorCompany,
    twitterHandle,
    keywords,
    ogImage,
    twitterImage
  } = config

  // Construct full URLs for images
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexeibostan.com'
  const fullOgImage = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/profile.webp`
  const fullTwitterImage = twitterImage ? `${baseUrl}${twitterImage}` : fullOgImage

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    authors: [{ name: authorName }],
    creator: authorName,
    publisher: authorName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en`,
        nl: `${baseUrl}/nl`,
        it: `${baseUrl}/it`,
        ro: `${baseUrl}/ro`,
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url,
      title,
      description,
      siteName,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: `${authorName} - ${authorJobTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: twitterHandle,
      creator: twitterHandle,
      title,
      description,
      images: [fullTwitterImage],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      other: [
        { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }
}

export function generatePersonSchema(config: SEOConfig) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexeibostan.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.authorName,
    url: config.url,
    sameAs: [
      'https://github.com/alexeibostan',
      'https://www.linkedin.com/in/alexei-bostan',
      'https://www.instagram.com/alexei.bostan',
    ],
    jobTitle: config.authorJobTitle,
    ...(config.authorCompany && {
      worksFor: {
        '@type': 'Organization',
        name: config.authorCompany,
      },
    }),
    image: `${baseUrl}/profile.webp`,
    description: config.description,
  }
}

export function generateWebsiteSchema(config: SEOConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: config.siteName,
    url: config.url,
    description: config.description,
    author: {
      '@type': 'Person',
      name: config.authorName,
    },
    inLanguage: config.locale,
  }
}
