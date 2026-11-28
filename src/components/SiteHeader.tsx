"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { locales } from "@/i18n";
import { cn } from "@/lib/utils";

// Same key BrowserLanguageDetector uses: once a visitor picks a language
// themselves, never auto-redirect them away from it.
const LANGUAGE_DETECTED_KEY = "language-detected";

const NAV_ITEMS = [
  { href: "#experience", key: "experience" },
  { href: "#work", key: "work" },
  { href: "#craft", key: "craft" },
  { href: "#ai", key: "ai" },
  { href: "#connect", key: "connect" },
] as const;

function rememberLanguageChoice() {
  try {
    localStorage.setItem(LANGUAGE_DETECTED_KEY, "true");
  } catch {
    // Storage can be unavailable (private mode, blocked site data); the link still works.
  }
}

function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("navigation");
  const tLang = useTranslations("languages");
  const current = useLocale();
  const names: Record<string, string> = {
    en: tLang("english"),
    nl: tLang("dutch"),
    it: tLang("italian"),
    ro: tLang("romanian"),
  };

  return (
    <ul aria-label={t("language")} className={cn("flex items-center", className)}>
      {locales.map((locale) => {
        const isCurrent = locale === current;
        return (
          <li key={locale}>
            <Link
              href={`/${locale}/`}
              hrefLang={locale}
              lang={locale}
              aria-current={isCurrent ? "true" : undefined}
              aria-label={names[locale]}
              onClick={rememberLanguageChoice}
              className={cn(
                "flex h-11 min-w-11 items-center justify-center rounded-md px-2 font-mono-brand text-xs uppercase tracking-[1px] transition-colors",
                isCurrent
                  ? "text-[#e8e4df] underline decoration-[hsl(var(--secondary))] underline-offset-4"
                  : "text-white/60 hover:text-[#e8e4df]"
              )}
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader() {
  const t = useTranslations("navigation");
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass =
    "flex h-11 min-w-11 items-center justify-center rounded-md px-3 text-sm text-white/70 transition-colors hover:text-[#e8e4df] hover:bg-white/5";

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[#e8e4df] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#0a0a0a]"
      >
        {t("skipToContent")}
      </a>

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:px-8">
          <a
            href="#story"
            aria-label={t("home")}
            className="flex h-11 items-center font-display text-lg text-[#e8e4df]"
          >
            Alexei Bostan
          </a>

          {/* Desktop */}
          <nav aria-label={t("primary")} className="hidden items-center gap-1 md:flex">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <a href={item.href} className={linkClass}>
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mx-2 h-5 w-px bg-white/10" aria-hidden="true" />
            <LanguageSwitcher />
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            className="flex h-11 w-11 items-center justify-center rounded-md text-[#e8e4df] hover:bg-white/5 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile panel */}
        <nav
          id="mobile-nav"
          aria-label={t("primary")}
          hidden={!open}
          className="border-t border-white/[0.06] px-4 pb-4 md:hidden"
        >
          <ul className="flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <a href={item.href} onClick={() => setOpen(false)} className={linkClass}>
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher className="gap-1 border-t border-white/[0.06] pt-2" />
        </nav>
      </header>
    </>
  );
}
