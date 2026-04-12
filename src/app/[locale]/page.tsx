import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { CraftSection } from '@/components/sections/CraftSection';
import { AISection } from '@/components/sections/AISection';
import { ConnectSection } from '@/components/sections/ConnectSection';
import { aiTools } from '@/data/aiTools';
import { locales } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Load locale-specific data (server-side only)
  let projects, professionalJourney, skills;

  switch (locale) {
    case 'nl':
      projects = (await import('@/data/nl/projects')).projects;
      professionalJourney = (await import('@/data/nl/journey')).professionalJourney;
      skills = (await import('@/data/nl/skills')).skills;
      break;
    case 'it':
      projects = (await import('@/data/it/projects')).projects;
      professionalJourney = (await import('@/data/it/journey')).professionalJourney;
      skills = (await import('@/data/it/skills')).skills;
      break;
    case 'ro':
      projects = (await import('@/data/ro/projects')).projects;
      professionalJourney = (await import('@/data/ro/journey')).professionalJourney;
      skills = (await import('@/data/ro/skills')).skills;
      break;
    default:
      projects = (await import('@/data/en/projects')).projects;
      professionalJourney = (await import('@/data/en/journey')).professionalJourney;
      skills = (await import('@/data/en/skills')).skills;
  }

  return (
    <>
      <div className="film-grain" aria-hidden="true" />
      <div className="dot-grid" aria-hidden="true" />
      <HeroSection />
      <TimelineSection journey={professionalJourney} />
      <WorkSection projects={projects} />
      <CraftSection skills={skills} />
      <AISection aiTools={aiTools} />
      <ConnectSection />
    </>
  );
}
