import { getTranslations, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Script from "next/script";
import { generateSEOMetadata, generatePersonSchema, generateWebsiteSchema, type SEOConfig } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import Body from '@/app/[locale]/Body';

async function getSEOConfig(locale: string): Promise<SEOConfig> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexeibostan.com';
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    title: t('title'),
    description: t('description'),
    url: currentUrl,
    locale: locale === 'en' ? 'en_US' : locale === 'nl' ? 'nl_NL' : locale === 'it' ? 'it_IT' : 'ro_RO',
    siteName: t('siteName'),
    authorName: t('authorName'),
    authorJobTitle: t('authorJobTitle'),
    twitterHandle: '@alexeibostan12',
    keywords: t('keywords').split(', '),
    ogImage: '/og-image.png',
    twitterImage: '/og-image.png',
  };
}

export async function generateLocaleMetadata(locale: string) {
  return generateSEOMetadata(await getSEOConfig(locale));
}

// Full HTML document for a locale: <html>, structured data, i18n provider
export default async function LocaleDocument({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const messages = await getMessages({ locale });
  const seoConfig = await getSEOConfig(locale);

  // Generate structured data
  const personSchema = generatePersonSchema(seoConfig);
  const websiteSchema = generateWebsiteSchema(seoConfig);

  return (
    <html lang={locale}>
      {/* Rendered from App Router layouts/pages, where a plain <head> is correct */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <StructuredData data={[personSchema, websiteSchema]} />
      </head>
      <body className="antialiased bg-background text-foreground font-sans" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Body>{children}</Body>
          <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
