import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n';
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

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  return <Body>{children}</Body>;
}