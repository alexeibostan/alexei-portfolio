import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/projects";
import { companies } from "@/data/companies";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="py-16 px-8 bg-[#325080] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Senior Software Engineer
          </h1>
          <p className="text-lg max-w-2xl mb-8">
            Results-driven developer with 8+ years of experience mastering both frontend and backend technologies. 
            Recently promoted to Senior Developer at Deliverect, where I build sophisticated analytics platforms using 
            React/Next.js and Python/FastAPI while mentoring team members and architecting scalable solutions.
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
                  <div className={`w-12 h-12 rounded-md flex items-center justify-center text-white 
                    ${project.role === 'SE' ? 'bg-[#325080]' : 
                      project.role === 'FE' ? 'bg-[#e16642]' : 
                      project.role === 'WD' ? 'bg-[#c18f68]' : 
                      'bg-[#7494be]'}`}>
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
                  <span>Next.js & React</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Vue.js</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Angular (2-8)</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>CSS / Tailwind / Radix UI</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Backend & Data</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Python / FastAPI / Celery</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>PostgreSQL / MongoDB</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>BigQuery</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>REST APIs / Data Pipelines</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Node.js</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Professional Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Technical Leadership</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>System Architecture</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Code Reviews & Mentoring</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Agile / Scrum Practices</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#325080] text-white flex-shrink-0 flex items-center justify-center mr-2">✓</span>
                  <span>Testing & CI/CD</span>
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

          <div className="grid md:grid-cols-5 gap-4">
            {companies.map((company, index) => company.url ? (
              <a key={index} href={company.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 shadow-sm text-center hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <p className="text-gray-600">{company.period}</p>
                <span className="mt-2 inline-block text-sm text-blue-600">Visit Website</span>
              </a>
            ) : (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <p className="text-gray-600">{company.period}</p>
              </div>
            ))}
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
