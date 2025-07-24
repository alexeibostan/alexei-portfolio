"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { locales, defaultLocale } from '@/i18n';
import { getPathWithoutLocale, constructLocalizedPath } from '@/lib/pathUtils';

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile';
  onLanguageChange?: () => void;
}

export default function LanguageSwitcher({ variant = 'desktop', onLanguageChange }: LanguageSwitcherProps) {
  const hookLocale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('languages');

  // Extract locale from pathname as fallback (same logic as Header)
  const localePattern = new RegExp(`^/(${locales.join('|')})`);
  const pathnameLocale = pathname.match(localePattern)?.[1] || defaultLocale;
  
  // Use pathname locale if it differs from hook locale (more reliable for client-side navigation)
  const locale = pathnameLocale;

  // Function to switch language for static generation
  const switchLanguage = (newLocale: string) => {
    const pathWithoutLocale = getPathWithoutLocale(pathname);
    const newPath = constructLocalizedPath(newLocale, pathWithoutLocale);
    
    return newPath;
  };

  if (variant === 'mobile') {
    return (
      <div className="flex justify-center flex-wrap gap-2 mb-3">
        <Link
          href={switchLanguage('en')}
          className={`px-3 py-1 text-sm rounded ${locale === 'en' ? 'bg-[#325080] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          onClick={onLanguageChange}
        >
          {t('english')}
        </Link>
        <Link
          href={switchLanguage('nl')}
          className={`px-3 py-1 text-sm rounded ${locale === 'nl' ? 'bg-[#325080] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          onClick={onLanguageChange}
        >
          {t('dutch')}
        </Link>
        <Link
          href={switchLanguage('it')}
          className={`px-3 py-1 text-sm rounded ${locale === 'it' ? 'bg-[#325080] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          onClick={onLanguageChange}
        >
          {t('italian')}
        </Link>
        <Link
          href={switchLanguage('ro')}
          className={`px-3 py-1 text-sm rounded ${locale === 'ro' ? 'bg-[#325080] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          onClick={onLanguageChange}
        >
          {t('romanian')}
        </Link>
      </div>
    );
  }

  // Desktop variant
  return (
    <div className="relative group">
      <button className="text-gray-500 hover:text-[#325080] transition-colors flex items-center space-x-1">
        <Globe size={20} />
        <span className="text-sm uppercase">{locale}</span>
      </button>
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <Link
          href={switchLanguage('en')}
          className={`block px-3 py-2 text-sm hover:bg-gray-100 ${locale === 'en' ? 'bg-gray-50 font-medium' : ''}`}
        >
          {t('english')}
        </Link>
        <Link
          href={switchLanguage('nl')}
          className={`block px-3 py-2 text-sm hover:bg-gray-100 ${locale === 'nl' ? 'bg-gray-50 font-medium' : ''}`}
        >
          {t('dutch')}
        </Link>
        <Link
          href={switchLanguage('it')}
          className={`block px-3 py-2 text-sm hover:bg-gray-100 ${locale === 'it' ? 'bg-gray-50 font-medium' : ''}`}
        >
          {t('italian')}
        </Link>
        <Link
          href={switchLanguage('ro')}
          className={`block px-3 py-2 text-sm hover:bg-gray-100 ${locale === 'ro' ? 'bg-gray-50 font-medium' : ''}`}
        >
          {t('romanian')}
        </Link>
      </div>
    </div>
  );
}
