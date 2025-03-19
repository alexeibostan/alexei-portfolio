"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function About() {
  const professionalJourney = [
    {
      period: "Nov 2021 - Present",
      company: "Deliverect",
      role: "Senior Software Engineer",
      description: "Recently promoted to Senior Software Engineer. Initially worked on marketing products in Next.js and built the first iteration of Deliverect's design system. Now contributing to both frontend and backend development for Pulse analytics dashboard, using Python, FastAPI, Celery, and various databases (PostgreSQL, MongoDB, BigQuery). Leading technical initiatives and mentoring team members.",
    },
    {
      period: "2024-Present",
      company: "Bostan Software Developments",
      role: "Founder & Owner",
      description: "Started a software consultancy company collaborating with a University customer on innovating digital solutions for chemical engineering processes, specifically in P&ID digitalization. Using VueJS, Tailwind CSS, shadcn-vue, vue-query, KonvaJS.",
    },
    {
      period: "May 2020 - Oct 2021",
      company: "Kirey Group (Unicredit)",
      role: "Frontend Developer",
      description: "Upgraded a consumer finance application from Angular 7 to Angular 8. Became the go-to person for the frontend on the consumer finance application. Refactored several pages to use more RxJS and reduce bugs.",
    },
    {
      period: "Jul 2016 - Nov 2019",
      company: "Mobilesoft",
      role: "Frontend Developer",
      description: "Started an application with Angular 2-7 and grew it to the main digital platform of Igea Banca. Used techniques as code splitting to reduce the bundle size, RxJs, and Reactive forms. Worked on small projects with NodeJS and MongoDB, and several hybrid mobile apps with Ionic and Appcelerator Titanium.",
    }
  ];

  return (
    <Layout>
      <div className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">About Me</h1>
            <p className="text-xl text-gray-600">Senior Software Engineer with expertise in full-stack development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Professional Profile</h2>
              <div className="mb-8">
                <p className="text-lg mb-4">
                  Senior Software Engineer with 8+ years of experience specializing in modern JavaScript frameworks and full-stack development. My expertise spans frontend technologies like React, Next.js, and Angular, complemented by backend work with Python, FastAPI, and various database systems.
                </p>
                <p className="text-lg mb-4">
                  Recently promoted at Deliverect, I contribute to both frontend and backend development of the analytics platform, implement technical best practices, and mentor junior developers. My approach combines technical excellence with pragmatic problem-solving to deliver scalable, maintainable solutions.
                </p>
                <p className="text-lg">
                  In 2024, I started my own software consultancy, working on specialized solutions for university clients in the chemical engineering sector.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center bg-[#325080] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  View My Projects
                </Link>
                <Link
                  href="/skills"
                  className="inline-flex items-center border border-[#325080] text-[#325080] px-4 py-2 rounded-md hover:bg-[#325080] hover:text-white transition-colors"
                >
                  My Skills
                </Link>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">At a Glance</h2>
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">Location:</span>
                  <span>Amersfoort, Netherlands</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">Experience:</span>
                  <span>8+ years</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">Current Role:</span>
                  <span>Senior Software Engineer at Deliverect</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">Specialization:</span>
                  <span>NextJS, React, Python, FastAPI, Vue, Angular, TypeScript</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">Industry Focus:</span>
                  <span>Food Tech, Chemical Engineering, Banking & Finance</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">Languages:</span>
                  <span>English, Italian, Romanian, Dutch (A2)</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">Education:</span>
                  <span>BSc in Computer Engineering, UNINETTUNO</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Journey */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Professional Journey</h2>
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-10">
                {professionalJourney.map((job, index) => (
                  <div key={index} className="relative pl-20">
                    {/* Circle marker */}
                    <div className="absolute left-2 top-6 w-8 h-8 rounded-full bg-[#325080]"></div>
                    
                    {/* Content card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-xl font-semibold">{job.company}</h3>
                        <span className="text-gray-500">{job.period}</span>
                      </div>
                      <p className="text-[#325080] font-medium mb-2">{job.role}</p>
                      <p>{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#325080] mb-16">
            <h2 className="text-2xl font-bold mb-6">Leadership & Technical Excellence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#325080]">Technical Leadership</h3>
                <p className="mb-2">
                  Provide technical guidance to team members, conduct thorough code reviews, and help set architectural direction for complex projects while driving quality standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#325080]">Enterprise Design Systems</h3>
                <p className="mb-2">
                  Spearheaded development of company-wide design systems, standardizing components and improving development workflows.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#325080]">Junior Developer Mentorship</h3>
                <p className="mb-2">
                  Mentored multiple junior developers, helping them grow their technical skills through hands-on guidance and structured learning paths.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#325080]">Entrepreneurship</h3>
                <p className="mb-2">
                  Applied technical expertise to start a small software consultancy focused on specialized industry solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="bg-gray-100 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <p className="mb-2">Next.js, React, Vue.js, Angular, TypeScript, Tailwind CSS, Radix UI, vanilla-extract, styled-components, React Query, RxJS, Redux</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Backend & Data</h3>
                <p className="mb-2">Python, FastAPI, Celery, PostgreSQL, MongoDB, BigQuery, Node.js, RESTful APIs, Git, Docker</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Skills</h3>
                <p className="mb-2">Technical Leadership, System Architecture, Code Reviews, Mentoring, Agile/Scrum, Testing (Jest, Vitest), CI/CD, Design Systems</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and projects. Feel free to reach out if you'd like to discuss potential collaboration.
            </p>
            <a
              href="mailto:alexei.bostan@example.com"
              className="inline-flex items-center bg-[#325080] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
