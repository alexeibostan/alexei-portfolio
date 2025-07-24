import { getTranslations } from 'next-intl/server';
import Body from './Body';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default function LocaleLayout({ children, params }: Props) {
  return <Body>{children}</Body>;
}