"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Download, Mail } from "lucide-react";
import { analytics } from "@/lib/analytics";
import { CONTACT_EMAIL, RESUME_PATH } from "@/lib/contact";

export function HeroSection({ yearsOfExperience }: { yearsOfExperience: number }) {
  const t = useTranslations("hero");
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Parse headline to split on {word} markers
  const parseHeadline = (text: string) => {
    const parts = text.split(/\{([^}]+)\}/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <em key={i} className="text-[hsl(var(--primary))] italic not-italic">
          {part}
        </em>
      ) : (
        part
      )
    );
  };

  const stats = [
    { label: t("stat1", { years: yearsOfExperience }), color: "#c4956a" },
    { label: t("stat2"), color: "#8b9fbe" },
    { label: t("stat3"), color: "#58a6ff" },
    { label: t("stat4"), color: "#7ee787" },
    { label: t("stat5"), color: "#d2a8ff" },
    { label: t("stat6"), color: "#c4956a" },
  ];

  return (
    <section
      id="story"
      className="relative min-h-[calc(100svh-3.5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#12101a] to-[#0d1117]"
    >
      <motion.div
        style={{ y }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-24 flex flex-col gap-7"
      >
        {/* Name + role */}
        <div className="flex flex-col gap-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl font-light tracking-tight text-[#e8e4df]"
          >
            {t("name")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="font-mono-brand text-[13px] text-[hsl(var(--secondary))] opacity-80 tracking-[1px] uppercase"
          >
            {t("roleLabel")}
          </motion.p>
        </div>

        {/* Philosophy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="font-display text-2xl md:text-[30px] font-light leading-[1.3] text-[#e8e4df]/90 max-w-3xl"
        >
          {parseHeadline(t.raw("headline"))}
        </motion.p>

        {/* Payoff */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="font-display text-xl md:text-[22px] font-light italic opacity-60 text-[#e8e4df] -mt-3"
        >
          {t("payoff")}
        </motion.p>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-x-2 gap-y-1"
        >
          {stats.map((stat, i) => (
            <span key={stat.label} className="flex items-center gap-x-2">
              <span
                className="font-mono-brand text-xs"
                style={{ color: stat.color }}
              >
                {stat.label}
              </span>
              {i < stats.length - 1 && (
                <span className="font-mono-brand text-xs text-white/50">
                  ·
                </span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Calls to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3 mt-4"
        >
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            onClick={() => analytics.socialClick("email")}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#e8e4df] px-5 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-white"
          >
            <Mail size={16} aria-hidden="true" />
            {t("ctaEmail")}
          </a>
          <a
            href={RESUME_PATH}
            download
            onClick={() => analytics.resumeDownload()}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/20 px-5 text-sm text-[#e8e4df] transition-colors hover:border-white/40 hover:bg-white/5"
          >
            <Download size={16} aria-hidden="true" />
            {t("ctaResume")}
          </a>
        </motion.div>

        {/* What I'm open to */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7, ease: "easeOut" }}
          className="-mt-2 flex items-center gap-2 text-[13px] text-[#e8e4df]/70"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#7ee787]" aria-hidden="true" />
          {t("status")}
        </motion.p>
      </motion.div>
    </section>
  );
}
