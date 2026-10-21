import { setRequestLocale } from 'next-intl/server';
import { defaultLocale } from '@/i18n';
import LocaleDocument, { generateLocaleMetadata } from '@/components/LocaleDocument';
import HomeContent from '@/components/HomeContent';

// The root path "/" serves the default-locale page as static HTML (no JS
// redirect), so crawlers and AI agents get the full content. Its canonical
// URL points at /en, so search engines don't treat it as duplicate content.
export async function generateMetadata() {
  return generateLocaleMetadata(defaultLocale);
}

export default function RootPage() {
  setRequestLocale(defaultLocale);

  return (
    <LocaleDocument locale={defaultLocale}>
      <HomeContent locale={defaultLocale} />
    </LocaleDocument>
  );
}
