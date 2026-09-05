'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { NEWS_ARTICLES, NEWS_CATEGORIES, type NewsArticle } from '@/constants/news'

export function NewsroomGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filtered: NewsArticle[] =
    activeCategory === 'All'
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((a) => a.category === activeCategory)

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap items-center gap-3 mb-14" role="tablist" aria-label="Filter news by category">
        {['All', ...NEWS_CATEGORIES].map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
              activeCategory === category
                ? 'border-stone-900 bg-stone-900 text-ivory-50'
                : 'border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Article grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((article, index) => (
            <motion.article
              key={article.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/newsroom/${article.slug}`}
                className="group block h-full focus-visible:outline-none"
                aria-label={`Read: ${article.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ivory-50/95 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-stone-700">
                    {article.category}
                  </span>
                </div>
                <div className="pt-6">
                  <div className="flex items-center gap-3 text-xs text-stone-500 uppercase tracking-[0.15em] mb-3">
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="heading-sm mb-3 group-hover:text-stone-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="body-sm line-clamp-3">{article.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-stone-900">
                    Read story
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
