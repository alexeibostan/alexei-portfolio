"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Skill } from "@/types";
import { analytics } from "@/lib/analytics";

interface CraftSectionProps {
  skills: Skill[];
}

// Map old 5 categories → 3 empathy-framed groups
const CATEGORY_MAP: Record<string, string> = {
  Frontend: "frontendUI",
  Backend: "backendData",
  Libraries: "frontendUI",
  Tools: "devopsTesting",
  Testing: "devopsTesting",
};

const CATEGORY_ORDER = ["frontendUI", "backendData", "devopsTesting"] as const;

type MergedCategory = (typeof CATEGORY_ORDER)[number];

const CATEGORY_CONFIG: Record<
  MergedCategory,
  { color: string; empathyKey: string; traditionalKey: string }
> = {
  frontendUI: {
    color: "#7ee787",
    empathyKey: "whatUsersSee",
    traditionalKey: "frontendAndUI",
  },
  backendData: {
    color: "#58a6ff",
    empathyKey: "whatMakesItWork",
    traditionalKey: "backendAndData",
  },
  devopsTesting: {
    color: "#d2a8ff",
    empathyKey: "whatKeepsItSolid",
    traditionalKey: "devopsAndTesting",
  },
};

function groupSkills(skills: Skill[]): Record<MergedCategory, Skill[]> {
  const groups: Record<MergedCategory, Skill[]> = {
    frontendUI: [],
    backendData: [],
    devopsTesting: [],
  };
  for (const skill of skills) {
    const mapped = CATEGORY_MAP[skill.category] as MergedCategory | undefined;
    if (mapped) groups[mapped].push(skill);
  }
  return groups;
}

function NarrativeHeader({
  tCraft,
}: {
  tCraft: ReturnType<typeof useTranslations>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="relative mb-10 flex flex-col md:flex-row items-center gap-6 md:gap-0 rounded-[14px] px-8 py-7 overflow-hidden border border-white/[0.08]"
      style={{
        background:
          "linear-gradient(135deg, rgba(196,149,106,0.04) 0%, rgba(126,231,135,0.02) 50%, rgba(88,166,255,0.02) 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 10% 50%, rgba(196,149,106,0.06) 0%, transparent 50%), radial-gradient(ellipse at 90% 50%, rgba(88,166,255,0.04) 0%, transparent 50%)",
        }}
      />

      {/* Why */}
      <div className="flex-1 text-center relative z-10">
        <div
          className="font-mono-brand text-[11px] text-primary/70 uppercase tracking-[3px] mb-2"
        >
          {tCraft("whyIBuild")}
        </div>
        <div className="font-display italic text-[15px] text-[#e8e4df] font-light">
          {tCraft("whyValue")}
        </div>
        <div
          className="font-mono-brand text-[11px] text-white/50 mt-1.5"
        >
          {tCraft("whySub")}
        </div>
      </div>

      {/* Arrow */}
      <div className="w-[60px] flex items-center justify-center flex-shrink-0 relative z-10 rotate-90 md:rotate-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e8e4df"
          strokeWidth="1.5"
          className="opacity-[0.15]"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>

      {/* How */}
      <div className="flex-1 text-center relative z-10">
        <div
          className="font-mono-brand text-[11px] text-[rgb(225,102,66)]/70 uppercase tracking-[3px] mb-2"
        >
          {tCraft("howIBuild")}
        </div>
        <div className="font-display italic text-[13px] text-[#e8e4df] font-light leading-relaxed">
          {tCraft("howValue")}
        </div>
        <div
          className="font-mono-brand text-[11px] text-white/50 mt-1.5"
        >
          {tCraft("howSub")}
        </div>
      </div>

      {/* Arrow */}
      <div className="w-[60px] flex items-center justify-center flex-shrink-0 relative z-10 rotate-90 md:rotate-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e8e4df"
          strokeWidth="1.5"
          className="opacity-[0.15]"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>

      {/* What */}
      <div className="flex-1 text-center relative z-10">
        <div
          className="font-mono-brand text-[11px] text-secondary/70 uppercase tracking-[3px] mb-2"
        >
          {tCraft("whatIBuildWith")}
        </div>
        <div className="font-display italic text-[15px] text-[#e8e4df] font-light">
          {tCraft("whatValue")}
        </div>
        <div
          className="font-mono-brand text-[11px] text-white/50 mt-1.5"
        >
          {tCraft("whatSub")}
        </div>
      </div>
    </motion.div>
  );
}

function SkillTile({
  skill,
  color,
  isActive,
  onClick,
}: {
  skill: Skill;
  color: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg cursor-pointer text-center transition-all duration-200 hover:-translate-y-0.5"
      style={{
        padding: "10px 6px",
        background: isActive
          ? `${color}0A`
          : "rgba(255,255,255,0.015)",
        border: `1px solid ${isActive ? `${color}40` : "rgba(255,255,255,0.08)"}`,
        boxShadow: isActive
          ? `0 0 20px ${color}08`
          : "none",
      }}
    >
      <div
        className={`font-mono-brand text-[11px] transition-colors duration-200 ${isActive ? 'text-foreground' : 'text-white/50'}`}
      >
        {skill.name}
      </div>
      <div
        className={`font-mono-brand text-[11px] mt-0.5 ${!isActive ? 'text-white/50' : ''}`}
        style={isActive ? { color: `${color}66` } : undefined}
      >
        {skill.years}
      </div>
    </button>
  );
}

