import { getTranslations, getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { locales } from '@/i18n';
import Body from './Body';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

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

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  // Get messages for this locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${montserrat.variable}`}>
      <body className="antialiased bg-background text-foreground font-sans" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Body>{children}</Body>
          <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}