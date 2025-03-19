"use client";

import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Projects() {
  const projectsByCompany = {
    "Deliverect": [
      {
        name: "Pulse by Deliverect",
        type: "Analytics Dashboard",
        period: "2023 - Present",
        description: "As Senior Software Engineer, I help develop this comprehensive analytics dashboard that provides real-time insights into restaurant performance. Working on both frontend and backend components, implementing robust data processing pipelines and visualization systems. Built with Next.js for the frontend and Python/FastAPI for the backend, with data stored across PostgreSQL, MongoDB, and BigQuery.",
        skills: ["Next.js", "React.js", "TypeScript", "vanilla-extract-css", "CSS", "Docker", "Git", "Recharts", "Python", "FastAPI", "Celery", "PostgreSQL", "MongoDB", "BigQuery", "Data Visualization"],
        role: "FE/BE",
      },
      {
        name: "Deliverect Design System",
        type: "Component Library",
        period: "2022 - 2023",
        description: "Started the first iteration of the Deliverect's design system as a collection of components based on Radix UI, vanilla-extract-css and storybook. Created reusable UI components that improved development speed and ensured consistency across applications.",
        skills: ["Next.js", "React.js", "TypeScript", "Radix UI", "vanilla-extract-css", "Storybook"],
        role: "FE",
      },
      {
        name: "Deliverect Main Platform",
        type: "Web App",
        period: "Nov 2021 - 2022",
        description: "Worked on the main Deliverect platform with a large code base and helped with transition from JavaScript to TypeScript, migration from redux-saga to react-query. Created features for third-party integrations and developer-friendly interfaces.",
        skills: ["Next.js", "React.js", "TypeScript", "styled-components", "CSS", "Docker", "Git", "REST APIs", "redux-saga", "react-query"],
        role: "FE",
      }
    ],
    "Bostan Software Developments": [
      {
        name: "P&ID Digitalization Solution",
        type: "Web App",
        period: "2023 - Present",
        description: "Developing innovative digital solutions for chemical engineering processes, specifically in P&ID digitalization. Collaborating with a University customer to transform traditional engineering workflows into efficient digital processes.",
        skills: ["Vue.js", "Tailwind CSS", "shadcn-vue", "vue-query", "KonvaJS"],
        role: "FE",
      }
    ],
    "Kirey Group": [
      {
        name: "Consumer Finance Application",
        type: "Web App",
        period: "May 2020 - Oct 2021",
        description: "Upgraded a consumer finance application from Angular 7 to Angular 8. Became the go-to person for the frontend on the consumer finance application. Refactored several pages to use more RxJS and reduce bugs.",
        skills: ["Angular 7", "Angular 8", "Angular Material", "TypeScript", "RxJS", "JavaScript ES6"],
        role: "FE",
      }
    ],
    "Dedagroup - MC Engineering": [
      {
        name: "Cruscotto Polizze",
        type: "Web App",
        period: "2019",
        description: "The application shows some policies stipulated by the bank's clients and allows some verification of the details.",
        skills: ["Angular 7", "Custom Framework (Angular 7)", "TypeScript", "JavaScript ES6", "HTML5"],
        role: "FE",
      },
      {
        name: "AFM",
        type: "Web App",
        period: "2020",
        description: "The application allows you to perform some queries on transactional movements previously loaded.",
        skills: ["Custom Framework (GWT 2.8)", "Custom Framework (JAVA EE)", "MyBatis 3", "DB2", "JAVA 8"],
        role: "WD",
      }
    ],
    "Mobilesoft": [
      {
        name: "SMILE - Piattaforma Digitale",
        type: "Web App",
        period: "2017-2019",
        description: "The application allows the management of banking products, it includes the configuration of products, customer management, and more.",
        skills: ["Angular 2-7", "Spring Framework 5", "Hibernate 5", "Bootstrap 3.7 / 4", "TypeScript"],
        role: "WD",
      },
      {
        name: "Talco Stocks",
        type: "Mobile iPad App",
        period: "2017",
        description: "The application is used to view the status of orders made by Talco stores.",
        skills: ["Appcelerator Titanium", "JavaScript ES5", "REST", "Git", "Zeplin"],
        role: "MD",
      },
      {
        name: "Igea Banca Survery",
        type: "Mobile App",
        period: "2017",
        description: "The application was used to collect a survey during an event for Igea Banca.",
        skills: ["Appcelerator Titanium", "JavaScript ES5", "REST", "Git", "Zeplin"],
        role: "MD",
      },
      {
        name: "GAPA",
        type: "Mobile iPad App",
        period: "2016",
        description: "An old web application of BNL has been rewritten with a hybrid mobile technology, it allows...",
        skills: ["Framework Ionic 2", "TypeScript", "JavaScript", "HTML5", "CSS"],
        role: "MD",
      },
      {
        name: "IGEA BIT - Private Bank Accounts",
        type: "Web App",
        period: "2018",
        description: "The application guides you in applying for an online bank account, integrates a digital signature system.",
        skills: ["Angular 2-7", "Bootstrap 3.7 / 4", "TypeScript", "JavaScript ES6", "HTML5"],
        role: "FE",
      },
      {
        name: "IGEA BIZ - Business Bank Accounts",
        type: "Web App",
        period: "2017",
        description: "The application guides you in applying for an online business bank account, it has a digital...",
        skills: ["Angular 2-7", "Bootstrap 3.7 / 4", "TypeScript", "JavaScript ES6", "HTML5"],
        role: "FE",
      }
    ]
  };

  // Role color mapping
  const roleColors: Record<string, string> = {
    "FE": "bg-[#e16642]",
    "WD": "bg-[#c18f68]",
    "MD": "bg-[#7494be]"
  };

  // Company website URLs
  const companyWebsites: Record<string, string> = {
    "Deliverect": "https://www.deliverect.com",
    "Kirey Group": "https://www.kireygroup.com",
    "Dedagroup - MC Engineering": "https://www.dedagroup.it",
    "Mobilesoft": "https://www.mobilesoft.it"  // Assuming this is the Italian Mobilesoft
  };

  const companyColors: Record<string, string> = {
    "Deliverect": "border-l-[#325080]",
    "Bostan Software Developments": "border-l-[#4CAF50]",
    "Kirey Group": "border-l-[#e16642]",
    "Dedagroup - MC Engineering": "border-l-[#c18f68]",
    "Mobilesoft": "border-l-[#7494be]",
  };

  return (
    <Layout>
      <div className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Projects</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              As a Senior Software Engineer with 8+ years of experience, I've worked across multiple industries and technologies. My expertise spans frontend frameworks (React, Next.js, Vue, Angular) and backend systems (Python, FastAPI, Node.js). I've developed enterprise-scale platforms, data visualization tools, and complex web applications while contributing to technical decision-making and mentoring junior engineers.
            </p>
          </div>

          <div className="space-y-16">
            {Object.entries(projectsByCompany).map(([company, projects]) => (
              <div key={company}>
                <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-200">
                  <h2 className="text-2xl font-bold">
                    {company}
                  </h2>
                  {company !== "Bostan Software Developments" && companyWebsites[company] && (
                    <a 
                      href={companyWebsites[company]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      Visit Company Website
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-lg shadow-sm p-6 border-l-4 ${companyColors[company as keyof typeof companyColors] || ''}`}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-md flex items-center justify-center text-white ${roleColors[project.role] || ''}`}>
                          {project.role}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold">{project.name}</h3>
                          <p className="text-gray-500">{project.type} | {project.period}</p>
                        </div>
                      </div>
                      <p className="mb-4 text-gray-700">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Role Legend */}
      <div className="py-8 px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Role Legend</h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-[#e16642] text-sm">
                FE
              </div>
              <span className="ml-2">Frontend Developer</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-[#c18f68] text-sm">
                WD
              </div>
              <span className="ml-2">Web Developer (Frontend & Backend)</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-[#7494be] text-sm">
                MD
              </div>
              <span className="ml-2">Mobile Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 px-8 bg-[#325080] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Need a skilled developer for your next project?</h2>
          <p className="text-lg mb-6">
            I'm available for new opportunities and would love to discuss how I can contribute to your team.
          </p>
          <a
            href="mailto:alexei.bostan@example.com"
            className="inline-flex items-center bg-white text-[#325080] px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </Layout>
  );
}
