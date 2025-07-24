import React from "react";
import Layout from "@/components/layout/Layout";
import { getProjectsByCompany, companyWebsites, companyColors } from "@/data/projectsByCompany";
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n';

type Props = {
  params: Promise<{ locale: string }>;
};

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Projects({ params }: Props) {
  const { locale } = await params;
  const projectsByCompany = getProjectsByCompany();
  const t = await getTranslations({ locale });

  // Role color mapping
  const roleColors: Record<string, string> = {
    "SE": "bg-[#325080]",
    "FE": "bg-[#e16642]",
    "WD": "bg-[#c18f68]",
    "MD": "bg-[#7494be]"
  };

  return (
    <Layout>
      <div className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">{t('projects.title')}</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              {t('projects.description')}
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
                      {t('projects.visitCompanyWebsite')}
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
          <h2 className="text-xl font-bold mb-4">{t('projects.roleLegend')}</h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-[#325080] text-sm">
                SE
              </div>
              <span className="ml-2">{t('projects.softwareEngineerFullStack')}</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-[#e16642] text-sm">
                FE
              </div>
              <span className="ml-2">{t('projects.frontendDeveloper')}</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-[#c18f68] text-sm">
                WD
              </div>
              <span className="ml-2">{t('projects.webDeveloper')}</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-[#7494be] text-sm">
                MD
              </div>
              <span className="ml-2">{t('projects.mobileDeveloper')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 px-8 bg-[#325080] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{t('projects.ctaTitle')}</h2>
          <p className="text-lg mb-6">
            {t('projects.ctaDescription')}
          </p>
          <a
            href="mailto:alexei.bostan@example.com"
            className="inline-flex items-center bg-white text-[#325080] px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            {t('common.contactMe')}
          </a>
        </div>
      </div>
    </Layout>
  );
}
