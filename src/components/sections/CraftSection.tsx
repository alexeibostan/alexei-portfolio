"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Skill } from "@/types";

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
      className="relative mb-10 flex flex-col md:flex-row items-center gap-6 md:gap-0 rounded-[14px] px-8 py-7 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(196,149,106,0.04) 0%, rgba(126,231,135,0.02) 50%, rgba(88,166,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
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
          className="font-mono-brand uppercase tracking-[3px] mb-2"
          style={{ fontSize: "9px", color: "rgba(196,149,106,0.5)" }}
        >
          {tCraft("whyIBuild")}
        </div>
        <div className="font-display italic text-[15px] text-[#e8e4df] font-light">
          {tCraft("whyValue")}
        </div>
        <div
          className="font-mono-brand mt-1.5"
          style={{ fontSize: "9px", color: "rgba(255,255,255,0.2)" }}
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
          style={{ opacity: 0.15 }}
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>

      {/* How */}
      <div className="flex-1 text-center relative z-10">
        <div
          className="font-mono-brand uppercase tracking-[3px] mb-2"
          style={{ fontSize: "9px", color: "rgba(225,102,66,0.5)" }}
        >
          {tCraft("howIBuild")}
        </div>
        <div className="font-display italic text-[13px] text-[#e8e4df] font-light leading-relaxed">
          {tCraft("howValue")}
        </div>
        <div
          className="font-mono-brand mt-1.5"
          style={{ fontSize: "9px", color: "rgba(255,255,255,0.2)" }}
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
          style={{ opacity: 0.15 }}
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>

      {/* What */}
      <div className="flex-1 text-center relative z-10">
        <div
          className="font-mono-brand uppercase tracking-[3px] mb-2"
          style={{ fontSize: "9px", color: "rgba(126,231,135,0.5)" }}
        >
          {tCraft("whatIBuildWith")}
        </div>
        <div className="font-display italic text-[15px] text-[#e8e4df] font-light">
          {tCraft("whatValue")}
        </div>
        <div
          className="font-mono-brand mt-1.5"
          style={{ fontSize: "9px", color: "rgba(255,255,255,0.2)" }}
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
        className="font-mono-brand transition-colors duration-200"
        style={{
          fontSize: "11px",
          color: isActive ? "#e8e4df" : "rgba(255,255,255,0.45)",
        }}
      >
        {skill.name}
      </div>
      <div
        className="font-mono-brand mt-0.5"
        style={{
          fontSize: "9px",
          color: isActive ? `${color}66` : "rgba(255,255,255,0.13)",
        }}
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
        className="mt-6 rounded-xl flex items-center justify-center gap-2.5"
        style={{
          padding: "20px 28px",
          border: "1px dashed rgba(126,231,135,0.1)",
          background: "rgba(126,231,135,0.01)",
        }}
      >
        <span
          className="text-sm animate-bounce"
          style={{ color: "rgba(126,231,135,0.2)" }}
        >
          ↑
        </span>
        <span
          className="font-mono-brand"
          style={{ fontSize: "11px", color: "rgba(126,231,135,0.3)" }}
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
        className="mt-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative overflow-hidden"
        style={{
          padding: "20px 28px",
          border: "1px solid rgba(126,231,135,0.1)",
          background:
            "linear-gradient(135deg, rgba(126,231,135,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        }}
      >
        {/* Glow accent */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: -30,
            left: -30,
            width: 100,
            height: 100,
            background:
              "radial-gradient(circle, rgba(126,231,135,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Pill */}
        <span
          className="font-mono-brand rounded-full flex-shrink-0 relative z-10"
          style={{
            fontSize: "11px",
            padding: "5px 14px",
            background: "rgba(126,231,135,0.08)",
            color: "#7ee787",
            border: "1px solid rgba(126,231,135,0.15)",
          }}
        >
          {skill.name}
        </span>

        {/* Years + category */}
        <div className="flex-shrink-0 relative z-10" style={{ minWidth: 90 }}>
          <div
            className="font-light"
            style={{ fontSize: "22px", color: "#7ee787" }}
          >
            {skill.years} {tCraft("years")}
          </div>
          <div
            className="font-mono-brand uppercase tracking-[1px] mt-0.5"
            style={{ fontSize: "9px", color: "rgba(126,231,135,0.4)" }}
          >
            {categoryLabel}
          </div>
        </div>

        {/* Divider */}
        <div
          className="hidden sm:block flex-shrink-0"
          style={{
            width: 1,
            height: 36,
            background: "rgba(255,255,255,0.06)",
          }}
        />

        {/* Context line */}
        <p
          className="font-display italic leading-relaxed flex-1 relative z-10"
          style={{
            fontSize: "13px",
            color: skill.contextLine
              ? "rgba(232,228,223,0.5)"
              : "rgba(232,228,223,0.3)",
          }}
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
              className="font-mono-brand text-right opacity-30"
              style={{ fontSize: "11px" }}
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
                    className="font-mono-brand"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "2px",
                      color: config.color,
                      opacity: 0.55,
                    }}
                  >
                    {tCraft(config.empathyKey)}
                  </span>
                  <span
                    className="font-mono-brand uppercase"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "2px",
                      color: "rgba(255,255,255,0.2)",
                    }}
                  >
                    {tCraft(config.traditionalKey)}
                  </span>
                </div>

                {/* Tile grid */}
                <div
                  className="grid gap-[5px]"
                  style={{
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(90px, 1fr))",
                  }}
                >
                  {catSkills.map((skill) => (
                    <SkillTile
                      key={skill.name}
                      skill={skill}
                      color={config.color}
                      isActive={selectedSkill?.name === skill.name}
                      onClick={() => setSelectedSkill(skill)}
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
            className="mt-4 flex items-center gap-4 flex-wrap rounded-[10px]"
            style={{
              padding: "14px 16px",
              background: "rgba(255,255,255,0.015)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span
              className="font-mono-brand uppercase"
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              {tCraft("languagesISpeak")}
            </span>
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5">
                <span style={{ fontSize: "13px" }}>{lang.flag}</span>
                <span
                  className="font-mono-brand"
                  style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}
                >
                  {lang.name}
                </span>
                <span
                  className="font-mono-brand"
                  style={{ fontSize: "9px", color: "rgba(255,255,255,0.15)" }}
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
