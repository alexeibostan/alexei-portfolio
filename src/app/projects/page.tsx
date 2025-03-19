"use client";

import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Projects() {
  const projectsByCompany = {
    "Kirey Group": [
      {
        name: "Consumer Finance",
        type: "Web App",
        period: "2020-2021",
        description: "The application is a workflow used in the bank branches to sell small loans to private clients.",
        skills: ["Angular 7", "Angular Material 7", "Bootstrap 4", "TypeScript", "JavaScript ES6"],
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
    ],
    "Altro": [
      {
        name: "Lightdrop",
        type: "Mobile App",
        period: "2020",
        description: "The application purpose is to organize events of various kinds and aims to bring people in the real world.",
        skills: ["React Native", "React Hooks", "React", "JavaScript ES6", "REST"],
        role: "MD",
      }
    ]
  };

  // Role color mapping
  const roleColors: Record<string, string> = {
    "FE": "bg-[#e16642]",
    "WD": "bg-[#c18f68]",
    "MD": "bg-[#7494be]"
  };

  const companyColors: Record<string, string> = {
    "Kirey Group": "border-l-[#e16642]",
    "Dedagroup - MC Engineering": "border-l-[#c18f68]",
    "Mobilesoft": "border-l-[#7494be]",
    "Altro": "border-l-[#325080]"
  };

  return (
    <Layout>
      <div className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Projects</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Below are the projects I have worked on over the years divided by company. Each project showcases my skills in different technologies and frameworks across web and mobile development.
            </p>
          </div>

          <div className="space-y-16">
            {Object.entries(projectsByCompany).map(([company, projects]) => (
              <div key={company}>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
                  {company}
                </h2>
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
