"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { locales, defaultLocale } from '@/i18n';
import { useActiveSection } from '@/hooks/useActiveSection';
import { getPathWithoutLocale, constructLocalizedPath } from '@/lib/pathUtils';

const NAV_ITEMS = [
  { id: 'story', labelKey: 'story' },
  { id: 'work',  labelKey: 'work' },
  { id: 'craft', labelKey: 'craft' },
  { id: 'ai',    labelKey: 'ai' },
  { id: 'connect', labelKey: 'connect' },
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const activeSection = useActiveSection();

  // Extract locale from pathname
  const localePattern = new RegExp(`^/(${locales.join('|')})`);
  const locale = pathname.match(localePattern)?.[1] || defaultLocale;

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
  };

  const switchLanguage = (newLocale: string) => {
    const pathWithoutLocale = getPathWithoutLocale(pathname);
    return constructLocalizedPath(newLocale, pathWithoutLocale);
  };

  return (
    <>
      {/* Skip to content */}
      <a
        href="#story"
        className="skip-to-content"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Brand */}
            <span
              className="font-mono-brand text-white/50 tracking-[2px]"
              style={{ fontSize: '12px' }}
            >
              alexei.bostan
            </span>

            {/* Desktop Nav + Language Switcher */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {NAV_ITEMS.map(({ id, labelKey }) => {
                  const isActive = activeSection === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => scrollToSection(id)}
                      className={`font-mono-brand uppercase tracking-[3px] transition-all duration-200 hover:opacity-100 ${
                        isActive
                          ? 'text-[#c4956a] opacity-100'
                          : 'text-white opacity-35'
                      }`}
                      style={{ fontSize: '11px' }}
                    >
                      {t(labelKey)}
                    </button>
                  );
                })}
              </nav>

              {/* Language Switcher — compact bordered pill */}
              <div className="relative group">
                <button
                  className="font-mono-brand text-white/50 border border-white/20 rounded-full px-3 py-1 uppercase tracking-[2px] hover:border-white/40 hover:text-white/80 transition-all duration-200"
                  style={{ fontSize: '10px' }}
                >
                  {locale}
                </button>
                <div className="absolute right-0 top-full mt-2 min-w-[100px] bg-black/90 border border-white/10 rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {locales.map((loc) => (
                    <Link
                      key={loc}
                      href={switchLanguage(loc)}
                      className={`block px-3 py-2 font-mono-brand uppercase tracking-[2px] transition-colors hover:bg-white/10 ${
                        locale === loc
                          ? 'text-[#c4956a]'
                          : 'text-white/50'
                      }`}
                      style={{ fontSize: '10px' }}
                    >
                      {loc}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: hamburger */}
            <button
              type="button"
              className="md:hidden text-white/60 hover:text-white/90 transition-colors focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/5">
            <nav className="px-4 pt-4 pb-3 flex flex-col gap-1">
              {NAV_ITEMS.map(({ id, labelKey }) => {
                const isActive = activeSection === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollToSection(id)}
                    className={`font-mono-brand uppercase tracking-[3px] text-left py-3 border-b border-white/5 last:border-0 transition-all duration-200 ${
                      isActive
                        ? 'text-[#c4956a] opacity-100'
                        : 'text-white opacity-35'
                    }`}
                    style={{ fontSize: '11px' }}
                  >
                    {t(labelKey)}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Language Switcher */}
            <div className="px-4 py-3 border-t border-white/5 flex flex-wrap gap-2">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={switchLanguage(loc)}
                  onClick={closeMobileMenu}
                  className={`font-mono-brand uppercase tracking-[2px] px-3 py-1 rounded-full border transition-all duration-200 ${
                    locale === loc
                      ? 'border-[#c4956a] text-[#c4956a]'
                      : 'border-white/20 text-white/40 hover:border-white/40 hover:text-white/70'
                  }`}
                  style={{ fontSize: '10px' }}
                >
                  {loc}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
