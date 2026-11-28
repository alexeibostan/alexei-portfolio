/**
 * Single source of truth for career-wide facts that appear in several places
 * (hero, SEO descriptions, structured data). Update here, not in copy.
 */

/** First professional role: Mobilesoft, July 2016. */
export const CAREER_START = new Date(2016, 6, 1);

/** Full years of professional experience, computed at build time. */
export function yearsOfExperience(now: Date = new Date()): number {
  let years = now.getFullYear() - CAREER_START.getFullYear();
  const anniversary = new Date(now.getFullYear(), CAREER_START.getMonth(), CAREER_START.getDate());
  if (now < anniversary) years -= 1;
  return years;
}
