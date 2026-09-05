import { BUSINESSES } from '@/constants/brand'

export interface SearchResult {
  title: string
  href: string
  category: string
  description?: string
  keywords?: string[]
}

/**
 * Central search index — single source of truth for the command palette
 * and future site-wide search. Extend entries as pages grow.
 */
export const searchIndex: SearchResult[] = [
  // Pages
  { title: 'About KÓRADEON', href: '/about', category: 'Company', description: 'Who we are, vision, values and leadership', keywords: ['company', 'story', 'vision', 'mission'] },
  { title: 'Our Legacy', href: '/legacy', category: 'Company', description: 'Why KÓRADEON exists — the manifesto', keywords: ['manifesto', 'stewardship', 'generations'] },
  { title: 'Our Businesses', href: '/businesses', category: 'Company', description: 'The four pillars of the ecosystem', keywords: ['pillars', 'subsidiaries', 'ecosystem'] },
  { title: 'Innovation', href: '/innovation', category: 'Company', description: 'Technology, research and future thinking', keywords: ['technology', 'ai', 'research', 'r&d'] },
  { title: 'Portfolio', href: '/portfolio', category: 'Company', description: 'Projects and developments across the group', keywords: ['projects', 'developments'] },
  { title: 'Newsroom', href: '/newsroom', category: 'Media', description: 'Announcements, press releases and coverage', keywords: ['news', 'press', 'announcements'] },
  { title: 'Insights', href: '/insights', category: 'Media', description: 'Thought leadership and long-form essays', keywords: ['articles', 'essays', 'opinion'] },
  { title: 'Investors', href: '/investors', category: 'Stakeholders', description: 'Reports, governance and shareholder information', keywords: ['reports', 'finance', 'governance', 'esg'] },
  { title: 'Careers', href: '/careers', category: 'Opportunities', description: 'Open positions and life at KÓRADEON', keywords: ['jobs', 'hiring', 'graduate', 'internship'] },
  { title: 'Brand Centre', href: '/brand-centre', category: 'Brand', description: 'Logos, colours, typography and media assets', keywords: ['logo', 'assets', 'downloads', 'press kit'] },
  { title: 'Contact', href: '/contact', category: 'Contact', description: 'Offices, enquiries and social channels', keywords: ['email', 'phone', 'office', 'enquiry'] },
  { title: 'Privacy Policy', href: '/privacy', category: 'Legal', keywords: ['privacy', 'data', 'gdpr'] },
  { title: 'Terms of Service', href: '/terms', category: 'Legal', keywords: ['terms', 'legal'] },
  // Businesses (generated so future subsidiaries appear automatically)
  ...BUSINESSES.map((b) => ({
    title: b.name,
    href: `/businesses#${b.id}`,
    category: 'Businesses',
    description: b.tagline,
    keywords: [b.name.toLowerCase(), b.tagline.toLowerCase(), ...b.sectors.map((s) => s.toLowerCase())],
  })),
]

export function searchSite(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) return searchIndex.slice(0, limit)
  const scored = searchIndex
    .map((item) => {
      let score = 0
      if (item.title.toLowerCase().includes(q)) score += 10
      if (item.category.toLowerCase().includes(q)) score += 5
      if (item.description?.toLowerCase().includes(q)) score += 3
      if (item.keywords?.some((k) => k.includes(q))) score += 4
      return { item, score }
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map((r) => r.item)
}
