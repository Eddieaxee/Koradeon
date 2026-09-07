'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Filter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { PROJECTS } from '@/constants/projects'

const categories = ['All', 'Agriculture', 'Hospitality', 'Real Estate', 'Infrastructure']

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory)

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
            <span className="label mb-6 block">Portfolio</span>
            <h1 className="heading-lg text-stone-900 mb-8">
              Building the future, today
            </h1>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                Our portfolio spans across multiple sectors and geographies, reflecting our commitment to diversified, long-term value creation. Each project represents our dedication to excellence, innovation, and sustainable development.
              </p>
              <p>
                From concept to completion, we approach every project with the same long-term perspective that defines KÓRADEON GROUP.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-ivory-50 border-b border-stone-200">
        <div className="container-custom">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-stone-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-stone-900 text-ivory-50'
                        : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-medium transition-all duration-500 group"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-stone-900/90 backdrop-blur text-ivory-50 text-[11px] font-medium tracking-[0.15em] uppercase rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs">
                    <span className="font-medium tracking-wider uppercase text-champagne-600">{project.category}</span>
                    <span className="h-px w-5 bg-stone-300" aria-hidden="true" />
                    <span className="text-stone-500">{project.businessName}</span>
                  </div>
                  <h3 className="text-xl font-serif text-stone-900 mb-3 group-hover:text-champagne-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-stone-700 mb-5 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-900 hover:text-champagne-600 transition-colors duration-300"
                  >
                    View project
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Our Impact</span>
            <h2 className="heading-md text-stone-900 mb-4">Portfolio at a glance</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4', label: 'Foundational Businesses' },
              { value: '6+', label: 'Active Projects' },
              { value: '4', label: 'Industry Sectors' },
              { value: '1', label: 'Unified Vision' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl font-serif text-champagne-600 mb-2">{stat.value}</div>
                <div className="text-stone-600 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="label mb-6 block">Looking Ahead</span>
            <h2 className="heading-md text-stone-900 mb-8">
              Expanding our portfolio
            </h2>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                Our current portfolio represents just the beginning. As we grow, we will continue to identify and develop opportunities across new sectors and geographies, always guided by our commitment to long-term value creation.
              </p>
              <p>
                Future projects will span additional industries, enter new markets, and explore innovative business models—all while maintaining the same standards of excellence that define KÓRADEON GROUP.
              </p>
            </div>
            <Link href="/about" className="inline-flex items-center mt-12 text-stone-900 font-medium hover:text-champagne-600 transition-colors duration-300">
              Learn about our vision
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
                Partner with us
              </h2>
              <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
                We are always open to exploring new opportunities and partnerships. If you have a project that aligns with our vision, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">
                  Discuss a Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/businesses" className="btn-secondary border-ivory-50 text-ivory-50 hover:bg-ivory-50 hover:text-stone-900">
                  Our Businesses
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
