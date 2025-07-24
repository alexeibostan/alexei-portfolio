import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'nl'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) notFound();

  let messages;
  try {
    if (locale === 'en') {
      messages = (await import('@/messages/en.json')).default;
    } else if (locale === 'nl') {
      messages = (await import('@/messages/nl.json')).default;
    }
  } catch (error) {
    notFound();
  }

  return {
    messages
  };
});