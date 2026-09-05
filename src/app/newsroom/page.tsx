'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { NewsroomGrid } from '@/components/NewsroomGrid'

export default function NewsroomPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 lg:pt-48 pb-20 overflow-hidden bg-ivory-50">
        <div className="absolute inset-0">
          <Image
            src="/images/news-corporate.svg"
            alt=""
            fill
            unoptimized
            sizes="100vw"
            className="object-cover opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory-50/70 via-ivory-50/85 to-ivory-50" aria-hidden="true" />
        </div>
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="label mb-6 block">Newsroom</span>
            <h1 className="heading-lg text-stone-900 mb-8">Latest updates and insights</h1>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                Stay informed about KÓRADEON GROUP&apos;s latest developments, business updates, and thought
                leadership. Our newsroom provides comprehensive coverage of our journey toward building
                enduring institutions.
              </p>
            </div>
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
