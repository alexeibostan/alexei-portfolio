"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TechPill } from "@/components/ui/TechPill";
import type { AITool } from "@/types";
import { Radio, Trophy, Layers, ExternalLink } from "lucide-react";

interface AISectionProps {
  aiTools: AITool[];
  aiExploring: string[];
}

const toolCardStyles: Record<string, { bg: string; border: string }> = {
  "Claude Code": {
    bg: "bg-[#d2a8ff]/[0.04]",
    border: "border border-[#d2a8ff]/[0.08]",
  },
  Cursor: {
    bg: "bg-[#58a6ff]/[0.04]",
    border: "border border-[#58a6ff]/[0.08]",
  },
  Codex: {
    bg: "bg-[#7ee787]/[0.04]",
    border: "border border-[#7ee787]/[0.08]",
  },
};

const toolIconBg: Record<string, string> = {
  "Claude Code": "rgba(210,168,255,0.1)",
  Cursor: "rgba(88,166,255,0.1)",
  Codex: "rgba(126,231,135,0.1)",
};

export function AISection({ aiTools, aiExploring }: AISectionProps) {
  const tSections = useTranslations("sections");
  const tAi = useTranslations("ai");
  return (
    <ScrollReveal>
      <section id="ai" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono-brand text-[11px] text-[#c4956a] opacity-60 tracking-[1px]">
              04
            </span>
            <h2 className="font-display text-2xl text-[#e8e4df] font-light">
              {tSections("ai")}
            </h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left Column — Building WITH AI */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
              {/* Column header */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#d2a8ff" }}
                />
                <span className="font-mono-brand text-[11px] text-[#d2a8ff] tracking-[1px]">
                  {tAi("buildingWith")}
                </span>
              </div>

              {/* Intro text */}
              <p className="text-[13px] opacity-50 leading-relaxed mb-5">
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
                        <span className="text-xs opacity-40 mt-0.5 text-[#e8e4df]">
                          {tool.description}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column — Building IN AI */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
              {/* Column header */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#7ee787" }}
                />
                <span className="font-mono-brand text-[11px] text-[#7ee787] tracking-[1px]">
                  {tAi("buildingIn")}
                </span>
              </div>

              {/* Intro text */}
              <p className="text-[13px] opacity-50 leading-relaxed mb-5">
                {tAi("buildingInIntro")}
              </p>

              {/* DraughtsAI featured card */}
              <div className="border border-[#7ee787]/[0.12] rounded-lg p-5 bg-[#7ee787]/[0.03]">
                {/* Top row */}
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-lg font-semibold text-[#e8e4df]">
                    DraughtsAI
                  </span>
                  <span
                    className="font-mono-brand text-[9px] text-[#7ee787] rounded-full px-2 py-0.5"
                    style={{
                      background: "rgba(126,231,135,0.1)",
                      border: "1px solid rgba(126,231,135,0.2)",
                    }}
                  >
                    {tAi("active")}
                  </span>
                </div>

                {/* Subtitle — clickable link (GREEN, visible) */}
                <a
                  href="https://draughtsai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#7ee787] opacity-70 mb-3 hover:opacity-100 transition-opacity"
                >
                  draughtsai.com
                  <ExternalLink className="w-[11px] h-[11px]" />
                </a>

                {/* Description */}
                <p className="text-xs opacity-50 leading-relaxed text-[#e8e4df] mb-4">
                  {tAi("draughtsAiDescription")}
                </p>

                {/* Feature highlights — flat list, NO card nesting */}
                <div className="flex flex-col gap-2.5 mb-4">
                  {[
                    { icon: Radio, label: tAi("featureStreaming"), desc: tAi("featureStreamingDesc") },
                    { icon: Trophy, label: tAi("featureLeaderboard"), desc: tAi("featureLeaderboardDesc") },
                    { icon: Layers, label: tAi("featureArena"), desc: tAi("featureArenaDesc") },
                  ].map((feature) => (
                    <div
                      key={feature.label}
                      className="flex items-center gap-2.5"
                    >
                      <div
                        className="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center"
                        style={{ background: "rgba(126,231,135,0.1)" }}
                      >
                        <feature.icon className="w-3 h-3 text-[#7ee787]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] font-semibold text-[#e8e4df]">
                          {feature.label}
                        </span>
                        <span className="text-[11px] opacity-40 text-[#e8e4df]">
                          {feature.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                  {["Bun", "Hono", "React 19", "TanStack Start", "Drizzle", "OpenRouter"].map(
                    (tech) => (
                      <TechPill key={tech} name={tech} />
                    )
                  )}
                </div>
              </div>

              {/* Currently Exploring subsection */}
              <div className="border border-dashed border-white/[0.08] rounded-lg p-3.5 mt-3.5">
                <span
                  className="font-mono-brand block mb-2.5"
                  style={{ fontSize: "9px", opacity: 0.35 }}
                >
                  {tAi("currentlyExploring")}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {aiExploring.map((item) => (
                    <span
                      key={item}
                      className="font-mono-brand rounded-full opacity-60 text-[#d2a8ff]"
                      style={{
                        fontSize: "9px",
                        padding: "3px 8px",
                        border: "1px dashed rgba(210,168,255,0.2)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
