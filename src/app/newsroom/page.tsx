'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { NewsroomGrid } from '@/components/NewsroomGrid'
import { NEWS_ARTICLES, NEWS_CATEGORIES } from '@/constants/news'

export default function NewsroomPage() {
  return (
    <main className="min-h-screen">
      {/* Editorial masthead */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-ivory-50 pt-40 pb-16 lg:pt-48 lg:pb-20">
        <div
          className="architectural-grid pointer-events-none absolute inset-0 opacity-60"
          aria-hidden="true"
        />
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-2xl">
              <p className="label mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-champagne-600" aria-hidden="true" />
                The KÓRADEON Newsroom
              </p>
              <h1 className="text-balance font-serif text-4xl leading-[1.1] tracking-tight text-stone-900 sm:text-5xl">
                Reporting on businesses built to last
              </h1>
              <p className="body-lg mt-6 max-w-xl text-stone-600">
                Announcements, milestones and perspective from across the Group — published
                with the same discipline we bring to the businesses themselves.
              </p>
            </div>
            <dl className="flex gap-10 border-t border-stone-200 pt-6 lg:border-0 lg:pt-0">
              <div>
                <dd className="font-serif text-3xl text-stone-900">{NEWS_ARTICLES.length}</dd>
                <dt className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">
                  Stories
                </dt>
              </div>
              <div>
                <dd className="font-serif text-3xl text-stone-900">{NEWS_CATEGORIES.length}</dd>
                <dt className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">
                  Desks
                </dt>
              </div>
              <div>
                <dd className="font-serif text-3xl text-stone-900">4</dd>
                <dt className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">
                  Pillars
                </dt>
              </div>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding pt-4 bg-ivory-50">
        <div className="container-custom">
          <NewsroomGrid />
        </div>
      </section>

      {/* Innovation CTA */}
      <section className="section-padding bg-stone-900 text-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="label mb-6 block text-champagne-300">Inside the Group</span>
            <h2 className="heading-md mb-6">Innovation is our operating system</h2>
            <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
              From AI-powered agriculture to smart infrastructure, discover how KÓRADEON applies
              technology across all four businesses.
            </p>
            <Link href="/innovation" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">
              Explore Innovation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-stone-900 text-ivory-50 border-t border-stone-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-md mb-6">Stay informed</h2>
              <p className="body-lg text-stone-300 mb-8 max-w-2xl mx-auto">
                Subscribe to receive the latest news and insights from KÓRADEON GROUP directly in your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-stone-800 border border-stone-700 text-ivory-50 placeholder-stone-500 focus:outline-none focus:border-champagne-500 transition-colors duration-300"
                  required
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-ivory-50 text-stone-900 font-medium tracking-wide hover:bg-champagne-300 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
