'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { NEWS_ARTICLES, getFeaturedArticle } from '@/constants/news'



const featured = getFeaturedArticle()
const categories = ['All', ...Array.from(new Set(NEWS_ARTICLES.map((a) => a.category)))]

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const visible =
    activeCategory === 'All'
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((a) => a.category === activeCategory)

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
            <span className="label mb-6 block">Insights</span>
            <h1 className="heading-lg text-stone-900 mb-8">
              Thought leadership and perspectives
            </h1>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                Explore insights, opinions, and research from KÓRADEON GROUP leaders and experts. Our insights section provides deep dives into the trends, challenges, and opportunities shaping our industries and the African continent.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <span className="label mb-4 block">Editor&rsquo;s selection</span>
            <h2 className="heading-md text-stone-900">Featured insight</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href={`/newsroom/${featured.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow duration-500 hover:shadow-large lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne-700">
                  {featured.category}
                </span>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-stone-900 transition-colors duration-300 group-hover:text-champagne-700 lg:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 line-clamp-3 text-base leading-relaxed text-stone-600">
                  {featured.dek}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-500">
                  <span className="inline-flex items-center">
                    <Calendar className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center">
                    <Clock className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                    {featured.readTime}
                  </span>
                  <span className="inline-flex items-center">
                    <User className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                    {featured.author}
                  </span>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 font-medium text-stone-900">
                  Read the essay
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-stone-200 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-stone-900 text-ivory-50'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {visible.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
                className="group"
              >
                <Link href={`/newsroom/${article.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-stone-200">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne-700">
                      {article.category}
                    </span>
                    <h3 className="mt-2.5 font-serif text-xl leading-snug text-stone-900 transition-colors duration-300 group-hover:text-champagne-700">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-600">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-stone-500">
                      <time dateTime={article.date}>{formatDate(article.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Explore Topics</span>
            <h2 className="heading-md text-stone-900 mb-4">Areas of expertise</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'African Economy',
              'Sustainable Development',
              'Agricultural Innovation',
              'Infrastructure Investment',
              'Real Estate Trends',
              'Hospitality & Tourism',
              'Technology & AI',
              'ESG & Sustainability',
              'Urban Development',
              'Energy Transition',
              'Digital Transformation',
              'Leadership'
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-stone-200 rounded-xl p-6 text-center hover:border-champagne-300 hover:shadow-medium transition-all duration-300 cursor-pointer"
              >
                <p className="text-stone-900 font-medium">{topic}</p>
              </motion.div>
            ))}
          </div>
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
                Join the conversation
              </h2>
              <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
                Subscribe to receive our latest insights and thought leadership directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">
                  Subscribe to Insights
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/newsroom" className="btn-secondary border-ivory-50 text-ivory-50 hover:bg-ivory-50 hover:text-stone-900">
                  Visit Newsroom
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
