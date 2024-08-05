import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const url = process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${url}/sitemap.xml`,
  }
}