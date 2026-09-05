import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/config/site'

interface PageMetaInput {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
}

/**
 * Builds consistent, canonical metadata for every page.
 * Single place to adjust SEO behaviour across the site.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  image = '/images/og-image.svg',
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = `${SITE_CONFIG.url}${path}`

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
