import { getTranslations, getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Script from "next/script";
import { locales } from '@/i18n';
import { generateSEOMetadata, generatePersonSchema, generateWebsiteSchema } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import Body from './Body';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexeibostan.com';
  const currentUrl = `${baseUrl}/${locale}`;

  return generateSEOMetadata({
    title: t('title'),
    description: t('description'),
    url: currentUrl,
    locale: locale === 'en' ? 'en_US' : locale === 'nl' ? 'nl_NL' : locale === 'it' ? 'it_IT' : 'ro_RO',
    siteName: t('siteName'),
    authorName: t('authorName'),
    authorJobTitle: t('authorJobTitle'),
    twitterHandle: '@alexeibostan12',
    keywords: t('keywords').split(', '),
    ogImage: '/profile.webp',
    twitterImage: '/profile.webp',
  });
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  // Get messages for this locale
  const messages = await getMessages({ locale });
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexeibostan.com';
  const currentUrl = `${baseUrl}/${locale}`;

  // Generate structured data
  const seoConfig = {
    title: t('title'),
    description: t('description'),
    url: currentUrl,
    locale: locale === 'en' ? 'en_US' : locale === 'nl' ? 'nl_NL' : locale === 'it' ? 'it_IT' : 'ro_RO',
    siteName: t('siteName'),
    authorName: t('authorName'),
    authorJobTitle: t('authorJobTitle'),
    twitterHandle: '@alexeibostan12',
    keywords: t('keywords').split(', '),
    ogImage: '/profile.webp',
    twitterImage: '/profile.webp',
  };

  const personSchema = generatePersonSchema(seoConfig);
  const websiteSchema = generateWebsiteSchema(seoConfig);

  return (
    <html lang={locale}>
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