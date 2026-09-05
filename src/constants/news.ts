export interface NewsArticle {
  slug: string
  category: string
  title: string
  excerpt: string
  content: string[]
  date: string
  readTime: string
  author: string
  authorRole: string
  image: string
  featured: boolean
}

export const NEWS_CATEGORIES = [
  'Corporate',
  'Innovation',
  'Infrastructure',
  'Hospitality',
  'Real Estate',
  'Sustainability',
] as const

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: 'strategic-vision-african-market-expansion',
    category: 'Corporate',
    title: 'KÓRADEON GROUP Announces Strategic Vision for African Market Expansion',
    excerpt: 'The holding company reveals plans to establish a presence across key African markets, with initial focus on East and Southern Africa.',
    content: ["The holding company reveals plans to establish a presence across key African markets, with initial focus on East and Southern Africa.","The Group will prioritise East and Southern Africa as its next frontiers, identifying opportunities where its four operating pillars can create durable competitive advantage.","This marks another step in KÓRADEON GROUP’s long-term strategy to build enduring businesses across Africa through stewardship, innovation and responsible growth."],
    date: '2025-03-18',
    readTime: '5 min read',
    author: 'Group Communications',
    authorRole: 'Corporate Affairs',
    image: '/images/news-corporate.svg',
    featured: true,
  },
  {
    slug: 'kavora-precision-agriculture',
    category: 'Innovation',
    title: 'Kavora Farms Launches Precision Agriculture Initiative',
    excerpt: 'Leveraging AI and IoT technologies to revolutionise sustainable farming practices across Nigeria.',
    content: ["Leveraging AI and IoT technologies to revolutionise sustainable farming practices across Nigeria.","The flagship programme applies artificial intelligence, satellite imagery and IoT sensing to large-scale commercial farming.","This marks another step in KÓRADEON GROUP’s long-term strategy to build enduring businesses across Africa through stewardship, innovation and responsible growth."],
    date: '2025-02-27',
    readTime: '4 min read',
    author: 'Kavora Farms',
    authorRole: 'Head of Agritech',
    image: '/images/news-innovation.svg',
    featured: false,
  },
  {
    slug: 'arcovia-awarded-major-transportation-contract',
    category: 'Infrastructure',
    title: 'Arcovia Infrastructure Awarded Major Transportation Contract',
    excerpt: 'The contract represents a significant milestone in Arcovia’s mission to build critical infrastructure across Africa.',
    content: ["The contract represents a significant milestone in Arcovia’s mission to build critical infrastructure across Africa.","Arcovia has been awarded a major contract to deliver a critical transportation corridor, one of the largest project wins in the company’s history.","This marks another step in KÓRADEON GROUP’s long-term strategy to build enduring businesses across Africa through stewardship, innovation and responsible growth."],
    date: '2025-01-30',
    readTime: '3 min read',
    author: 'Arcovia Infrastructure',
    authorRole: 'Project Office',
    image: '/images/news-infrastructure.svg',
    featured: false,
  },
  {
    slug: 'ozura-sustainable-luxury-tourism',
    category: 'Hospitality',
    title: 'Ozura Resorts Reveals Vision for Sustainable Luxury Tourism',
    excerpt: 'New concept combines world-class hospitality with environmental stewardship, setting new standards for African tourism.',
    content: ["New concept combines world-class hospitality with environmental stewardship, setting new standards for African tourism.","Ozura has unveiled its vision for a new generation of sustainable luxury hospitality, designed to celebrate Africa’s natural landscape.","This marks another step in KÓRADEON GROUP’s long-term strategy to build enduring businesses across Africa through stewardship, innovation and responsible growth."],
    date: '2024-12-15',
    readTime: '4 min read',
    author: 'Ozura Resorts',
    authorRole: 'Chief Development Officer',
    image: '/images/business-ozura.svg',
    featured: false,
  },
  {
    slug: 'rumara-affordable-housing-initiative',
    category: 'Real Estate',
    title: 'Rumara Estates Launches Affordable Housing Initiative',
    excerpt: 'Initiative aims to develop 5,000 affordable homes across major African cities over the next five years.',
    content: ["Initiative aims to develop 5,000 affordable homes across major African cities over the next five years.","Rumara Estates has announced an ambitious affordable housing programme targeting 5,000 homes across major African cities within five years.","This marks another step in KÓRADEON GROUP’s long-term strategy to build enduring businesses across Africa through stewardship, innovation and responsible growth."],
    date: '2024-11-20',
    readTime: '3 min read',
    author: 'Rumara Estates',
    authorRole: 'Head of Developments',
    image: '/images/business-rumara.svg',
    featured: false,
  },
  {
    slug: 'koradeon-commits-net-zero-2040',
    category: 'Sustainability',
    title: 'KÓRADEON GROUP Commits to Net-Zero Operations by 2040',
    excerpt: 'Comprehensive sustainability strategy outlines path to carbon neutrality across all business operations.',
    content: ["Comprehensive sustainability strategy outlines path to carbon neutrality across all business operations.","KÓRADEON GROUP has formalised a Group-wide commitment to achieve net-zero operational emissions by 2040.","This marks another step in KÓRADEON GROUP’s long-term strategy to build enduring businesses across Africa through stewardship, innovation and responsible growth."],
    date: '2024-10-02',
    readTime: '5 min read',
    author: 'Group Communications',
    authorRole: 'Head of ESG',
    image: '/images/news-corporate.svg',
    featured: true,
  }
]

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.slug === slug)
}

export function getRelatedArticles(
  slug: string,
  category: string,
  limit = 2,
): NewsArticle[] {
  return NEWS_ARTICLES.filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === category ? 1 : 0
      const bScore = b.category === category ? 1 : 0
      return bScore - aScore
    })
    .slice(0, limit)
}
