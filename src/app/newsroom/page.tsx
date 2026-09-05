'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'



const articles = [
  {
    id: 1,
    category: 'Corporate',
    title: 'KÓRADEON GROUP Announces Strategic Vision for African Market Expansion',
    excerpt: 'The holding company reveals ambitious plans to establish a presence across key African markets, with initial focus on East and Southern Africa.',
    date: 'Coming Soon',
    readTime: '5 min read',
    author: 'Corporate Communications',
    featured: true
  },
  {
    id: 2,
    category: 'Innovation',
    title: 'Kavora Farms Partners with Leading Agricultural Technology Firm',
    excerpt: 'Strategic partnership aims to revolutionize farming practices across Nigeria through AI-powered precision agriculture.',
    date: 'Coming Soon',
    readTime: '4 min read',
    author: 'Kavora Farms',
    featured: false
  },
  {
    id: 3,
    category: 'Infrastructure',
    title: 'Arcovia Infrastructure Awarded Major Transportation Contract',
    excerpt: 'The contract represents a significant milestone in Arcovia\'s mission to build critical infrastructure across Africa.',
    date: 'Coming Soon',
    readTime: '3 min read',
    author: 'Arcovia Infrastructure',
    featured: false
  },
  {
    id: 4,
    category: 'Hospitality',
    title: 'Ozura Resorts Reveals Vision for Sustainable Luxury Tourism',
    excerpt: 'New concept combines world-class hospitality with environmental stewardship, setting new standards for African tourism.',
    date: 'Coming Soon',
    readTime: '4 min read',
    author: 'Ozura Resorts',
    featured: false
  },
  {
    id: 5,
    category: 'Real Estate',
    title: 'Rumara Estates Launches Affordable Housing Initiative',
    excerpt: 'Initiative aims to develop 5,000 affordable homes across major African cities over the next five years.',
    date: 'Coming Soon',
    readTime: '3 min read',
    author: 'Rumara Estates',
    featured: false
  },
  {
    id: 6,
    category: 'Sustainability',
    title: 'KÓRADEON GROUP Commits to Net-Zero Operations by 2040',
    excerpt: 'Comprehensive sustainability strategy outlines path to carbon neutrality across all business operations.',
    date: 'Coming Soon',
    readTime: '5 min read',
    author: 'Corporate Communications',
    featured: true
  }
]

const categories = ['All', 'Corporate', 'Innovation', 'Infrastructure', 'Hospitality', 'Real Estate', 'Sustainability']

export default function NewsroomPage() {
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
            <span className="label mb-6 block">Newsroom</span>
            <h1 className="heading-lg text-stone-900 mb-8">
              Latest updates and insights
            </h1>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                Stay informed about KÓRADEON GROUP's latest developments, business updates, and thought leadership. Our newsroom provides comprehensive coverage of our journey toward building enduring institutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="label mb-4 block">Featured Story</span>
          </motion.div>

          {articles.filter(a => a.featured).map((article) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-medium transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-auto bg-stone-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-stone-400 text-sm">Featured Image</span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-champagne-100 text-champagne-700 text-xs font-medium tracking-wider uppercase rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-serif text-stone-900 mb-4 hover:text-champagne-600 transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="text-stone-700 mb-6 text-lg">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-stone-500 mb-6">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {article.author}
                    </span>
                  </div>
                  <button
                    disabled
                    className="inline-flex items-center text-stone-900 font-medium opacity-50 cursor-not-allowed"
                  >
                    Read Article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    category === 'All'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(a => !a.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-ivory-50 border border-stone-200 rounded-2xl overflow-hidden hover:shadow-medium transition-all duration-500 group"
              >
                <div className="aspect-video bg-stone-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-stone-400 text-sm">Article Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-medium tracking-wider uppercase text-champagne-600">{article.category}</span>
                  </div>
                  <h3 className="text-xl font-serif text-stone-900 mb-3 group-hover:text-champagne-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-stone-700 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-stone-500 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <button
                    disabled
                    className="inline-flex items-center text-stone-900 font-medium opacity-50 cursor-not-allowed"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-stone-900 text-ivory-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-md mb-6">
                Stay informed
              </h2>
              <p className="body-lg text-stone-300 mb-8 max-w-2xl mx-auto">
                Subscribe to receive the latest news and insights from KÓRADEON GROUP directly in your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-stone-800 border border-stone-700 text-ivory-50 placeholder-stone-500 focus:outline-none focus:border-champagne-500 transition-colors duration-300"
                  required
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
