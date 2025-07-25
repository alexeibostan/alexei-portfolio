import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n';

type Props = {
  params: Promise<{ locale: string }>;
};

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Skills({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  // Statically import the localized data based on locale
  let skills;
  switch (locale) {
    case 'nl':
      skills = (await import('@/data/nl/skills')).skills;
      break;
    case 'it':
      skills = (await import('@/data/it/skills')).skills;
      break;
    case 'ro':
      skills = (await import('@/data/ro/skills')).skills;
      break;
    default:
      skills = (await import('@/data/en/skills')).skills;
      break;
  }
  
  // Get unique categories for filtering
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <Layout>
      <div className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">{t('skills.mainTitle')}</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              {t('skills.description')}
            </p>
          </div>

          {/* Hexagonal Skills Grid */}
          <div className="py-12">
            <div className="mb-8 flex flex-wrap gap-4 justify-center">
              {categories.map(category => (
                <button 
                  key={category}
                  className="px-4 py-2 rounded-full border border-[#325080] text-[#325080] hover:bg-[#325080] hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="w-32 h-32 m-2 flex items-center justify-center text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer relative group"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    backgroundColor: [
                      '#DBEAFE', // stronger light blue
                      '#C7D2FE', // stronger indigo
                      '#D1FAE5', // stronger teal
                      '#E0E7FF', // stronger purple
                      '#EFF6FF', // stronger sky blue
                    ][index % 5],
                    border: '1px solid #E5E7EB'
                  }}
                >
                  <div className="p-2">
                    <div className="font-semibold text-sm mb-1 text-gray-800 group-hover:text-[#325080]">{skill.name}</div>
                    <div className="text-xs text-gray-600">{skill.years} {t('skills.years')}</div>
                    <div className="text-xs text-[#325080] mt-1 font-medium">{skill.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills Section */}
          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">{t('skills.otherSkillsKnowledge')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('skills.languages')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#325080] mr-2"></span>
                    <span>{t('skills.english')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#325080] mr-2"></span>
                    <span>{t('skills.italian')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#325080] mr-2"></span>
                    <span>{t('skills.romanian')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#325080] mr-2"></span>
                    <span>{t('skills.dutch')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('skills.professional')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#325080] mr-2"></span>
                    <span>{t('skills.agileScrum')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#325080] mr-2"></span>
                    <span>{t('skills.teamMentoring')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#325080] mr-2"></span>
                    <span>{t('skills.codeReview')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#325080] mr-2"></span>
                    <span>{t('skills.technicalDocumentation')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Awards/Recognition */}
          <div className="mt-16 mb-16 bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#325080]">
            <h2 className="text-2xl font-bold mb-6">{t('skills.recognition')}</h2>
            <div className="flex items-center">
              <div className="mr-6 bg-[#325080] text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{t('skills.hackathonAward')}</h3>
                <p className="text-gray-600">{t('skills.sentimentAnalysis')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Highlight */}
      <div className="py-12 px-8 bg-[#325080] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">{t('skills.skillsInAction')}</h2>
            <p className="text-lg max-w-2xl mx-auto">
              {t('skills.skillsInActionDescription')}
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center bg-white text-[#325080] px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              {t('skills.viewProjects')}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
