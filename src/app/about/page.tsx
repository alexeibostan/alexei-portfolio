"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function About() {
  const professionalJourney = [
    {
      period: "Current",
      company: "Deliverect",
      role: "Frontend Developer",
      description: "Working on creating seamless user experiences and interfaces for food delivery management systems. Specializing in React and Next.js development.",
    },
    {
      period: "2023-Present",
      company: "Software Consultancy",
      role: "Founder & Technical Lead",
      description: "Founded a software consultancy company focused on innovating digital solutions for chemical engineering processes, specifically in P&ID digitalization.",
    },
    {
      period: "2020-2021",
      company: "Kirey Group",
      role: "Front End Developer",
      description: "Worked on developing banking applications with Angular, focusing on user experience and accessibility.",
    },
    {
      period: "2019-2020",
      company: "Dedagroup - MC Engineering",
      role: "Web Developer",
      description: "Developed and maintained web applications for financial institutions, working with both front-end and back-end technologies.",
    },
    {
      period: "2016-2019",
      company: "Mobilesoft",
      role: "Frontend & Mobile Developer",
      description: "Created web and mobile applications for various clients, specializing in responsive designs and cross-platform mobile development.",
    }
  ];

  return (
    <Layout>
      <div className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">About Me</h1>
            <p className="text-xl text-gray-600">Frontend Developer with expertise in Angular, React, and Vue</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Professional Profile</h2>
              <p className="text-lg mb-4">
                Results-driven Frontend Developer with 8+ years of experience specializing in modern JavaScript
                frameworks (Angular, React, Vue). Proven track record in technical leadership, having successfully
                led a team of 5 developers and mentored multiple junior developers throughout my career.
              </p>
              <p className="text-lg mb-6">
                Key contributor to enterprise-level design systems, with significant experience in standardizing UI components
                and improving development workflows. Recently founded a software consultancy company focused on innovating
                digital solutions for chemical engineering processes, specifically in P&ID digitalization, combining technical
                expertise with business acumen to deliver transformative results for clients.
              </p>
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
                <li className="flex">
                  <span className="font-semibold w-32">Location:</span>
                  <span>Amersfoort, Utrecht, Netherlands</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-32">Experience:</span>
                  <span>8+ years</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-32">Current Role:</span>
                  <span>Frontend Developer at Deliverect</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-32">Specialization:</span>
                  <span>Angular, React, Vue, Next.js, Node.js</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-32">Industry Focus:</span>
                  <span>Food Tech, Chemical Engineering, Banking & Finance</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-32">Languages:</span>
                  <span>English, Italian</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-32">Education:</span>
                  <span>Università Telematica Internazionale UNINETTUNO</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Journey */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Professional Journey</h2>
            <div className="relative border-l-2 border-gray-200 pl-8 ml-6">
              {professionalJourney.map((job, index) => (
                <div key={index} className="mb-10 relative">
                  <div className="absolute -left-14 w-6 h-6 bg-[#325080] rounded-full"></div>
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

          {/* Leadership Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#325080] mb-16">
            <h2 className="text-2xl font-bold mb-6">Leadership & Technical Excellence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#325080]">Team Leadership</h3>
                <p className="mb-2">
                  Led a team of 5 developers, providing mentorship, conducting code reviews, and setting technical direction for complex projects.
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
                  Applied technical expertise and industry knowledge to found a software consultancy focused on specialized industry solutions.
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
                <p className="mb-2">Angular, React, Vue, Next.js, TypeScript, JavaScript, HTML5, CSS3, Bootstrap</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <p className="mb-2">Node.js, Python, Java, Spring Framework, RESTful APIs, SQL</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Methodologies & Tools</h3>
                <p className="mb-2">Design Systems, UI Component Libraries, Mobile Development, Agile/Scrum, DevOps</p>
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
