"use client";

import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-[#325080] text-white py-8">
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Alexei Bostan</h3>
            <p className="mb-4">{t('footer.footerDescription')}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.navigationTitle')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="hover:underline">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/projects`} className="hover:underline">
                  {t('navigation.projects')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/skills`} className="hover:underline">
                  {t('navigation.skills')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="hover:underline">
                  {t('navigation.about')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.connectTitle')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/alexeibostan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                    <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.565 21.795 24 17.31 24 12C24 5.37 18.63 0 12 0Z" />
                  </svg>
                  {t('footer.github')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alexei-bostan-6706b6a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                    <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" />
                  </svg>
                  {t('footer.linkedin')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/alexandre.lord1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  {t('footer.instagram')}
                </a>
              </li>
              <li>
                <a
                  href="mailto:alexei.bostan@example.com"
                  className="hover:underline flex items-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
                  </svg>
                  {t('footer.email')}
                </a>
              </li>
              <li>
                <a
                  href="/Alexei-Bostan-Professional-Resume.pdf"
                  className="hover:underline flex items-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                    <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" />
                  </svg>
                  {t('footer.resume')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
