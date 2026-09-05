'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Filter } from 'lucide-react'
import Link from 'next/link'



const projects = [
  {
    id: 1,
    title: 'Agricultural Innovation Hub',
    category: 'Agriculture',
    business: 'Kavora Farms',
    status: 'In Development',
    description: 'A state-of-the-art agricultural research and innovation center focused on sustainable farming practices and technology integration.'
  },
  {
    id: 2,
    title: 'Coastal Resort Development',
    category: 'Hospitality',
    business: 'Ozura Resorts',
    status: 'Planning',
    description: 'A luxury beachfront resort combining world-class hospitality with sustainable design and local cultural experiences.'
  },
  {
    id: 3,
    title: 'Urban Mixed-Use Development',
    category: 'Real Estate',
    business: 'Rumara Estates',
    status: 'Planning',
    description: 'A transformative mixed-use development integrating residential, commercial, and public spaces in a major African city.'
  },
  {
    id: 4,
    title: 'Transportation Infrastructure',
    category: 'Infrastructure',
    business: 'Arcovia Infrastructure',
    status: 'Planning',
    description: 'A critical transportation infrastructure project designed to improve connectivity and support economic growth.'
  },
  {
    id: 5,
    title: 'Smart Agriculture Initiative',
    category: 'Agriculture',
    business: 'Kavora Farms',
    status: 'Research',
    description: 'Implementing IoT sensors, AI-driven analytics, and automation to revolutionize crop management and yield optimization.'
  },
  {
    id: 6,
    title: 'Wellness Retreat Concept',
    category: 'Hospitality',
    business: 'Ozura Resorts',
    status: 'Concept',
    description: 'A luxury wellness retreat combining nature, spa treatments, and holistic health programs in a serene African setting.'
  }
]

const categories = ['All', 'Agriculture', 'Hospitality', 'Real Estate', 'Infrastructure']

export default function PortfolioPage() {
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
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      category === 'All'
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
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-medium transition-all duration-500 group"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-stone-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-stone-200 rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-serif text-stone-400">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-stone-900 text-ivory-50 text-xs font-medium tracking-wider uppercase rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-medium tracking-wider uppercase text-champagne-600">{project.category}</span>
                    <span className="text-stone-400 text-sm">•</span>
                    <span className="text-sm text-stone-500">{project.business}</span>
                  </div>
                  <h3 className="text-xl font-serif text-stone-900 mb-3 group-hover:text-champagne-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-stone-700 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <button
                    disabled
                    className="inline-flex items-center text-stone-900 font-medium opacity-50 cursor-not-allowed"
                  >
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
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
