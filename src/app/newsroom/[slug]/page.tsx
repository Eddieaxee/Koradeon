import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { NEWS_ARTICLES, getArticleBySlug, getRelatedArticles } from '@/constants/news'

interface ArticlePageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({ slug: article.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: 'Story Not Found' }
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      images: [{ url: article.image }],
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = getRelatedArticles(article.slug, article.category, 2)
  const formattedDate = new Date(article.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="bg-ivory-50">
      {/* ── Article header — measured editorial hierarchy ── */}
      <header className="pb-12 pt-36 lg:pb-16 lg:pt-44">
        <div className="container-custom max-w-3xl">
          <Link
            href="/newsroom"
            className="mb-12 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-stone-500 transition-colors duration-300 hover:text-stone-900"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Newsroom
          </Link>

          <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em]">
            <span className="font-semibold text-champagne-700">{article.category}</span>
            <span className="h-px w-6 bg-stone-300" aria-hidden="true" />
            <time dateTime={article.date} className="text-stone-500">
              {formattedDate}
            </time>
            <span className="h-px w-6 bg-stone-300" aria-hidden="true" />
            <span className="text-stone-500">{article.readTime}</span>
          </div>

          {/* The title: measured, balanced, never oversized */}
          <h1 className="text-balance font-serif text-[2rem] leading-[1.15] tracking-tight text-stone-900 sm:text-[2.5rem] lg:text-[2.85rem]">
            {article.title}
          </h1>

          {/* Standfirst / dek */}
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
            {article.dek}
          </p>

          <div className="mt-10 flex items-center gap-4 border-t border-stone-200 pt-6">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-900 font-serif text-sm text-ivory-50"
              aria-hidden="true"
            >
              {article.author.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-stone-900">{article.author}</p>
              <p className="truncate text-sm text-stone-500">
                {article.authorRole} · {article.location}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero image — cinematic ratio on desktop, tighter on mobile ── */}
      <figure className="container-custom max-w-5xl">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-stone-200 sm:aspect-[21/9]">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 text-xs tracking-wide text-stone-500">
          {article.imageAlt}
        </figcaption>
      </figure>

      {/* ── Article body — editorial block rhythm ── */}
      <div className="container-custom max-w-[44rem] pb-20 pt-14 lg:pb-28">
        {article.blocks.map((block, index) => {
          switch (block.type) {
            case 'h2':
              return (
                <h2
                  key={index}
                  className="mb-5 mt-14 flex items-center gap-4 font-serif text-[1.45rem] tracking-tight text-stone-900"
                >
                  <span
                    className="h-px w-8 shrink-0 bg-champagne-600"
                    aria-hidden="true"
                  />
                  {block.text}
                </h2>
              )
            case 'list':
              return (
                <ul key={index} className="my-8 space-y-3.5">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex gap-3.5 text-lg leading-relaxed text-stone-700">
                      <span
                        className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-champagne-600"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )
            case 'quote':
              return (
                <blockquote key={index} className="my-12 border-l-2 border-champagne-600 pl-6 sm:pl-8">
                  <p className="font-serif text-xl leading-relaxed text-stone-900 sm:text-2xl">
                    “{block.text}”
                  </p>
                  {block.by && (
                    <cite className="mt-4 block text-xs uppercase not-italic tracking-[0.22em] text-stone-500">
                      {block.by}
                    </cite>
                  )}
                </blockquote>
              )
            case 'p':
            default:
              return (
                <p key={index} className="text-lg leading-[1.85] text-stone-700">
                  {block.text}
                </p>
              )
          }
        })}

        {/* Stat band — where the data earns its place */}
        {article.stats && article.stats.length > 0 && (
          <div className="my-14 rounded-lg bg-stone-900 p-8 sm:p-10">
            <p className="mb-8 text-[11px] uppercase tracking-[0.25em] text-champagne-300">
              By the numbers
            </p>
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {article.stats.map((stat) => (
                <div key={stat.label} className="border-l border-stone-700 pl-5">
                  <dd className="font-serif text-3xl text-ivory-50">{stat.value}</dd>
                  <dt className="mt-2 text-xs leading-relaxed tracking-wide text-stone-400">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* Publication line */}
        <div className="mt-16 border-t border-stone-200 pt-6">
          <p className="text-xs tracking-wide text-stone-500">
            Published by KÓRADEON GROUP · {article.location} · Media enquiries:{' '}
            <a
              href="mailto:media@koradeon.com"
              className="text-stone-800 underline-offset-4 hover:underline"
            >
              media@koradeon.com
            </a>
          </p>
        </div>

        {/* ── Related stories ── */}
        <div className="mt-20">
          <p className="eyebrow mb-8">Related stories</p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/newsroom/${rel.slug}`}
                className="group focus-visible:outline-none"
              >
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg border border-stone-200">
                  <Image
                    src={rel.image}
                    alt={rel.imageAlt}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mb-2 flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-stone-500">
                  <span className="font-semibold text-champagne-700">{rel.category}</span>
                  <span className="h-px w-5 bg-stone-300" aria-hidden="true" />
                  <span>{rel.readTime}</span>
                </div>
                <h3 className="font-serif text-lg leading-snug text-stone-900 transition-colors duration-300 group-hover:text-champagne-700">
                  {rel.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row">
            <Link href="/newsroom" className="btn-secondary btn-sm">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All stories
            </Link>
            <Link href="/contact" className="btn-primary btn-sm">
              Contact the Group
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
