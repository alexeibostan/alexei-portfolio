"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const projects = [
    {
      company: "Kirey Group",
      name: "Consumer Finance",
      type: "Web App",
      period: "2020-2021",
      description: "The application is a workflow used in the bank branches to sell small loans to private clients.",
      skills: ["Angular 7", "Angular Material 7", "Bootstrap 4", "TypeScript", "JavaScript ES6"],
      role: "FE",
    },
    {
      company: "Mobilesoft",
      name: "SMILE - Piattaforma Digitale",
      type: "Web App",
      period: "2017-2019",
      description: "The application allows the management of banking products, it includes the configuration of products, customer management, and more.",
      skills: ["Angular 2-7", "Spring Framework 5", "Hibernate 5", "Bootstrap 3.7 / 4", "TypeScript"],
      role: "WD",
    },
    {
      company: "Dedagroup - MC Engineering",
      name: "Cruscotto Polizze",
      type: "Web App",
      period: "2019",
      description: "The application shows some policies stipulated by the bank's clients and allows some verification of the details.",
      skills: ["Angular 7", "Custom Framework (Angular 7)", "TypeScript", "JavaScript ES6", "HTML5"],
      role: "FE",
    },
    {
      company: "Dedagroup - MC Engineering",
      name: "AFM",
      type: "Web App",
      period: "2020",
      description: "The application allows you to perform some queries on transactional movements previously loaded.",
      skills: ["Custom Framework (GWT 2.8)", "Custom Framework (JAVA EE)", "MyBatis 3", "DB2", "JAVA 8"],
      role: "WD",
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="py-16 px-8 bg-[#325080] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Front End Developer
          </h1>
          <p className="text-lg max-w-2xl mb-8">
            Below are the projects I have worked on over the years divided by company.
            The most important are SMILE - Digital Platform and Consumer Finance,
            they were also the longest projects where I gained a lot of experience with the Angular framework.
          </p>
          <div>
            <Link
              href="/projects"
              className="inline-flex items-center bg-white text-[#325080] px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center text-white ${project.role === 'FE' ? 'bg-[#e16642]' : 'bg-[#c18f68]'}`}>
                    {project.role}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-gray-500">{project.type} | {project.period}</p>
                  </div>
                </div>
                <p className="mb-4">{project.description}</p>
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
                <div className="text-[#325080] font-medium">
                  Company: {project.company}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-[#325080] hover:underline"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Angular (2-7)</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>React & React Native</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>TypeScript / JavaScript</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>HTML5 / CSS3</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Bootstrap</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Java</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Spring Framework</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>REST APIs</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>SQL / DB2</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Hibernate</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Tools & Methods</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Git</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Agile / Scrum</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>JIRA</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Zeplin</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Responsive Design</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/skills"
              className="inline-flex items-center text-[#325080] hover:underline"
            >
              View all skills →
            </Link>
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Companies I've Worked With</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-2">Kirey Group</h3>
              <p className="text-gray-600">2020-2021</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-2">Dedagroup</h3>
              <p className="text-gray-600">2019-2020</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-2">Mobilesoft</h3>
              <p className="text-gray-600">2016-2019</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-2">Altro</h3>
              <p className="text-gray-600">2020</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-8 bg-[#325080] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a
            href="mailto:alexei.bostan@example.com"
            className="inline-flex items-center bg-white text-[#325080] px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Contact Me →
          </a>
        </div>
      </div>
    </Layout>
  );
}
