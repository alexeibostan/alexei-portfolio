"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TechPill } from "@/components/ui/TechPill";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Project } from "@/types";

interface WorkSectionProps {
  projects: Project[];
}

export function WorkSection({ projects }: WorkSectionProps) {
  const tSections = useTranslations("sections");
  const tWork = useTranslations("work");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  if (!projects || projects.length === 0) return null;

  const featured = projects[featuredIndex];
  const compactProjects = projects.filter((_, i) => i !== featuredIndex);

  return (
    <ScrollReveal>
      <section id="work" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono-brand text-[11px] text-[hsl(var(--primary))] opacity-60 tracking-[1px]">
              02
            </span>
            <h2 className="font-display text-2xl text-[#e8e4df] font-light">
              {tSections("work")}
            </h2>
            <div className="flex-1 h-px bg-white/[0.08]" />
            <span
              className="font-mono-brand text-right opacity-30"
              style={{ fontSize: "11px" }}
            >
              {tSections("selectedProjects")}
            </span>
          </div>

          {/* Featured project */}
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-white/[0.08] rounded-xl bg-white/[0.02] mb-6 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left column */}
                <div className="p-6 flex flex-col gap-4 md:border-r md:border-white/[0.08]">
                  {/* Featured label */}
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#7ee787" }}
                    />
                    <span className="font-mono-brand text-[11px] text-[hsl(var(--secondary))] tracking-[1px] uppercase">
                      {tWork("featured")}
                    </span>
                  </div>

                  {/* Project name */}
                  <h3 className="font-display text-2xl text-[#e8e4df] font-light leading-snug">
                    {featured.name}
                  </h3>

                  {/* Company + period */}
                  <p className="text-xs opacity-40 text-[#e8e4df]">
                    {featured.company} · {featured.period}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {featured.skills.map((skill) => (
                      <TechPill key={skill} name={skill} size="md" />
                    ))}
                  </div>

                  {/* Role context */}
                  <div className="mt-auto pt-4 border-t border-white/[0.08]">
                    <p className="text-[12px] italic opacity-40 text-[#e8e4df]">
                      {tWork(`role${featured.role}`)}
                    </p>
                  </div>
                </div>

                {/* Right column */}
                <div className="p-6 flex flex-col gap-6">
                  {/* Problem */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="block rounded-full"
                        style={{
                          width: "16px",
                          height: "2px",
                          backgroundColor: "#c4956a",
                        }}
                      />
                      <span
                        className="font-mono-brand text-[11px] tracking-[1px] uppercase"
                        style={{ color: "#c4956a" }}
                      >
                        {tWork("problem")}
                      </span>
                    </div>
                    <p className="text-[13px] opacity-60 leading-relaxed text-[#e8e4df]">
                      {featured.problem}
                    </p>
                  </div>

                  {/* Craft */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="block rounded-full"
                        style={{
                          width: "16px",
                          height: "2px",
                          backgroundColor: "#7ee787",
                        }}
                      />
                      <span
                        className="font-mono-brand text-[11px] tracking-[1px] uppercase"
                        style={{ color: "#7ee787" }}
                      >
                        {tWork("craft")}
                      </span>
                    </div>
                    <p className="text-[13px] opacity-60 leading-relaxed text-[#e8e4df]">
                      {featured.craft}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="block rounded-full"
                        style={{
                          width: "16px",
                          height: "2px",
                          backgroundColor: "#58a6ff",
                        }}
                      />
                      <span
                        className="font-mono-brand text-[11px] tracking-[1px] uppercase"
                        style={{ color: "#58a6ff" }}
                      >
                        {tWork("impact")}
                      </span>
                    </div>
                    <p className="text-[13px] opacity-60 leading-relaxed text-[#e8e4df]">
                      {featured.impact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Compact cards */}
          <div className="flex flex-col md:flex-row gap-3">
            {projects.map((project, i) => {
              if (i === featuredIndex) return null;
              return (
                <button
                  key={`${project.company}-${project.name}-${i}`}
                  onClick={() => setFeaturedIndex(i)}
                  className="relative flex-1 bg-white/[0.02] border border-white/[0.08] rounded-lg p-4 cursor-pointer text-left hover:border-white/[0.15] hover:-translate-y-0.5 transition-all flex flex-col"
                >
                  {/* Arrow icon */}
                  <span
                    className="absolute top-3 right-3 text-white/20 text-sm inline-block"
                    style={{ transform: "rotate(-45deg)" }}
                  >
                    →
                  </span>

                  {/* Project name */}
                  <p className="text-[14px] font-semibold text-[#e8e4df] mb-1 pr-4">
                    {project.name}
                  </p>

                  {/* Company + period */}
                  <p
                    className="text-[#e8e4df] mb-3"
                    style={{ fontSize: "12px", opacity: 0.35 }}
                  >
                    {project.company} · {project.period}
                  </p>

                  {/* Tech pills row */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.skills.slice(0, 3).map((skill) => (
                      <TechPill key={skill} name={skill} size="sm" />
                    ))}
                    {project.skills.length > 3 && (
                      <span className="font-mono-brand text-[9px] text-white/30 self-center">
                        +{project.skills.length - 3}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
