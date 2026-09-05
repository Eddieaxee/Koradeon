'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Image as ImageIcon, FileText, Palette } from 'lucide-react'
import Link from 'next/link'



const resources = [
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: 'Logo Assets',
    description: 'Download KÓRADEON GROUP logos in various formats including SVG, PNG, and PDF.',
    items: ['Primary Logo', 'Secondary Logo', 'Icon Only', 'Horizontal Lockup']
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Brand Colors',
    description: 'Official color palette and usage guidelines for consistent brand representation.',
    items: ['Primary Colors', 'Secondary Colors', 'Subsidiary Colors', 'Accessibility Guidelines']
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Brand Guidelines',
    description: 'Comprehensive guidelines for using KÓRADEON GROUP brand assets correctly.',
    items: ['Logo Usage', 'Typography', 'Imagery Style', 'Tone of Voice']
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Templates & Assets',
    description: 'Ready-to-use templates and assets for presentations, documents, and marketing materials.',
    items: ['Presentation Templates', 'Letterheads', 'Business Cards', 'Email Signatures']
  }
]

export default function BrandCentrePage() {
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
            <span className="label mb-6 block">Brand Centre</span>
            <h1 className="heading-lg text-stone-900 mb-8">
              Brand assets and guidelines
            </h1>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                Welcome to the KÓRADEON GROUP Brand Centre. This portal provides access to official brand assets, guidelines, and resources to ensure consistent and professional representation of our brand across all touchpoints.
              </p>
              <p>
                Please ensure you follow our brand guidelines when using any assets from this portal. For questions or custom asset requests, contact our brand team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Resources</span>
            <h2 className="heading-md text-stone-900 mb-4">Brand assets and tools</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-stone-200 rounded-2xl p-8 hover:shadow-medium transition-all duration-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-champagne-100 text-champagne-600 flex-shrink-0">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-stone-900 mb-2">{resource.title}</h3>
                    <p className="text-stone-700 mb-4">{resource.description}</p>
                    <ul className="space-y-2 mb-4">
                      {resource.items.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-stone-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-champagne-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button
                      disabled
                      className="inline-flex items-center text-stone-900 font-medium opacity-50 cursor-not-allowed"
                    >
                      Access Resources
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Guidelines Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Guidelines</span>
            <h2 className="heading-md text-stone-900 mb-4">Brand principles</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-stone-900 rounded-2xl flex items-center justify-center">
                <span className="text-3xl font-serif text-ivory-50">K</span>
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Logo Usage</h3>
              <p className="text-stone-700">
                Always use the official KÓRADEON GROUP logo. Maintain clear space around the logo and never distort or recolour it without approval.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-champagne-500 rounded-2xl flex items-center justify-center">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Color Palette</h3>
              <p className="text-stone-700">
                Use our approved color palette consistently. The primary palette communicates elegance and timelessness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-stone-100 border-2 border-stone-300 rounded-2xl flex items-center justify-center">
                <FileText className="w-10 h-10 text-stone-700" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Typography</h3>
              <p className="text-stone-700">
                Use Inter for body text and Playfair Display for headings. Maintain proper hierarchy and spacing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Access Request */}
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
                Need brand assets?
              </h2>
              <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
                The Brand Centre is currently available to authorized personnel only. For access requests or custom brand asset needs, please contact our team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">
                  Request Access
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="mailto:brand@koradeon.com" className="btn-secondary border-ivory-50 text-ivory-50 hover:bg-ivory-50 hover:text-stone-900">
                  brand@koradeon.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
