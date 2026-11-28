"use client";

import { useTranslations } from "next-intl";
import { ExternalLink, Layers, Radio, Trophy } from "lucide-react";
import { TechPill } from "@/components/ui/TechPill";
import { analytics } from "@/lib/analytics";

const URL = "https://draughtsai.com/";
const STACK = ["Bun", "Hono", "React 19", "TanStack Start", "Drizzle", "OpenRouter"];

/** The one project visitors can open and use, so it sits at the top of Work. */
export function DraughtsAICard() {
  const tAi = useTranslations("ai");
  const tWork = useTranslations("work");

  const features = [
    { icon: Radio, label: tAi("featureStreaming"), desc: tAi("featureStreamingDesc") },
    { icon: Trophy, label: tAi("featureLeaderboard"), desc: tAi("featureLeaderboardDesc") },
    { icon: Layers, label: tAi("featureArena"), desc: tAi("featureArenaDesc") },
  ];

  return (
    <article
      id="draughtsai"
      aria-labelledby="draughtsai-heading"
      className="mb-6 rounded-xl border border-[hsl(var(--secondary))]/[0.15] bg-[hsl(var(--secondary))]/[0.03] p-6"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#7ee787]" aria-hidden="true" />
            <span className="font-mono-brand text-xs uppercase tracking-[1px] text-[hsl(var(--secondary))]">
              {tWork("liveProject")}
            </span>
          </div>
          <h3 id="draughtsai-heading" className="font-display text-2xl font-light leading-snug text-[#e8e4df]">
            DraughtsAI
          </h3>
          <p className="text-[14px] leading-relaxed text-[#e8e4df]/70">{tAi("draughtsAiDescription")}</p>
          <div className="flex flex-wrap gap-1.5">
            {STACK.map((tech) => (
              <TechPill key={tech} name={tech} size="md" />
            ))}
          </div>
          <a
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.outboundClick("draughtsai", URL)}
            className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-lg bg-[#e8e4df] px-5 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-white"
          >
            {tWork("tryIt")}
            <ExternalLink size={16} aria-hidden="true" />
            <span className="sr-only">(draughtsai.com)</span>
          </a>
        </div>

        <ul className="flex flex-col justify-center gap-4 md:border-l md:border-white/[0.08] md:pl-6">
          {features.map((f) => (
            <li key={f.label} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary/10">
                <f.icon className="h-4 w-4 text-[hsl(var(--secondary))]" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-[14px] font-semibold text-[#e8e4df]">{f.label}</span>
                <span className="text-[13px] text-[#e8e4df]/60">{f.desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
