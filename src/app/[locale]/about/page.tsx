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

export default async function About({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  // Statically import the localized data based on locale
  let professionalJourney;
  switch (locale) {
    case 'nl':
      professionalJourney = (await import('@/data/nl/journey')).professionalJourney;
      break;
    case 'it':
      professionalJourney = (await import('@/data/it/journey')).professionalJourney;
      break;
    case 'ro':
      professionalJourney = (await import('@/data/ro/journey')).professionalJourney;
      break;
    default:
      professionalJourney = (await import('@/data/en/journey')).professionalJourney;
      break;
  }

  return (
    <Layout>
      <div className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">{t('about.title')}</h1>
            <p className="text-xl text-gray-600">{t('about.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t('about.professionalProfile')}</h2>
              <div className="mb-8">
                <p className="text-lg mb-4">
                  {t('about.professionalDescription1')}
                </p>
                <p className="text-lg mb-4">
                  {t('about.professionalDescription2')}
                </p>
                <p className="text-lg">
                  {t('about.professionalDescription3')}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href={`/${locale}/projects`}
                  className="inline-flex items-center bg-[#325080] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  {t('common.viewMyProjects')}
                </Link>
                <Link
                  href={`/${locale}/skills`}
                  className="inline-flex items-center border border-[#325080] text-[#325080] px-4 py-2 rounded-md hover:bg-[#325080] hover:text-white transition-colors"
                >
                  {t('common.mySkills')}
                </Link>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">{t('about.atAGlance')}</h2>
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">{t('about.location')}:</span>
                  <span>Amersfoort, Netherlands</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">{t('about.experience')}:</span>
                  <span>8+ years</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">{t('about.currentRole')}:</span>
                  <span>Senior Software Engineer at Deliverect</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">{t('about.specialization')}:</span>
                  <span>NextJS, React, Python, FastAPI, Vue, Angular, TypeScript</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">{t('about.industryFocus')}:</span>
                  <span>Food Tech, Chemical Engineering, Banking & Finance</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">{t('about.languages')}:</span>
                  <span>English, Italian, Romanian, Dutch (A2)</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-semibold sm:w-32 mb-1 sm:mb-0">{t('about.education')}:</span>
                  <span>BSc in Computer Engineering, UNINETTUNO</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Journey */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">{t('about.professionalJourney')}</h2>
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
            <h2 className="text-2xl font-bold mb-6">{t('about.leadershipTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#325080]">{t('about.technicalLeadership')}</h3>
                <p className="mb-2">
                  {t('about.technicalLeadershipDesc')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#325080]">{t('about.enterpriseDesignSystems')}</h3>
                <p className="mb-2">
                  {t('about.enterpriseDesignSystemsDesc')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#325080]">{t('about.mentorship')}</h3>
                <p className="mb-2">
                  {t('about.mentorshipDesc')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#325080]">{t('about.entrepreneurship')}</h3>
                <p className="mb-2">
                  {t('about.entrepreneurshipDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="bg-gray-100 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">{t('about.technicalExpertise')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('home.frontend')}</h3>
                <p className="mb-2">Next.js, React, Vue.js, Angular, TypeScript, Tailwind CSS, Radix UI, vanilla-extract, styled-components, React Query, RxJS, Redux</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('home.backendData')}</h3>
                <p className="mb-2">Python, FastAPI, Celery, PostgreSQL, MongoDB, BigQuery, Node.js, RESTful APIs, Git, Docker</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('home.professionalSkills')}</h3>
                <p className="mb-2">Technical Leadership, System Architecture, Code Reviews, Mentoring, Agile/Scrum, Testing (Jest, Vitest), CI/CD, Design Systems</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{t('common.getInTouch')}</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              {t('about.getInTouchDescription')}
            </p>
            <a
              href="mailto:alexei.bostan@example.com"
              className="inline-flex items-center bg-[#325080] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              {t('common.contactMe')}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
