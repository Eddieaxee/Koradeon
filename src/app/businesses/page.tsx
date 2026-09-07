'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/constants/assets'



const businesses = [
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
    status: 'Launching Soon',
    image: IMAGES.kavora
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
    status: 'Launching Soon',
    image: IMAGES.ozuraBeach
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
    status: 'Visit Website',
    website: 'https://realty-x.vercel.app',
    image: IMAGES.buildingModern
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
    status: 'Launching Soon',
    image: IMAGES.arcoviaBridge
  }
]

const colorClasses = {
  kavora: {
    bg: 'from-kavora-olive/10 to-kavora-forest/10',
    text: 'text-kavora-olive',
    hover: 'hover:text-kavora-forest',
    border: 'border-kavora-olive/20',
    button: 'bg-kavora-olive hover:bg-kavora-forest'
  },
  ozura: {
    bg: 'from-ozura-ocean/10 to-ozura-turquoise/10',
    text: 'text-ozura-ocean',
    hover: 'hover:text-ozura-turquoise',
    border: 'border-ozura-ocean/20',
    button: 'bg-ozura-ocean hover:bg-ozura-turquoise'
  },
  rumara: {
    bg: 'from-rumara-champagne/20 to-rumara-stone/10',
    text: 'text-rumara-stone',
    hover: 'hover:text-rumara-graphite',
    border: 'border-rumara-champagne/30',
    button: 'bg-rumara-stone hover:bg-rumara-graphite'
  },
  arcovia: {
    bg: 'from-arcovia-steel/10 to-arcovia-blue/10',
    text: 'text-arcovia-steel',
    hover: 'hover:text-arcovia-blue',
    border: 'border-arcovia-steel/20',
    button: 'bg-arcovia-steel hover:bg-arcovia-blue'
  }
}

export default function BusinessesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="label mb-6 block">Our Businesses</span>
            <h1 className="heading-lg text-stone-900 mb-8">
              Four pillars of excellence
            </h1>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                KÓRADEON GROUP's ecosystem is built on four foundational businesses, each a leader in its respective industry. Together, they form a diversified portfolio designed for long-term sustainable growth.
              </p>
              <p>
                Each business operates with its own unique identity, leadership, and strategy, while contributing to the collective strength of the KÓRADEON ecosystem.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Businesses Grid */}
      <div className="space-y-0">
        {businesses.map((business, index) => {
          const colors = colorClasses[business.color as keyof typeof colorClasses]
          
          return (
            <section
              key={business.id}
              id={business.id}
              className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-ivory-50'}`}
            >
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Business Info */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={index % 2 === 1 ? 'lg:order-2' : ''}
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${colors.bg} ${colors.text} mb-6`}>
                      <span className="text-4xl font-serif">{business.icon}</span>
                    </div>
                    
                    <span className="label mb-4 block">{business.tagline}</span>
                    <h2 className="heading-md text-stone-900 mb-4">{business.name}</h2>
                    <p className="body-lg text-stone-700 mb-8">{business.description}</p>

                    {/* Sectors */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold tracking-wider uppercase text-stone-900 mb-4">Key Sectors</h3>
                      <div className="flex flex-wrap gap-2">
                        {business.sectors.map((sector) => (
                          <span
                            key={sector}
                            className={`px-4 py-2 rounded-full border ${colors.border} ${colors.text} text-sm font-medium`}
                          >
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="space-y-4 mb-8">
                      <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-stone-900 mb-2">Mission</h3>
                        <p className="text-stone-700">{business.mission}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-stone-900 mb-2">Vision</h3>
                        <p className="text-stone-700">{business.vision}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {business.website ? (
                        <a
                          href={business.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center px-8 py-4 ${colors.button} text-ivory-50 font-medium tracking-wide rounded-lg transition-all duration-300 hover:shadow-soft`}>
                          <ExternalLink className="w-5 h-5 mr-2" />
                          {business.status}
                        </a>
                      ) : (
                        <button
                          disabled
                          className={`inline-flex items-center justify-center px-8 py-4 ${colors.button} text-ivory-50 font-medium tracking-wide rounded-lg opacity-50 cursor-not-allowed`}>
                          <ExternalLink className="w-5 h-5 mr-2" />
                          {business.status}
                        </button>
                      )}
                      <Link
                        href={`/businesses/${business.id}`}
                        className={`inline-flex items-center justify-center px-8 py-4 border-2 ${colors.border} ${colors.text} font-medium tracking-wide rounded-lg transition-all duration-300 ${colors.hover}`}>
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </motion.div>

                  {/* Business Visual */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    <div className={`aspect-square bg-gradient-to-br ${colors.bg} rounded-3xl overflow-hidden relative`}>
                      <Image src={business.image} alt={`${business.name} — ${business.tagline}`} fill unoptimized sizes="(max-width: 640px) 100vw, 560px" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" aria-hidden="true" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Ecosystem CTA */}
      <section className="section-padding bg-stone-900 text-ivory-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-lg mb-6">
                One ecosystem. Infinite possibilities.
              </h2>
              <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
                Our four businesses work together as an integrated ecosystem, creating synergies and opportunities that strengthen our collective position in the market.
              </p>
              <Link href="/about" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">
                Discover Our Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
