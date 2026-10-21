import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import LocaleDocument, { generateLocaleMetadata } from '@/components/LocaleDocument';

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
  return generateLocaleMetadata(locale);
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <LocaleDocument locale={locale}>{children}</LocaleDocument>;
}
