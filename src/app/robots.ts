export const dynamic = 'force-static'

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alexeibostan.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
