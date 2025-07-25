import { locales } from '@/i18n'

export const dynamic = 'force-static'

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexeibostan.com'
  
  const pages = ['', '/about', '/projects', '/skills']
  
  const urls = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  )

  return urls
}
