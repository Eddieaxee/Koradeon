'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, FileText, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/constants/assets'
import { DocumentRequestModal } from '@/features/investors/DocumentRequestModal'



const resources = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Annual Reports',
    description: 'Comprehensive reports on our financial performance, strategic progress, and corporate governance.',
    meta: 'Inaugural edition — FY2024',
    action: { label: 'Request a copy', type: 'request' },
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Financial Highlights',
    description: 'Key metrics and performance indicators across the Group’s four foundational businesses.',
    meta: 'Updated quarterly',
    action: { label: 'View the pillars', type: 'link', href: '/businesses' },
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Corporate Governance',
    description: 'Our governance framework, board structure, and commitment to transparency.',
    meta: 'Framework published',
    action: { label: 'Read our standards', type: 'link', href: '#governance' },
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Investor Presentations',
    description: 'Strategic presentations and materials for current and prospective investors.',
    meta: 'Shared on request',
    action: { label: 'Request access', type: 'request' },
  },
]

export default function InvestorsPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState('')

  const openDocumentRequest = (docTitle: string) => {
    setSelectedDocument(docTitle)
    setModalOpen(true)
  }

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
            <span className="label mb-6 block">Investors</span>
            <h1 className="heading-lg text-stone-900 mb-8">
              Building long-term value
            </h1>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                KÓRADEON GROUP is committed to creating sustainable, long-term value for all stakeholders. We maintain the highest standards of corporate governance, transparency, and accountability in all our operations.
              </p>
              <p>
                This section provides investors and stakeholders with access to important corporate information, financial reports, and governance documents.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Information */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Investment Philosophy</span>
            <h2 className="heading-md text-stone-900 mb-4">Our approach to value creation</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white border border-stone-200 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-serif text-champagne-600 mb-4">01</div>
              <h3 className="text-xl font-serif text-stone-900 mb-4">Long-term Horizon</h3>
              <p className="text-stone-700">
                We build businesses with a multi-decade perspective, focusing on sustainable growth rather than short-term gains.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white border border-stone-200 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-serif text-champagne-600 mb-4">02</div>
              <h3 className="text-xl font-serif text-stone-900 mb-4">Diversified Portfolio</h3>
              <p className="text-stone-700">
                Our four foundational businesses span multiple sectors, creating a balanced and resilient portfolio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white border border-stone-200 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-serif text-champagne-600 mb-4">03</div>
              <h3 className="text-xl font-serif text-stone-900 mb-4">Institutional Excellence</h3>
              <p className="text-stone-700">
                We maintain world-class governance standards and operational excellence across all our businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Resources</span>
            <h2 className="heading-md text-stone-900 mb-4">Investor information and documents</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-ivory-50 border border-stone-200 rounded-2xl p-8 hover:shadow-medium transition-all duration-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-champagne-100 text-champagne-600 flex-shrink-0">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-stone-900 mb-2">{resource.title}</h3>
                    <p className="text-stone-700 mb-3">{resource.description}</p>
                    <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-stone-500">
                      {resource.meta}
                    </p>
                    {resource.action.type === 'request' ? (
                      <button
                        onClick={() => openDocumentRequest(resource.title)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 transition-colors duration-300 hover:text-champagne-700"
                      >
                        {resource.action.label}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    ) : (
                      <Link
                        href={resource.action.href!}
                        className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 transition-colors duration-300 hover:text-champagne-700"
                      >
                        {resource.action.label}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label mb-4 block">Corporate Governance</span>
              <h2 className="heading-md text-stone-900 mb-6">
                Committed to the highest standards
              </h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  We maintain rigorous corporate governance standards, ensuring transparency, accountability, and ethical conduct across all our operations.
                </p>
                <p>
                  Our governance framework is designed to protect stakeholder interests, ensure regulatory compliance, and promote sustainable long-term value creation.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Independent board oversight</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Robust risk management frameworks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Transparent financial reporting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Ethical business practices</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 shadow-medium">
                <Image
                  src={IMAGES.boardroom}
                  alt="KÓRADEON boardroom — independent oversight and transparent governance"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent p-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-stone-300">
                    Stewardship
                  </p>
                  <p className="mt-1 font-serif text-lg text-ivory-50">
                    Independent oversight, transparent reporting
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
                Investor relations contact
              </h2>
              <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
                For investor enquiries, please contact our investor relations team. We are committed to maintaining open and transparent communication with all stakeholders.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">
                  Contact Investor Relations
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="mailto:investors@koradeon.com" className="btn-secondary border-ivory-50 text-ivory-50 hover:bg-ivory-50 hover:text-stone-900">
                  investors@koradeon.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Document Request Modal */}
      <DocumentRequestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        documentTitle={selectedDocument}
      />
    </main>
  )
}
