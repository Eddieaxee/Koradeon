import { Business, SocialLink, NavigationItem } from '@/types'

export const COMPANY_INFO = {
  name: 'KÓRADEON GROUP',
  tagline: 'Building Enduring Businesses',
  description: 'A diversified holding company focused on long-term value creation across strategic industries.',
  founded: '2024',
  headquarters: 'Lagos, Nigeria',
  email: {
    general: 'info@koradeon.com',
    careers: 'careers@koradeon.com',
    investors: 'investors@koradeon.com',
    media: 'media@koradeon.com',
    brand: 'brand@koradeon.com',
    privacy: 'privacy@koradeon.com',
    legal: 'legal@koradeon.com'
  },
  phone: '+234 800 000 0000',
  social: {
    linkedin: 'https://linkedin.com/company/koradeon',
    instagram: 'https://instagram.com/koradeon',
    twitter: 'https://twitter.com/koradeon',
    youtube: 'https://youtube.com/koradeon',
    facebook: 'https://facebook.com/koradeon',
    tiktok: 'https://tiktok.com/@koradeon'
  }
}

export const BUSINESSES: Business[] = [
  {
    id: 'kavora',
    name: 'Kavora Farms',
    tagline: 'Agriculture & Food Production',
    description: 'Commercial agriculture, agri-technology, and sustainable food systems for Africa\'s growing population.',
    color: 'kavora',
    icon: 'K',
    sectors: ['Commercial Agriculture', 'Food Production', 'Agri-Technology', 'Sustainability'],
    mission: 'To revolutionize African agriculture through technology and sustainable practices, ensuring food security for generations to come.',
    vision: 'To become Africa\'s leading integrated agribusiness, transforming the continent\'s agricultural landscape while creating sustainable livelihoods.',
    status: 'launching-soon',
    websiteUrl: 'https://kavora.com'
  },
  {
    id: 'ozura',
    name: 'Ozura Resorts',
    tagline: 'Hospitality & Luxury Experiences',
    description: 'Premium resorts, wellness retreats, and destination development across Africa\'s most stunning locations.',
    color: 'ozura',
    icon: 'O',
    sectors: ['Luxury Resorts', 'Wellness Retreats', 'Tourism', 'Destination Development'],
    mission: 'To create extraordinary hospitality experiences that celebrate Africa\'s natural beauty while promoting sustainable tourism.',
    vision: 'To establish Africa\'s most prestigious hospitality brand, offering world-class experiences that showcase the continent\'s unique beauty and culture.',
    status: 'launching-soon',
    websiteUrl: 'https://ozura.com'
  },
  {
    id: 'rumara',
    name: 'Rumara Estates',
    tagline: 'Real Estate & Urban Development',
    description: 'Luxury residential, commercial development, and sustainable urban communities for modern living.',
    color: 'rumara',
    icon: 'R',
    sectors: ['Luxury Residential', 'Commercial Development', 'Urban Communities', 'Mixed-use Developments'],
    mission: 'To develop premium properties and sustainable communities that redefine modern living in Africa\'s major cities.',
    vision: 'To become Africa\'s most respected real estate development company, creating iconic properties and communities that stand the test of time.',
    status: 'active',
    websiteUrl: 'https://realty-x.vercel.app'
  },
  {
    id: 'arcovia',
    name: 'Arcovia Infrastructure',
    tagline: 'Construction & Engineering',
    description: 'Infrastructure development, civil engineering, and smart infrastructure solutions for growing cities.',
    color: 'arcovia',
    icon: 'A',
    sectors: ['Construction', 'Engineering', 'Transportation', 'Smart Infrastructure'],
    mission: 'To build critical infrastructure that powers Africa\'s growth, using innovative engineering and sustainable practices.',
    vision: 'To be the leading infrastructure development company in Africa, building the foundations for the continent\'s economic transformation.',
    status: 'launching-soon',
    websiteUrl: 'https://arcovia.com'
  }
]

export const NAVIGATION: NavigationItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Legacy', href: '/legacy' },
  { name: 'Businesses', href: '/businesses' },
  { name: 'Innovation', href: '/innovation' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Newsroom', href: '/newsroom' },
  { name: 'Insights', href: '/insights' },
  { name: 'Investors', href: '/investors' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: COMPANY_INFO.social.linkedin,
    icon: 'Linkedin',
    hoverColor: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    url: COMPANY_INFO.social.instagram,
    icon: 'Instagram',
    hoverColor: 'hover:text-pink-600'
  },
  {
    name: 'X (Twitter)',
    url: COMPANY_INFO.social.twitter,
    icon: 'Twitter',
    hoverColor: 'hover:text-slate-900'
  },
  {
    name: 'YouTube',
    url: COMPANY_INFO.social.youtube,
    icon: 'Youtube',
    hoverColor: 'hover:text-red-600'
  },
  {
    name: 'Facebook',
    url: COMPANY_INFO.social.facebook,
    icon: 'Facebook',
    hoverColor: 'hover:text-blue-700'
  },
  {
    name: 'TikTok',
    url: COMPANY_INFO.social.tiktok,
    icon: 'Music',
    hoverColor: 'hover:text-black'
  }
]

export const ENQUIRY_TYPES = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'investment', label: 'Investment Opportunity' },
  { value: 'media', label: 'Media Enquiry' },
  { value: 'career', label: 'Career Enquiry' },
  { value: 'partnership', label: 'Partnership Enquiry' },
  { value: 'other', label: 'Other' }
]

export const FOOTER_NAVIGATION = {
  businesses: BUSINESSES.map(b => ({
    name: b.name,
    href: `/businesses/${b.id}`
  })),
  company: [
    { name: 'About', href: '/about' },
    { name: 'Legacy', href: '/legacy' },
    { name: 'Innovation', href: '/innovation' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Newsroom', href: '/newsroom' },
    { name: 'Insights', href: '/insights' }
  ],
  opportunities: [
    { name: 'Careers', href: '/careers' },
    { name: 'Investors', href: '/investors' },
    { name: 'Contact', href: '/contact' },
    { name: 'Brand Centre', href: '/brand-centre' }
  ]
}

export const COLOR_CLASSES = {
  kavora: {
    bg: 'from-kavora-olive/10 to-kavora-forest/10',
    text: 'text-kavora-olive',
    hover: 'hover:text-kavora-forest',
    border: 'border-kavora-olive/20',
    button: 'bg-kavora-olive hover:bg-kavora-forest',
    gradient: 'from-kavora-olive to-kavora-forest'
  },
  ozura: {
    bg: 'from-ozura-ocean/10 to-ozura-turquoise/10',
    text: 'text-ozura-ocean',
    hover: 'hover:text-ozura-turquoise',
    border: 'border-ozura-ocean/20',
    button: 'bg-ozura-ocean hover:bg-ozura-turquoise',
    gradient: 'from-ozura-ocean to-ozura-turquoise'
  },
  rumara: {
    bg: 'from-rumara-champagne/20 to-rumara-stone/10',
    text: 'text-rumara-stone',
    hover: 'hover:text-rumara-graphite',
    border: 'border-rumara-champagne/30',
    button: 'bg-rumara-stone hover:bg-rumara-graphite',
    gradient: 'from-rumara-champagne to-rumara-stone'
  },
  arcovia: {
    bg: 'from-arcovia-steel/10 to-arcovia-blue/10',
    text: 'text-arcovia-steel',
    hover: 'hover:text-arcovia-blue',
    border: 'border-arcovia-steel/20',
    button: 'bg-arcovia-steel hover:bg-arcovia-blue',
    gradient: 'from-arcovia-steel to-arcovia-blue'
  }
}