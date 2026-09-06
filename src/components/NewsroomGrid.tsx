'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { NEWS_ARTICLES, NEWS_CATEGORIES, type NewsArticle } from '@/constants/news'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function Meta({ article, light = false }: { article: NewsArticle; light?: boolean }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.15em] ${
        light ? 'text-stone-400' : 'text-stone-500'
      }`}
    >
      <span className={light ? 'text-champagne-300' : 'font-semibold text-champagne-700'}>
        {article.category}
      </span>
      <span aria-hidden="true">·</span>
      <time dateTime={article.date}>{formatDate(article.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{article.readTime}</span>
    </div>
  )
}

export function NewsroomGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filtered: NewsArticle[] =
    activeCategory === 'All'
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((a) => a.category === activeCategory)

  const [lead, ...rest] = filtered

  return (
    <div>
      {/* Category filters */}
      <div
        className="mb-12 flex flex-wrap items-center gap-2.5"
        role="tablist"
        aria-label="Filter news by category"
      >
        {['All', ...NEWS_CATEGORIES].map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
              activeCategory === category
                ? 'border-stone-900 bg-stone-900 text-ivory-50'
                : 'border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Lead story — the publication's front page */}
          {lead && (
            <Link
              href={`/newsroom/${lead.slug}`}
              className="group mb-14 block focus-visible:outline-none"
              aria-label={`Read: ${lead.title}`}
            >
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-stone-200 lg:col-span-7">
                  <Image
                    src={lead.image}
                    alt={lead.imageAlt}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-stone-900/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory-50">
                    Lead story
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <Meta article={lead} />
                  <h2 className="mt-4 text-balance font-serif text-2xl leading-snug text-stone-900 transition-colors duration-300 group-hover:text-champagne-700 sm:text-3xl">
                    {lead.title}
                  </h2>
                  <p className="mt-4 line-clamp-3 text-base leading-relaxed text-stone-600">
                    {lead.dek}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-stone-900">
                    Read the story
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Remaining stories */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/newsroom/${article.slug}`}
                  className="group block focus-visible:outline-none"
                  aria-label={`Read: ${article.title}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="pt-5">
                    <Meta article={article} />
                    <h3 className="mt-3 text-balance font-serif text-xl leading-snug text-stone-900 transition-colors duration-300 group-hover:text-champagne-700">
                      {article.title}
                    </h3>
                    <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-stone-600">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-stone-500">No stories in this category yet.</p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
