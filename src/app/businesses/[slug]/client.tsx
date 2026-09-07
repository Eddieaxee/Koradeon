'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { type Business } from '@/types'
import { COLOR_CLASSES } from '@/constants/brand'
import { getProjectsByBusiness } from '@/constants/projects'
import { IMAGES } from '@/constants/assets'

interface BusinessPageClientProps {
  business: Business
}

const BUSINESS_IMAGES: Record<string, { hero: string; heroAlt: string; gallery: string[] }> = {
  kavora: { hero: IMAGES.kavora, heroAlt: 'Golden wheat field', gallery: [IMAGES.farmer, IMAGES.energy, IMAGES.innovationTech] },
  ozura: { hero: IMAGES.ozuraBeach, heroAlt: 'Tropical coastline', gallery: [IMAGES.luxuryPool, IMAGES.ozuraTropical, IMAGES.ozura] },
  rumara: { hero: IMAGES.buildingModern, heroAlt: 'Modern architecture', gallery: [IMAGES.interior, IMAGES.rumara, IMAGES.buildingWhite] },
  arcovia: { hero: IMAGES.arcoviaBridge, heroAlt: 'Bridge infrastructure', gallery: [IMAGES.arcovia, IMAGES.cityDusk, IMAGES.cityHarbour] },
}

export default function BusinessPageClient({ business }: BusinessPageClientProps) {
  const colors = COLOR_CLASSES[business.id as keyof typeof COLOR_CLASSES]
  const projects = getProjectsByBusiness(business.id)
  const images = BUSINESS_IMAGES[business.id] || BUSINESS_IMAGES.kavora
  const isComingSoon = business.status === 'launching-soon'

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image src={images.hero} alt={images.heroAlt} fill unoptimized priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-stone-900/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Link href="/businesses" className="inline-flex items-center gap-2 text-stone-300 hover:text-ivory-50 mb-6 transition-colors">
                <ArrowRight className="w-4 h-4 rotate-180" /> Back to Businesses
              </Link>
              <span className={`px-3 py-1 ${colors.button} text-ivory-50 text-[11px] font-medium tracking-[0.15em] uppercase rounded-full`}>{business.tagline}</span>
              <h1 className="heading-xl text-ivory-50 mt-4 mb-4">{business.name}</h1>
              <p className="text-stone-300 text-xl max-w-2xl">{business.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      {isComingSoon && (
        <section className="bg-champagne-500 text-stone-900 py-4">
          <div className="container-custom">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5" />
              <p className="font-medium"><span className="font-semibold">{business.name}</span> is launching soon</p>
            </div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="label mb-4 block">Overview</span>
              <h2 className="heading-md text-stone-900 mb-6">About {business.name}</h2>
              <p className="body-lg text-stone-700 mb-6">{business.description}</p>
              <div className="space-y-4">
                <div><h3 className="text-sm font-semibold text-stone-900 mb-2">Mission</h3><p className="text-stone-600">{business.mission}</p></div>
                <div><h3 className="text-sm font-semibold text-stone-900 mb-2">Vision</h3><p className="text-stone-600">{business.vision}</p></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src={images.gallery[0]} alt={`${business.name} operations`} fill unoptimized sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className={`section-padding bg-gradient-to-br ${colors.bg}`}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <span className="label mb-4 block">Sectors</span>
            <h2 className="heading-md text-stone-900">Areas of operation</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {business.sectors.map((sector: string, index: number) => (
              <motion.div key={sector} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-xl p-6 text-center shadow-soft">
                <p className="font-medium text-stone-900">{sector}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      {projects.length > 0 && (
        <section className="section-padding bg-ivory-50">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
              <span className="label mb-4 block">Projects</span>
              <h2 className="heading-md text-stone-900">Key initiatives</h2>
              <p className="body-md text-stone-600 mt-4 max-w-2xl mx-auto">Explore the projects currently underway at {business.name}.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }} className="bg-white border border-stone-200 rounded-2xl overflow-hidden group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image src={project.image} alt={project.imageAlt} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-stone-900/90 text-ivory-50 text-[11px] font-medium tracking-[0.15em] uppercase rounded-full">{project.status}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif text-stone-900 mb-3 group-hover:text-champagne-600 transition-colors">{project.title}</h3>
                    <p className="text-stone-600 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
                    <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-900 hover:text-champagne-600 transition-colors">
                      View project <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/portfolio" className={`inline-flex items-center gap-2 ${colors.button} text-ivory-50 px-6 py-3 rounded-lg font-medium tracking-wide transition-all duration-300 hover:shadow-soft`}>
                View all projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-stone-900 text-ivory-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="heading-lg mb-6">Interested in {business.name}?</h2>
              <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
                {business.status === 'active' ? 'Visit our website or get in touch to learn more.' : 'Stay tuned for updates or contact us to learn more about this business.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {business.status === 'active' && business.websiteUrl ? (
                  <a href={business.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">
                    Visit Website <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                ) : (
                  <Link href="/contact" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">Get in Touch <ArrowRight className="ml-2 w-5 h-5" /></Link>
                )}
                <Link href="/businesses" className="btn-secondary border-ivory-50 text-ivory-50 hover:bg-ivory-50 hover:text-stone-900">All Businesses</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
