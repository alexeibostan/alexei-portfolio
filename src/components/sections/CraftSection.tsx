"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Skill, Methodology } from "@/types";

interface CraftSectionProps {
  skills: Skill[];
  methodologies: Methodology[];
}

// Prominent outer ring skills — pick top ~9 by years (descending)
const OUTER_RING_NAMES = [
  "Git",
  "Angular",
  "RxJS",
  "Redux",
  "React",
  "TypeScript",
  "styled-components",
  "Node.js",
  "Tailwind CSS",
];

const categoryColors: Record<string, string> = {
  Frontend: "#7ee787",
  Backend: "#58a6ff",
  Libraries: "#c4956a",
  Tools: "#d2a8ff",
  Testing: "#58a6ff",
  default: "rgba(255,255,255,0.4)",
};

function getCategoryColor(category: string): string {
  return categoryColors[category] ?? categoryColors.default;
}

interface RingPillProps {
  label: string;
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

function RingPill({ label, color, isSelected, onClick }: RingPillProps) {
  return (
    <button
      onClick={onClick}
      className="font-mono-brand rounded-full cursor-pointer transition-all whitespace-nowrap"
      style={{
        fontSize: "9px",
        padding: "3px 8px",
        background: isSelected
          ? `${color}22`
          : "rgba(255,255,255,0.03)",
        color: isSelected ? color : "rgba(255,255,255,0.45)",
        border: `1px solid ${isSelected ? color + "55" : "rgba(255,255,255,0.08)"}`,
      }}
    >
      {label}
    </button>
  );
}

interface ConcentricRingsProps {
  outerSkills: Skill[];
  middleMethodologies: Methodology[];
  selectedSkill: Skill;
  onSelectSkill: (skill: Skill) => void;
  whatIBuildWithLabel: string;
  howIBuildLabel: string;
  whyLabel: string;
  userEmpathyLabel: string;
}

function ConcentricRings({
  outerSkills,
  middleMethodologies,
  selectedSkill,
  onSelectSkill,
  whatIBuildWithLabel,
  howIBuildLabel,
  whyLabel,
  userEmpathyLabel,
}: ConcentricRingsProps) {
  // Container is 360px × 360px; rings are centered inside
  const containerSize = 360;
  const center = containerSize / 2;

  // Outer ring: 320px diameter → radius 160px
  const outerRadius = 150;
  // Middle ring: 200px diameter → radius 100px
  const middleRadius = 90;

  return (
    <div
      className="relative mx-auto"
      style={{ width: containerSize, height: containerSize }}
    >
      {/* Outer ring */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        className="absolute rounded-full"
        style={{
          width: 320,
          height: 320,
          top: center - 160,
          left: center - 160,
          border: "1px solid rgba(126,231,135,0.15)",
        }}
      />

      {/* Middle ring */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          top: center - 100,
          left: center - 100,
          border: "1px solid rgba(196,149,106,0.2)",
        }}
      />

      {/* Inner core */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0, ease: "easeOut" }}
        className="absolute rounded-full flex flex-col items-center justify-center gap-0.5"
        style={{
          width: 90,
          height: 90,
          top: center - 45,
          left: center - 45,
          background:
            "linear-gradient(135deg, rgba(196,149,106,0.15), rgba(196,149,106,0.05))",
          border: "1px solid rgba(196,149,106,0.25)",
        }}
      >
        <span
          className="font-mono-brand text-[#c4956a] opacity-50 tracking-wider"
          style={{ fontSize: "8px" }}
        >
          {whyLabel}
        </span>
        <span
          className="font-display italic text-[#e8e4df] text-center leading-tight opacity-60"
          style={{ fontSize: "10px" }}
        >
          {userEmpathyLabel}
        </span>
      </motion.div>

      {/* Ring labels */}
      {/* Outer ring label — top center */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0 }}
        className="absolute font-mono-brand text-[#7ee787] tracking-widest"
        style={{
          fontSize: "7px",
          top: center - 160 - 14,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.4,
        }}
      >
        {whatIBuildWithLabel}
      </motion.span>

