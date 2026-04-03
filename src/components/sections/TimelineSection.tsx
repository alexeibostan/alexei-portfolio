"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { JobEntry } from "@/types";

interface TimelineSectionProps {
  journey: JobEntry[];
}

// Color palette cycling through nodes, last always green
const NODE_COLORS = [
  "#c4956a", // gold
  "#8b9fbe", // blue-gray
  "#d2a8ff", // purple
  "#58a6ff", // blue
  "#58a6ff", // blue
  "#7ee787", // green (last / current)
];

function getNodeColor(index: number, total: number): string {
  if (index === total - 1) return "#7ee787";
  return NODE_COLORS[index % (NODE_COLORS.length - 1)];
}

function extractStartYear(period: string): string {
  // Match 4-digit year at start of period string
  const match = period.match(/\b(\d{4})\b/);
  return match ? match[1] : period;
}

function isParallelRole(company: string): boolean {
  return (
    company === "Bostan Software Developments" ||
    company === "Bostan Software"
  );
}

export function TimelineSection({
  journey,
}: TimelineSectionProps) {
  const t = useTranslations("sections");
  const total = journey.length;

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-6 mb-16"
        >
          <span className="font-mono-brand text-[11px] text-[hsl(var(--primary))] opacity-60 tracking-[1px]">
            01
          </span>
          <h2 className="font-display text-2xl font-light text-[#e8e4df]">
            {t("myJourney")}
          </h2>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop: horizontal connector line — hidden on mobile */}
          <div
            className="hidden md:block absolute left-0 right-0 h-px top-5 z-0"
            style={{
              background:
                "linear-gradient(to right, #c4956a, #8b9fbe, #d2a8ff, #58a6ff, #58a6ff, #7ee787)",
            }}
          />

          {/* Mobile: vertical connector line — shown only on mobile */}
          <div
            className="block md:hidden absolute left-[4px] top-0 bottom-0 w-px z-0"
            style={{
              background:
                "linear-gradient(to bottom, #c4956a, #8b9fbe, #d2a8ff, #58a6ff, #58a6ff, #7ee787)",
            }}
          />

          {/* Nodes */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between relative z-10">
            {journey.map((entry, i) => {
              const color = getNodeColor(i, total);
              const isLast = i === total - 1;
              const isParallel = isParallelRole(entry.company);
              const isOngoing = isLast || (isParallel && entry.period.toLowerCase().includes("present"));
              const yearLabel = isOngoing
                ? t("now").toUpperCase()
                : extractStartYear(entry.period);

              return (
                <motion.div
                  key={`${entry.company}-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                  className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:flex-1"
                >
                  {/* Dot + year row */}
                  <div className="flex flex-col items-center shrink-0">
                    {/* Dot */}
                    <div
                      className={[
                        "rounded-full shrink-0 bg-[#0d1117]",
                        isLast
                          ? "w-3 h-3 border-2"
                          : "w-[10px] h-[10px] border-2",
                        isParallel ? "border-dashed" : "border-solid",
                      ].join(" ")}
                      style={{
                        borderColor: color,
                        boxShadow: isLast
                          ? "0 0 12px rgba(126,231,135,0.3)"
                          : undefined,
                      }}
                    />
                  </div>

                  {/* Text content */}
                  <div className="md:mt-4 flex flex-col gap-0.5 md:items-center md:text-center">
                    {/* Year label */}
                    <span
                      className="font-mono-brand text-[11px] font-semibold tracking-[1px]"
                      style={{ color }}
                    >
                      {yearLabel}
                    </span>

                    {/* Company */}
                    <span className="text-[13px] font-semibold text-[#e8e4df] leading-tight">
                      {entry.company}
                    </span>

                    {/* Role */}
                    <span className="text-[13px] text-[#e8e4df] opacity-60 leading-tight">
                      {entry.role}
                    </span>

                    {/* Insight */}
                    {entry.insight && (
                      <span className="text-[13px] text-[#e8e4df] opacity-50 italic max-w-[140px] leading-tight mt-0.5">
                        {entry.insight}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
