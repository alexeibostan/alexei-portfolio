"use client";

import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "Next.js", level: 90 },
        { name: "React", level: 85 },
        { name: "Angular 2-8", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES5/ES6)", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3 / SCSS", level: 85 },
        { name: "Radix UI", level: 85 },
        { name: "vanilla-extract-css", level: 85 },
        { name: "styled-components", level: 85 },
        { name: "Angular Material", level: 85 },
        { name: "Storybook", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Responsive Design", level: 90 },
      ]
    },
    {
      name: "State Management & Data Fetching",
      skills: [
        { name: "Redux", level: 85 },
        { name: "redux-saga", level: 80 },
        { name: "react-query", level: 90 },
        { name: "TanStack Query", level: 85 },
        { name: "TanStack Table", level: 80 },
        { name: "RxJS", level: 85 },
        { name: "vue-query", level: 75 },
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Python", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "BigQuery", level: 75 },
        { name: "Celery", level: 70 },
        { name: "Node.js", level: 75 },
        { name: "RESTful APIs", level: 85 },
        { name: "Java", level: 70 },
        { name: "SQL / DB2", level: 70 },
      ]
    },
    {
      name: "Mobile Development",
      skills: [
        { name: "React Native", level: 75 },
        { name: "Ionic Framework", level: 75 },
        { name: "Appcelerator Titanium", level: 70 },
        { name: "Mobile UI/UX", level: 80 },
      ]
    },
    {
      name: "Testing & Quality",
      skills: [
        { name: "Jest", level: 80 },
        { name: "Vitest", level: 85 },
        { name: "React Testing Library", level: 85 },
        { name: "Unit Testing", level: 80 },
        { name: "Integration Testing", level: 75 },
      ]
    },
    {
      name: "Tools & Methods",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 85 },
        { name: "Vite", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "npm/yarn", level: 90 },
        { name: "Agile / Scrum", level: 85 },
        { name: "JIRA", level: 80 },
        { name: "Zeplin", level: 75 },
        { name: "KonvaJS", level: 70 },
        { name: "shadcn-vue", level: 75 },
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Skills & Expertise</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              I've developed a diverse set of technical skills throughout my career, with particular expertise in frontend development using Angular and React frameworks. Below is an overview of my technical competencies.
            </p>
          </div>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-200">
                  {category.name}
                </h2>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-[#325080] h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Other Skills & Knowledge</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-[#325080] mr-2"></span>
                    <span>English (Professional Working)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-[#325080] mr-2"></span>
                    <span>Italian (Native)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-[#325080] mr-2"></span>
                    <span>Problem-solving</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-[#325080] mr-2"></span>
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-[#325080] mr-2"></span>
                    <span>Attention to detail</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-[#325080] mr-2"></span>
                    <span>Time management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Highlight */}
      <div className="py-12 px-8 bg-[#325080] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Skills in Action</h2>
            <p className="text-lg max-w-2xl mx-auto">
              See how I've applied these skills in real-world projects
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center bg-white text-[#325080] px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
