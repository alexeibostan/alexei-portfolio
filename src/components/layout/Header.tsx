"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Linkedin, Menu, X, Github, Globe } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Get current path without locale
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  
  // Function to switch language
  const switchLanguage = (newLocale: string) => {
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="text-2xl font-bold text-[#325080]">
              Alexei Bostan
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href={`/${locale}`}
              className="text-gray-600 hover:text-[#325080] hover:underline px-3 py-2 text-sm font-medium"
            >
              {t('home')}
            </Link>
            <Link
              href={`/${locale}/projects`}
              className="text-gray-600 hover:text-[#325080] hover:underline px-3 py-2 text-sm font-medium"
            >
              {t('projects')}
            </Link>
            <Link
              href={`/${locale}/skills`}
              className="text-gray-600 hover:text-[#325080] hover:underline px-3 py-2 text-sm font-medium"
            >
              {t('skills')}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-gray-600 hover:text-[#325080] hover:underline px-3 py-2 text-sm font-medium"
            >
              {t('about')}
            </Link>
          </nav>

          {/* Language Switcher & Social Media Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="text-gray-500 hover:text-[#325080] transition-colors flex items-center space-x-1">
                <Globe size={20} />
                <span className="text-sm uppercase">{locale}</span>
              </button>
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href={switchLanguage('en')}
                  className={`block px-3 py-2 text-sm hover:bg-gray-100 ${locale === 'en' ? 'bg-gray-50 font-medium' : ''}`}
                >
                  English
                </Link>
                <Link
                  href={switchLanguage('nl')}
                  className={`block px-3 py-2 text-sm hover:bg-gray-100 ${locale === 'nl' ? 'bg-gray-50 font-medium' : ''}`}
                >
                  Nederlands
                </Link>
              </div>
            </div>
            
            <a
              href="https://www.instagram.com/alexandre.lord1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#E1306C] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/alexei-bostan-6706b6a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0077B5] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/alexeibostan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href={`/${locale}`}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#325080] hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              {t('home')}
            </Link>
            <Link
              href={`/${locale}/projects`}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#325080] hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              {t('projects')}
            </Link>
            <Link
              href={`/${locale}/skills`}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#325080] hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              {t('skills')}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#325080] hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              {t('about')}
            </Link>
          </div>
          
          {/* Mobile Language Switcher */}
          <div className="px-5 py-3 border-t border-gray-200">
            <div className="flex justify-center space-x-4 mb-3">
              <Link
                href={switchLanguage('en')}
                className={`px-3 py-1 text-sm rounded ${locale === 'en' ? 'bg-[#325080] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={toggleMobileMenu}
              >
                English
              </Link>
              <Link
                href={switchLanguage('nl')}
                className={`px-3 py-1 text-sm rounded ${locale === 'nl' ? 'bg-[#325080] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={toggleMobileMenu}
              >
                Nederlands
              </Link>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/alexandre.lord1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#E1306C]"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/alexei-bostan-6706b6a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0077B5]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/alexeibostan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
