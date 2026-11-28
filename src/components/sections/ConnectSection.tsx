"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, Linkedin, Github, Copy, Check } from "lucide-react";
import { analytics, type SocialNetwork } from "@/lib/analytics";
import { CONTACT_EMAIL, RESUME_PATH } from "@/lib/contact";

const socialLinks: {
  label: string;
  icon: typeof Mail;
  href: string;
  network: SocialNetwork;
}[] = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/alexei-bostan/",
    network: "linkedin",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/alexeibostan",
    network: "github",
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

// The address is the mailto link itself, shown as text so it can also be copied
// by visitors without a mail client set up.
function EmailCopy() {
  const t = useTranslations("connect");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      analytics.emailCopy();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the address is still selectable text.
    }
  };

  return (
    <div className="mb-6 flex max-w-full items-center gap-1 rounded-lg border border-white/[0.15] bg-white/[0.02] pl-4">
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        onClick={() => analytics.socialClick("email")}
        className="flex min-h-11 items-center truncate font-mono-brand text-[14px] text-[#e8e4df] underline-offset-4 hover:underline"
      >
        <Mail size={16} aria-hidden="true" className="mr-2 shrink-0 text-white/60" />
        {CONTACT_EMAIL}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={t("copyEmail")}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-r-lg text-white/60 transition-colors hover:bg-white/5 hover:text-[#e8e4df]"
      >
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      </button>
      <span role="status" className="sr-only">{copied ? t("copied") : ""}</span>
    </div>
  );
}

export function ConnectSection() {
  const t = useTranslations("connect");
  return (
    <section
      id="connect"
      aria-labelledby="connect-heading"
      className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-8 text-center bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#080808]"
    >
      {/* Section number */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-px bg-white/10" />
        <span className="font-mono-brand text-xs tracking-[2px] opacity-60">
          05
        </span>
        <div className="w-10 h-px bg-white/10" />
      </div>

      {/* Headline */}
      <h2 id="connect-heading" className="font-display text-3xl md:text-[32px] font-light max-w-[500px] leading-snug mb-5 flex flex-wrap justify-center gap-x-2">
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

      <EmailCopy />

      {/* Social links */}
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map(({ label, icon: Icon, href, network }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.socialClick(network)}
            className="flex min-h-11 items-center gap-2 px-5 py-2.5 border border-white/[0.15] rounded-lg text-[13px] hover:bg-white/5 hover:border-white/25 hover:-translate-y-0.5 transition-all"
          >
            <Icon size={16} aria-hidden="true" />
            {label}
          </a>
        ))}
      </div>

      {/* Resume download */}
      <div className="mt-5">
        <a
          href={RESUME_PATH}
          download
          onClick={() => analytics.resumeDownload()}
          className="inline-flex min-h-11 items-center gap-2 font-mono-brand text-[13px] text-[hsl(var(--primary))] opacity-80 hover:opacity-100 transition-opacity underline decoration-[hsl(var(--primary))]/40 hover:decoration-[hsl(var(--primary))] underline-offset-4 tracking-[1px]"
        >
          {"↓ " + t("downloadResume")}
        </a>
      </div>
    </section>
  );
}
