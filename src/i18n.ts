import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'nl', 'it', 'ro'] as const;
export const defaultLocale = 'en' as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Fallback to default locale if undefined
  const resolvedLocale = locale || defaultLocale;
  
  // Ensure the locale is valid
  if (!locales.includes(resolvedLocale as Locale)) {
    throw new Error(`Invalid locale: ${resolvedLocale}`);
  }

  return {
    locale: resolvedLocale,
    messages: (await import(`@/messages/${resolvedLocale}.json`)).default
  };
});