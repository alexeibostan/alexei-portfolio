"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

export function HeroSection() {
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
    { label: t("stat1"), color: "#c4956a" },
    { label: t("stat2"), color: "#8b9fbe" },
    { label: t("stat3"), color: "#58a6ff" },
    { label: t("stat4"), color: "#7ee787" },
    { label: t("stat5"), color: "#d2a8ff" },
    { label: t("stat6"), color: "#c4956a" },
  ];

  return (
    <section
      id="story"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#12101a] to-[#0d1117]"
    >
      <motion.div
        style={{ y }}
        className="relative z-10 w-full max-w-4xl mx-auto px-8 py-24 flex flex-col gap-8"
      >
        {/* Role label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-mono-brand text-[11px] text-[hsl(var(--secondary))] opacity-70 tracking-[1px] uppercase"
        >
          {t("roleLabel")}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="font-display text-4xl md:text-[38px] font-light leading-[1.2] text-[#e8e4df]"
        >
          {parseHeadline(t.raw("headline"))}
        </motion.h1>

        {/* Payoff */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="font-display text-xl md:text-[22px] font-light italic opacity-60 text-[#e8e4df]"
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
                className="font-mono-brand text-[11px]"
                style={{ color: stat.color }}
              >
                {stat.label}
              </span>
              {i < stats.length - 1 && (
                <span className="font-mono-brand text-[11px] text-white/50">
                  ·
                </span>
              )}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-mono-brand text-[11px] text-white/50 tracking-[1px] uppercase">
          {t("scrollToExplore")}
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
