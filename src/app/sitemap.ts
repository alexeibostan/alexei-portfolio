import { execSync } from 'node:child_process'
import type { MetadataRoute } from 'next'
import { locales } from '@/i18n'

export const dynamic = 'force-static'

const lastModified: string = (() => {
  try {
    return execSync('git log -1 --format=%cI', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim()
  } catch {
    return new Date().toISOString()
  }
})()

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexeibostan.com'

  const languages = Object.fromEntries(
    locales.map((l) => [l, `${baseUrl}/${l}/`])
  )

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 1,
    alternates: { languages },
  }))
}
