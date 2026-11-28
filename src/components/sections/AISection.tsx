"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { AITool } from "@/types";
import { ArrowUp } from "lucide-react";

interface AISectionProps {
  aiTools: AITool[];
}

const toolCardStyles: Record<string, { bg: string; border: string }> = {
  "Claude Code": {
    bg: "bg-[hsl(var(--accent-purple))]/[0.04]",
    border: "border border-[hsl(var(--accent-purple))]/[0.08]",
  },
  Cursor: {
    bg: "bg-[hsl(var(--accent))]/[0.04]",
    border: "border border-[hsl(var(--accent))]/[0.08]",
  },
  Codex: {
    bg: "bg-[hsl(var(--secondary))]/[0.04]",
    border: "border border-[hsl(var(--secondary))]/[0.08]",
  },
};

const toolIconBg: Record<string, string> = {
  "Claude Code": "rgba(210,168,255,0.1)",
  Cursor: "rgba(88,166,255,0.1)",
  Codex: "rgba(126,231,135,0.1)",
};

export function AISection({ aiTools }: AISectionProps) {
  const tSections = useTranslations("sections");
  const tAi = useTranslations("ai");
  return (
    <ScrollReveal>
      <section id="ai" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono-brand text-xs text-[hsl(var(--primary))] opacity-60 tracking-[1px]">
              04
            </span>
            <h2 className="font-display text-2xl text-[#e8e4df] font-light">
              {tSections("ai")}
            </h2>
            <div className="flex-1 h-px bg-white/[0.08]" />
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left Column — Building WITH AI */}
            <div>
              {/* Column header */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 bg-accent-purple"
                />
                <span className="font-mono-brand text-xs text-[hsl(var(--accent-purple))] tracking-[1px]">
                  {tAi("buildingWith")}
                </span>
              </div>

              {/* Intro text */}
              <p className="text-[13px] opacity-60 leading-relaxed mb-5">
                {tAi("buildingWithIntro")}
              </p>

              {/* Tool cards */}
              <div className="flex flex-col gap-3">
                {aiTools.map((tool) => {
                  const cardStyle = toolCardStyles[tool.name] ??
                    toolCardStyles["Codex"];
                  const iconBg = toolIconBg[tool.name] ?? "rgba(255,255,255,0.06)";

                  return (
                    <div
                      key={tool.name}
                      className={`flex items-center gap-3 p-3 rounded-lg ${cardStyle.bg} ${cardStyle.border}`}
                    >
                      {/* Icon */}
                      <div
                        className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden"
                        style={{ background: iconBg }}
                      >
                        <Image
                          src={tool.iconPath}
                          alt={tool.name}
                          width={32}
                          height={32}
                          className="rounded-lg"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-[#e8e4df]">
                          {tool.name}
                        </span>
                        <span className="text-[13px] opacity-60 mt-0.5 text-[#e8e4df]">
                          {tool.description}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Column — Building IN AI */}
            <div>
              {/* Column header */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 bg-secondary"
                />
                <span className="font-mono-brand text-xs text-[hsl(var(--secondary))] tracking-[1px]">
                  {tAi("buildingIn")}
                </span>
              </div>

              {/* Intro text */}
              <p className="text-[13px] opacity-60 leading-relaxed mb-5">
                {tAi("buildingInIntro")}
              </p>

              <a
                href="#draughtsai"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[hsl(var(--secondary))]/25 px-4 text-[13px] text-[hsl(var(--secondary))] transition-colors hover:bg-[hsl(var(--secondary))]/[0.06]"
              >
                <ArrowUp size={16} aria-hidden="true" />
                {tAi("seeInWork")}
              </a>
            </div>
          </div>

        </div>
      </section>
    </ScrollReveal>
  );
}
