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
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <article className="bg-ivory-50">
      {/* Article header */}
      <header className="pt-40 lg:pt-48 pb-16">
        <div className="container-custom max-w-4xl">
          <Link
            href="/newsroom"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors duration-300 mb-10"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Newsroom
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 uppercase tracking-[0.15em] mb-8">
            <span className="rounded-full border border-stone-300 px-3.5 py-1.5 font-semibold text-stone-700">
              {article.category}
            </span>
            <time dateTime={article.date}>{formattedDate}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="heading-xl mb-8 text-balance">{article.title}</h1>
          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 font-serif text-sm text-ivory-50"
              aria-hidden="true"
            >
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-stone-900">{article.author}</p>
              <p className="text-sm text-stone-500">{article.authorRole}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero image */}
      <div className="container-custom max-w-5xl">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-stone-200 mb-16">
          <Image
            src={article.image}
            alt={article.title}
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article body */}
      <div className="container-custom max-w-3xl pb-24">
        <p className="text-xl leading-relaxed text-stone-800 font-serif mb-10">{article.excerpt}</p>
        <div className="space-y-8">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-stone-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="divider my-16" aria-hidden="true" />

        {/* Related stories */}
        <p className="eyebrow mb-8">Related stories</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {related.map((rel) => (
            <Link key={rel.slug} href={`/newsroom/${rel.slug}`} className="group focus-visible:outline-none">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-stone-200 mb-4">
                <Image
                  src={rel.image}
                  alt={rel.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-[0.15em] mb-2">
                <span>{rel.category}</span>
              </div>
              <h3 className="font-serif text-lg leading-snug group-hover:text-stone-600 transition-colors duration-300">
                {rel.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <Link href="/newsroom" className="btn-secondary btn-sm">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All stories
          </Link>
          <Link href="/contact" className="btn-primary btn-sm">
            Contact the Group
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
