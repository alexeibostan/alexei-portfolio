"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const socialLinks = [
  {
    label: "Email",
    icon: Mail,
    href: "mailto:alexeibostan@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/alexeibostan/",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/alexeibostan",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/alexei.bostan/",
  },
];

const headlineWords = [
  { text: "Let's", gold: false },
  { text: "build", gold: false },
  { text: "something", gold: false },
  { text: "that", gold: false },
  { text: "matters", gold: true },
];

export function ConnectSection() {
  return (
    <footer>
      <section
        id="connect"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-8 text-center"
        style={{
          background:
            "linear-gradient(to bottom, #0a0a0a 0%, #0d0d0d 50%, #080808 100%)",
        }}
      >
        {/* Section number */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-px bg-white/10" />
          <span className="font-mono-brand text-[11px] tracking-[2px] opacity-40">
            05
          </span>
          <div className="w-10 h-px bg-white/10" />
        </div>

        {/* Headline */}
        <h2 className="font-display text-3xl md:text-[32px] font-light max-w-[500px] leading-snug mb-5 flex flex-wrap justify-center gap-x-2">
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className={
                word.gold ? "text-[#c4956a] italic" : ""
              }
            >
              {word.text}
            </motion.span>
          ))}
        </h2>

        {/* Subtitle */}
        <p className="text-sm opacity-45 max-w-[440px] leading-relaxed mb-10">
          I&apos;m always open to connecting with product managers, designers,
          and fellow engineers who believe the best technology is built with the
          user at its heart.
        </p>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2 px-5 py-2.5 border border-white/[0.12] rounded-lg text-[13px] hover:bg-white/5 hover:border-white/20 hover:-translate-y-0.5 transition-all"
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
            className="font-mono-brand text-[11px] text-[#c4956a] opacity-60 border-b border-dashed border-[#c4956a]/30 pb-0.5 tracking-[1px]"
          >
            ↓ Download Resume (PDF)
          </a>
        </div>

        {/* Simple Analytics badge */}
        <div className="mt-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://simpleanalyticsbadge.com/alexeibostan.com"
            alt="Simple Analytics"
          />
        </div>

        {/* Copyright */}
        <p className="mt-12 text-[11px] opacity-20 font-mono-brand">
          © {new Date().getFullYear()} Alexei Bostan · Built with Next.js
        </p>
      </section>
    </footer>
  );
}
