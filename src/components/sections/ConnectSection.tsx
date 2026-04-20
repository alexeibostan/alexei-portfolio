"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const socialLinks = [
  {
    label: "Email",
    icon: Mail,
    href: "mailto:alexei.bostan7@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/alexei-bostan/",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/alexeibostan",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/alexandre.lord1/",
  },
];

function parseHeadlineWords(text: string): { text: string; gold: boolean }[] {
  const parts = text.split(/\{([^}]+)\}/g);
  const words: { text: string; gold: boolean }[] = [];
  parts.forEach((part, i) => {
    if (i % 2 === 1) {
      words.push({ text: part, gold: true });
    } else {
      part.split(/\s+/).filter(Boolean).forEach((word) => {
        words.push({ text: word, gold: false });
      });
    }
  });
  return words;
}

export function ConnectSection() {
  const t = useTranslations("connect");
  return (
    <footer>
      <section
        id="connect"
        className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-8 text-center bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#080808]"
      >
        {/* Section number */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-px bg-white/10" />
          <span className="font-mono-brand text-[11px] tracking-[2px] opacity-60">
            05
          </span>
          <div className="w-10 h-px bg-white/10" />
        </div>

        {/* Headline */}
        <h2 className="font-display text-3xl md:text-[32px] font-light max-w-[500px] leading-snug mb-5 flex flex-wrap justify-center gap-x-2">
          {parseHeadlineWords(t.raw("headline")).map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className={
                word.gold ? "text-[hsl(var(--primary))] italic" : ""
              }
            >
              {word.text}
            </motion.span>
          ))}
        </h2>

        {/* Subtitle */}
        <p className="text-sm opacity-60 max-w-[440px] leading-relaxed mb-10">
          {t("subtitle")}
        </p>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2 px-5 py-2.5 border border-white/[0.15] rounded-lg text-[13px] hover:bg-white/5 hover:border-white/25 hover:-translate-y-0.5 transition-all"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>

        {/* Resume download */}
        <div className="mt-5">
          <a
            href="/alexei-bostan-resume.pdf"
            download
            className="inline-flex items-center gap-2 font-mono-brand text-[11px] text-[hsl(var(--primary))] opacity-70 hover:opacity-100 transition-opacity border-b border-[hsl(var(--primary))]/30 hover:border-[hsl(var(--primary))]/60 pb-0.5 tracking-[1px]"
          >
            {"↓ " + t("downloadResume")}
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-12 text-[11px] opacity-50 font-mono-brand">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </section>
    </footer>
  );
}
