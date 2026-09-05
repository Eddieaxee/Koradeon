import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://koradeon.com'
  
  const routes = [
    '',
    '/about',
    '/legacy',
    '/businesses',
    '/innovation',
    '/portfolio',
    '/newsroom',
    '/insights',
    '/investors',
    '/careers',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}