function DetailStrip({
  skill,
  tCraft,
  categoryLabel,
}: {
  skill: Skill | null;
  tCraft: ReturnType<typeof useTranslations>;
  categoryLabel: string;
}) {
  if (!skill) {
    return (
      <div
        className="mt-6 rounded-xl flex items-center justify-center gap-2.5 px-7 py-5 border border-dashed border-secondary/10 bg-secondary/[0.01]"
      >
        <span
          className="text-sm animate-bounce text-secondary/20"
        >
          ↑
        </span>
        <span
          className="font-mono-brand text-[11px] text-secondary/50"
        >
          {tCraft("clickToExplore")}
        </span>
      </div>
    );
  }

  const contextLine =
    skill.contextLine ||
    tCraft("partOfToolkit", { category: categoryLabel });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2 }}
        className="mt-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative overflow-hidden px-7 py-5 border border-secondary/10"
        style={{
          background:
            "linear-gradient(135deg, rgba(126,231,135,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        }}
      >
        {/* Glow accent */}
        <div
          className="pointer-events-none absolute -top-[30px] -left-[30px] w-[100px] h-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(126,231,135,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Pill */}
        <span
          className="font-mono-brand text-[11px] px-3.5 py-[5px] bg-secondary/[0.08] text-secondary border border-secondary/15 rounded-full flex-shrink-0 relative z-10"
        >
          {skill.name}
        </span>

        {/* Years + category */}
        <div className="flex-shrink-0 relative z-10 min-w-[90px]">
          <div
            className="font-light text-[22px] text-secondary"
          >
            {skill.years} {tCraft("years")}
          </div>
          <div
            className="font-mono-brand text-[11px] text-secondary/[0.55] uppercase tracking-[1px] mt-0.5"
          >
            {categoryLabel}
          </div>
        </div>

        {/* Divider */}
        <div
          className="hidden sm:block flex-shrink-0 w-px h-9 bg-white/[0.06]"
        />

        {/* Context line */}
        <p
          className="font-display italic text-[13px] text-foreground/60 leading-relaxed flex-1 relative z-10"
        >
          {contextLine}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

export function CraftSection({ skills }: CraftSectionProps) {
  const tSections = useTranslations("sections");
  const tCraft = useTranslations("craft");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const groupedSkills = groupSkills(skills);

  const languages = [
    { flag: "🇬🇧", name: tCraft("english"), proficiency: tCraft("fluent") },
    { flag: "🇮🇹", name: tCraft("italian"), proficiency: tCraft("fluent") },
    { flag: "🇷🇴", name: tCraft("romanian"), proficiency: tCraft("native") },
    {
      flag: "🇳🇱",
      name: tCraft("dutch"),
      proficiency: tCraft("conversational"),
    },
  ];

  // Find which merged category the selected skill belongs to
  const selectedCategory = selectedSkill
    ? (CATEGORY_MAP[selectedSkill.category] as MergedCategory)
    : null;
  const selectedCategoryLabel = selectedCategory
    ? tCraft(CATEGORY_CONFIG[selectedCategory].traditionalKey)
    : "";

  return (
    <ScrollReveal>
      <section id="craft" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono-brand text-[11px] text-[hsl(var(--primary))] opacity-60 tracking-[1px]">
              03
            </span>
            <h2 className="font-display text-2xl text-[#e8e4df] font-light">
              {tSections("craft")}
            </h2>
            <div className="flex-1 h-px bg-white/[0.08]" />
            <span
              className="font-mono-brand text-[11px] text-right opacity-50"
            >
              {tCraft("skillsAndMethodologies")}
            </span>
          </div>

          {/* Narrative header */}
          <NarrativeHeader tCraft={tCraft} />

          {/* Skill tile grids */}
          {CATEGORY_ORDER.map((catKey, groupIndex) => {
            const config = CATEGORY_CONFIG[catKey];
            const catSkills = groupedSkills[catKey];
            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className="mb-5"
              >
                {/* Category header */}
                <div className="flex items-baseline gap-2 mb-2.5">
                  <span
                    className="font-mono-brand text-[11px] tracking-[2px] opacity-60"
                    style={{ color: config.color }}
                  >
                    {tCraft(config.empathyKey)}
                  </span>
                  <span
                    className="font-mono-brand text-[11px] tracking-[2px] text-white/50 uppercase"
                  >
                    {tCraft(config.traditionalKey)}
                  </span>
                </div>

                {/* Tile grid */}
                <div
                  className="grid gap-[5px] grid-cols-[repeat(auto-fill,minmax(90px,1fr))]"
                >
                  {catSkills.map((skill) => (
                    <SkillTile
                      key={skill.name}
                      skill={skill}
                      color={config.color}
                      isActive={selectedSkill?.name === skill.name}
                      onClick={() => {
                        analytics.skillView(skill.name);
                        setSelectedSkill(skill);
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Detail strip */}
          <DetailStrip
            skill={selectedSkill}
            tCraft={tCraft}
            categoryLabel={selectedCategoryLabel}
          />

          {/* Languages strip */}
          <div
            className="mt-4 flex items-center gap-4 flex-wrap rounded-[10px] px-4 py-3.5 bg-white/[0.015] border border-white/[0.08]"
          >
            <span
              className="font-mono-brand text-[11px] tracking-[2px] text-white/50 uppercase"
            >
              {tCraft("languagesISpeak")}
            </span>
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5">
                <span className="text-[13px]">{lang.flag}</span>
                <span
                  className="font-mono-brand text-[11px] text-white/50"
                >
                  {lang.name}
                </span>
                <span
                  className="font-mono-brand text-[11px] text-white/50"
                >
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
