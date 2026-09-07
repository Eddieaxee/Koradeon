/**
 * KÓRADEON — Portfolio Projects data.
 * Shared across Portfolio and Business pages to connect projects to their businesses.
 */

import { IMAGES } from '@/constants/assets'

export interface Project {
  id: string
  slug: string
  title: string
  category: string
  businessId: 'kavora' | 'ozura' | 'rumara' | 'arcovia'
  businessName: string
  status: 'In Development' | 'Planning' | 'Research' | 'Concept' | 'Active'
  image: string
  imageAlt: string
  shortDescription: string
  overview: string
  description: string
  highlights: string[]
  stats?: { value: string; label: string }[]
  location?: string
  completion?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'kavora-innovation-hub',
    slug: 'agricultural-innovation-hub',
    title: 'Agricultural Innovation Hub',
    category: 'Agriculture',
    businessId: 'kavora',
    businessName: 'Kavora Farms',
    status: 'In Development',
    image: IMAGES.kavora,
    imageAlt: 'Wheat field at golden hour',
    shortDescription: 'A state-of-the-art agricultural research and innovation center focused on sustainable farming.',
    overview: 'The Kavora Agricultural Innovation Hub catalyses the transformation of African agriculture through applied research.',
    description: 'Spanning over 2,000 hectares, the Hub integrates precision irrigation, soil health monitoring, and AI-driven yield modelling.',
    highlights: ['Precision irrigation', 'AI crop monitoring', 'Farmer training', 'University partnerships'],
    stats: [{ value: '2,000ha', label: 'Site area' }, { value: '40%', label: 'Water savings' }, { value: '2,000', label: 'Farmers/year' }],
    location: 'Nigeria',
    completion: 'Q4 2026',
  },
  {
    id: 'kavora-smart-ag',
    slug: 'smart-agriculture-initiative',
    title: 'Smart Agriculture Initiative',
    category: 'Agriculture',
    businessId: 'kavora',
    businessName: 'Kavora Farms',
    status: 'Research',
    image: IMAGES.farmer,
    imageAlt: 'Field agronomist reviewing crop data',
    shortDescription: 'IoT sensors, AI-driven analytics, and automation for crop management.',
    overview: 'Kavora technology backbone deploying IoT, drones, and machine learning.',
    description: 'Unified digital ecosystem with soil sensors, weekly aerial surveys, and ML yield predictions.',
    highlights: ['IoT sensors', 'Drone surveys', '92% prediction accuracy', 'Real-time mobile app'],
    stats: [{ value: '1,500ha', label: 'Coverage' }, { value: '92%', label: 'Accuracy' }],
    location: 'Nigeria',
    completion: 'Q2 2025',
  },
  {
    id: 'ozura-coastal',
    slug: 'coastal-resort-development',
    title: 'Coastal Resort Development',
    category: 'Hospitality',
    businessId: 'ozura',
    businessName: 'Ozura Resorts',
    status: 'Planning',
    image: IMAGES.ozuraBeach,
    imageAlt: 'Turquoise shoreline',
    shortDescription: 'A luxury beachfront resort combining world-class hospitality with sustainable design.',
    overview: 'The first Ozura-branded resort setting the standard for sustainable luxury hospitality.',
    description: '120 guest villas, signature restaurant, world-class spa, and marine conservation centre.',
    highlights: ['120 villas', 'Zero-waste kitchen', 'Marine conservation', '60% local materials'],
    stats: [{ value: '120', label: 'Villas' }, { value: '12km', label: 'Coastline' }],
    location: 'West Africa Coast',
    completion: '2027',
  },
  {
    id: 'ozura-wellness',
    slug: 'wellness-retreat-concept',
    title: 'Wellness Retreat Concept',
    category: 'Hospitality',
    businessId: 'ozura',
    businessName: 'Ozura Resorts',
    status: 'Concept',
    image: IMAGES.luxuryPool,
    imageAlt: 'Resort pool at dusk',
    shortDescription: 'A luxury wellness retreat combining nature, spa treatments, and holistic health.',
    overview: 'Reimagining the African wellness journey with traditional healing and modern science.',
    description: 'A boutique 40-suite retreat with indigenous botanical treatments and meditation gardens.',
    highlights: ['40 suites', 'Botanical spa', 'Personalised programmes', 'Meditation gardens'],
    stats: [{ value: '40', label: 'Suites' }, { value: '15', label: 'Treatment rooms' }],
    location: 'Highland site',
    completion: '2028',
  },
  {
    id: 'rumara-mixed-use',
    slug: 'urban-mixed-use-development',
    title: 'Urban Mixed-Use Development',
    category: 'Real Estate',
    businessId: 'rumara',
    businessName: 'Rumara Estates',
    status: 'Active',
    image: IMAGES.buildingModern,
    imageAlt: 'Contemporary residential architecture',
    shortDescription: 'Mixed-use development integrating residential, commercial, and public spaces.',
    overview: 'Flagship development with premium residential, Grade-A office, and curated retail.',
    description: '800 residential units, 25,000 sqm office space, retail promenade, and central plaza.',
    highlights: ['800 units', '25,000 sqm office', 'Central plaza', 'Smart building systems'],
    stats: [{ value: '800', label: 'Units' }, { value: '25,000m²', label: 'Office' }],
    location: 'Lagos, Nigeria',
    completion: '2025-2027',
  },
  {
    id: 'arcovia-transport',
    slug: 'transportation-infrastructure',
    title: 'Transportation Infrastructure',
    category: 'Infrastructure',
    businessId: 'arcovia',
    businessName: 'Arcovia Infrastructure',
    status: 'Planning',
    image: IMAGES.arcoviaBridge,
    imageAlt: 'Bridge engineering',
    shortDescription: 'Critical transportation infrastructure for connectivity and economic growth.',
    overview: 'Addressing Africa need for reliable, high-capacity corridors between urban centres.',
    description: '45km elevated highway, two major bridges, and integrated drainage infrastructure.',
    highlights: ['45km highway', 'Two bridges', 'Integrated drainage', '60% commute reduction'],
    stats: [{ value: '45km', label: 'Corridor' }, { value: '60%', label: 'Reduction' }],
    location: 'Lagos Region',
    completion: '2026-2028',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug)
}

export function getProjectsByBusiness(businessId: string): Project[] {
  return PROJECTS.filter(p => p.businessId === businessId)
}

export function getProjectsByCategory(category: string): Project[] {
  return PROJECTS.filter(p => p.category === category)
}