      {/* Middle ring label */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="absolute font-mono-brand text-[#c4956a] tracking-widest"
        style={{
          fontSize: "7px",
          top: center - 100 - 12,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.4,
        }}
      >
        {howIBuildLabel}
      </motion.span>

      {/* Outer ring skill pills — positioned around the ring */}
      {outerSkills.map((skill, i) => {
        const angleDeg = (i / outerSkills.length) * 360 - 90; // start from top
        const angleRad = (angleDeg * Math.PI) / 180;
        const x = center + outerRadius * Math.cos(angleRad);
        const y = center + outerRadius * Math.sin(angleRad);
        const color = getCategoryColor(skill.category);

        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.06 }}
            className="absolute"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <RingPill
              label={skill.name}
              color={color}
              isSelected={selectedSkill.name === skill.name}
              onClick={() => onSelectSkill(skill)}
            />
          </motion.div>
        );
      })}

      {/* Middle ring methodology pills */}
      {middleMethodologies.map((method, i) => {
        const angleDeg = (i / middleMethodologies.length) * 360 - 90;
        const angleRad = (angleDeg * Math.PI) / 180;
        const x = center + middleRadius * Math.cos(angleRad);
        const y = center + middleRadius * Math.sin(angleRad);

        return (
          <motion.div
            key={method.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.07 }}
            className="absolute"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span
              className="font-mono-brand rounded-full whitespace-nowrap"
              style={{
                fontSize: "8px",
                padding: "2px 7px",
                background: "rgba(196,149,106,0.08)",
                color: "rgba(196,149,106,0.6)",
                border: "1px solid rgba(196,149,106,0.15)",
                display: "inline-block",
              }}
            >
              {method.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export function CraftSection({ skills, methodologies }: CraftSectionProps) {
  const tSections = useTranslations("sections");
  const tCraft = useTranslations("craft");
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skills[0]);

  const languages = [
    { flag: "🇬🇧", name: tCraft("english"), proficiency: tCraft("fluent") },
    { flag: "🇮🇹", name: tCraft("italian"), proficiency: tCraft("fluent") },
    { flag: "🇷🇴", name: tCraft("romanian"), proficiency: tCraft("native") },
    { flag: "🇳🇱", name: tCraft("dutch"), proficiency: tCraft("conversational") },
  ];

  // Filter outer ring skills in display order
  const outerSkills = OUTER_RING_NAMES.map((name) =>
    skills.find((s) => s.name === name)
  ).filter((s): s is Skill => Boolean(s));

  // Group skills by category for mobile list
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {}
  );

  return (
    <ScrollReveal>
      <section id="craft" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono-brand text-[11px] text-[#c4956a] opacity-60 tracking-[1px]">
              03
            </span>
            <h2 className="font-display text-2xl text-[#e8e4df] font-light">
              {tSections("craft")}
            </h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span
              className="font-mono-brand text-right opacity-30"
              style={{ fontSize: "11px" }}
            >
              {tCraft("skillsAndMethodologies")}
            </span>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left column */}
            <div>
              {/* Desktop: concentric rings */}
              <div className="hidden md:flex items-center justify-center">
                <ConcentricRings
                  outerSkills={outerSkills}
                  middleMethodologies={methodologies}
                  selectedSkill={selectedSkill}
                  onSelectSkill={setSelectedSkill}
                  whatIBuildWithLabel={tCraft("whatIBuildWith")}
                  howIBuildLabel={tCraft("howIBuild")}
                  whyLabel={tCraft("why")}
                  userEmpathyLabel={tCraft("userEmpathy")}
                />
              </div>

              {/* Mobile: categorized list */}
              <div className="flex md:hidden flex-col gap-6">
                {/* What I build with */}
                <div className="flex flex-col gap-3">
                  <span
                    className="font-mono-brand text-[#7ee787] tracking-widest opacity-40"
                    style={{ fontSize: "9px" }}
                  >
                    {tCraft("whatIBuildWith")}
                  </span>
                  {Object.entries(skillsByCategory).map(
                    ([category, catSkills]) => (
                      <div key={category} className="flex flex-col gap-1.5">
                        <span
                          className="font-mono-brand opacity-25"
                          style={{
                            fontSize: "8px",
                            color: getCategoryColor(category),
                          }}
                        >
                          {category.toUpperCase()}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {catSkills.map((skill) => (
                            <button
                              key={skill.name}
                              onClick={() => setSelectedSkill(skill)}
                              className="font-mono-brand rounded-full cursor-pointer transition-all"
                              style={{
                                fontSize: "9px",
                                padding: "3px 8px",
                                background:
                                  selectedSkill.name === skill.name
                                    ? `${getCategoryColor(skill.category)}22`
                                    : "rgba(255,255,255,0.03)",
                                color:
                                  selectedSkill.name === skill.name
                                    ? getCategoryColor(skill.category)
                                    : "rgba(255,255,255,0.45)",
                                border: `1px solid ${
                                  selectedSkill.name === skill.name
                                    ? getCategoryColor(skill.category) + "55"
                                    : "rgba(255,255,255,0.08)"
                                }`,
                              }}
                            >
                              {skill.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* How I build */}
                <div className="flex flex-col gap-2">
                  <span
                    className="font-mono-brand text-[#c4956a] tracking-widest opacity-40"
                    style={{ fontSize: "9px" }}
                  >
                    {tCraft("howIBuild")}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {methodologies.map((method) => (
                      <span
                        key={method.name}
                        className="font-mono-brand rounded-full"
                        style={{
                          fontSize: "9px",
                          padding: "3px 8px",
                          background: "rgba(196,149,106,0.08)",
                          color: "rgba(196,149,106,0.6)",
                          border: "1px solid rgba(196,149,106,0.15)",
                        }}
                      >
                        {method.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Why I build */}
                <div className="flex flex-col gap-2">
                  <span
                    className="font-mono-brand text-[#c4956a] tracking-widest opacity-40"
                    style={{ fontSize: "9px" }}
                  >
                    {tCraft("whyIBuild")}
                  </span>
                  <span className="font-display italic text-[#e8e4df] opacity-50 text-sm">
                    {tCraft("userEmpathy")}
                  </span>
                </div>
              </div>
            </div>

            {/* Right column: detail panel + languages */}
            <div className="flex flex-col gap-4">
              {/* Skill detail panel */}
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl p-6 flex flex-col gap-4"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(126,231,135,0.15)",
                }}
              >
                {/* Skill name + ring label */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="font-mono-brand rounded-full"
                    style={{
                      fontSize: "11px",
                      padding: "3px 10px",
                      background: `${getCategoryColor(selectedSkill.category)}15`,
                      color: getCategoryColor(selectedSkill.category),
                      border: `1px solid ${getCategoryColor(selectedSkill.category)}30`,
                    }}
                  >
                    {selectedSkill.name}
                  </span>
                  <span
                    className="font-mono-brand opacity-30"
                    style={{ fontSize: "9px" }}
                  >
                    {"— " + tCraft("whatIBuildWith")}
                  </span>
                </div>

                {/* Years */}
                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-xl font-light"
                    style={{ color: "#7ee787" }}
                  >
                    {selectedSkill.years} {tCraft("years")}
                  </span>
                  <span
                    className="font-mono-brand opacity-30"
                    style={{
                      fontSize: "9px",
                      color: getCategoryColor(selectedSkill.category),
                    }}
                  >
                    {selectedSkill.category.toUpperCase()}
                  </span>
                </div>

                {/* Context line */}
                {selectedSkill.contextLine ? (
                  <div
                    className="pt-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p
                      className="font-display italic leading-relaxed opacity-50"
                      style={{ fontSize: "13px", color: "#e8e4df" }}
                    >
                      {selectedSkill.contextLine}
                    </p>
                  </div>
                ) : (
                  <div
                    className="pt-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p
                      className="font-display italic leading-relaxed opacity-25"
                      style={{ fontSize: "13px", color: "#e8e4df" }}
                    >
                      {tCraft("noContext")}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Hint text */}
              <p
                className="font-display italic opacity-25 text-[#e8e4df]"
                style={{ fontSize: "12px" }}
              >
                {tCraft("hoverHint")}
              </p>

              {/* Languages card */}
              <div
                className="rounded-xl p-5 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  className="font-mono-brand opacity-40"
                  style={{ fontSize: "11px" }}
                >
                  {tCraft("languagesISpeak")}
                </span>
                <div className="flex flex-row flex-wrap gap-4">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex flex-col items-center gap-1"
                    >
                      <span style={{ fontSize: "18px" }}>{lang.flag}</span>
                      <span
                        className="font-mono-brand text-[#e8e4df]"
                        style={{ fontSize: "12px" }}
                      >
                        {lang.name}
                      </span>
                      <span
                        className="font-mono-brand opacity-30 text-[#e8e4df]"
                        style={{ fontSize: "9px" }}
                      >
                        {lang.proficiency}
                      </span>
                    </div>
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
