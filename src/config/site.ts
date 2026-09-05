import type { Metadata } from 'next'

export const SITE_CONFIG = {
  name: 'KÓRADEON GROUP',
  url: 'https://koradeon.com',
  description: 'A diversified holding company focused on long-term value creation across strategic industries.',
  keywords: [
    'KÓRADEON',
    'Kavora Farms',
    'Ozura Resorts',
    'Rumara Estates',
    'Arcovia Infrastructure',
    'holding company',
    'investment',
    'Africa',
    'agriculture',
    'hospitality',
    'real estate',
    'infrastructure'
  ],
  authors: [{ name: 'KÓRADEON GROUP' }],
  creator: 'KÓRADEON GROUP',
  publisher: 'KÓRADEON GROUP',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@koradeon'
}

export const SEO_CONFIG: { defaultMetadata: Metadata } = {
  defaultMetadata: {
    title: {
      default: 'KÓRADEON GROUP | Building Enduring Businesses',
      template: '%s | KÓRADEON GROUP'
    },
    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    authors: SITE_CONFIG.authors,
    creator: SITE_CONFIG.creator,
    publisher: SITE_CONFIG.publisher,
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    metadataBase: new URL(SITE_CONFIG.url),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      title: {
        default: 'KÓRADEON GROUP | Building Enduring Businesses',
        template: '%s | KÓRADEON GROUP'
      },
      description: SITE_CONFIG.description,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: {
        default: 'KÓRADEON GROUP | Building Enduring Businesses',
        template: '%s | KÓRADEON GROUP'
      },
      description: SITE_CONFIG.description,
      images: [SITE_CONFIG.ogImage],
      creator: SITE_CONFIG.twitterHandle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || ''
    }
  }
}

export const PWA_CONFIG = {
  name: SITE_CONFIG.name,
  shortName: 'KÓRADEON',
  description: SITE_CONFIG.description,
  backgroundColor: '#FDF9F3',
  themeColor: '#1F1B18',
  orientation: 'portrait',
  display: 'standalone',
  startUrl: '/',
  scope: '/',
  icons: [
    {
      src: '/images/icon-72x72.png',
      sizes: '72x72',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: '/images/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: '/images/icon-128x128.png',
      sizes: '128x128',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: '/images/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: '/images/icon-152x152.png',
      sizes: '152x152',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: '/images/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: '/images/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: '/images/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any'
    }
  ],
  categories: ['business', 'finance'],
  lang: 'en-US',
  dir: 'ltr'
}

export const ANALYTICS_CONFIG = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || '',
  enabled: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true'
}

export const NAVIGATION_CONFIG = {
  sticky: true,
  transparentOnTop: true,
  showSearch: true,
  showCTA: false
}

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8
  },
  easing: {
    easeOut: [0.19, 1, 0.22, 1],
    easeInOut: [0.87, 0, 0.13, 1],
    easeOutQuart: [0.25, 0.46, 0.45, 0.94]
  },
  scroll: {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  }
}