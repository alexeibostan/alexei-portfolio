"use client";

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales, defaultLocale } from '@/i18n';

const LANGUAGE_DETECTED_KEY = 'language-detected';

export default function BrowserLanguageDetector() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  useEffect(() => {
    // Only run on client side and if we haven't already detected language
    if (typeof window === 'undefined') return;
    
    const hasDetectedLanguage = localStorage.getItem(LANGUAGE_DETECTED_KEY);
    if (hasDetectedLanguage) return;

    // Get browser language preference
    const browserLanguage = navigator.language.split('-')[0]; // Get primary language code (e.g., 'en' from 'en-US')
    
    // Check if browser language is supported
    const supportedLanguage = (locales as readonly string[]).includes(browserLanguage) 
      ? browserLanguage 
      : defaultLocale;

    // Extract current locale from pathname
    const localePattern = new RegExp(`^/(${locales.join('|')})`);
    const pathnameLocale = pathname.match(localePattern)?.[1] || defaultLocale;

    // Only redirect if:
    // 1. Browser language is different from current locale
    // 2. Browser language is supported
    // 3. Current locale is the default (meaning user hasn't explicitly chosen a language)
    if (supportedLanguage !== pathnameLocale && pathnameLocale === defaultLocale && supportedLanguage !== defaultLocale) {
      // Get the path without locale
      const pathWithoutLocale = pathname.replace(localePattern, '') || '/';
      const newPath = `/${supportedLanguage}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
      
      // Mark that we've detected the language to prevent future redirects
      localStorage.setItem(LANGUAGE_DETECTED_KEY, 'true');
      
      // Redirect to the browser's preferred language
      router.replace(newPath);
    } else {
      // Mark that we've detected the language even if no redirect was needed
      localStorage.setItem(LANGUAGE_DETECTED_KEY, 'true');
    }
  }, [pathname, currentLocale, router]);

  return null; // This component doesn't render anything
}
