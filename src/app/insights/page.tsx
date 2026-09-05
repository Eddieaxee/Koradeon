'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import Link from 'next/link'



const articles = [
  {
    id: 1,
    category: 'Thought Leadership',
    title: 'Building Enduring Institutions: A Long-Term Perspective on African Business',
    excerpt: 'Why the most successful African companies of the future will be those built with a multi-generational vision.',
    date: 'Coming Soon',
    readTime: '8 min read',
    author: 'KÓRADEON Leadership',
    featured: true
  },
  {
    id: 2,
    category: 'Agriculture',
    title: 'The Future of African Agriculture: Technology, Sustainability, and Food Security',
    excerpt: 'How innovation is transforming agriculture across the continent and creating opportunities for sustainable growth.',
    date: 'Coming Soon',
    readTime: '6 min read',
    author: 'Kavora Farms Team',
    featured: false
  },
  {
    id: 3,
    category: 'Infrastructure',
    title: 'Infrastructure as the Foundation of Economic Development in Africa',
    excerpt: 'The critical role of infrastructure investment in unlocking Africa\'s economic potential and driving sustainable development.',
    date: 'Coming Soon',
    readTime: '7 min read',
    author: 'Arcovia Infrastructure',
    featured: false
  },
  {
    id: 4,
    category: 'Real Estate',
    title: 'Urbanization and the Future of African Cities',
    excerpt: 'How sustainable urban development can address Africa\'s housing challenges while creating vibrant, livable cities.',
    date: 'Coming Soon',
    readTime: '5 min read',
    author: 'Rumara Estates',
    featured: false
  },
  {
    id: 5,
    category: 'Hospitality',
    title: 'Luxury Tourism in Africa: Balancing Growth with Sustainability',
    excerpt: 'The opportunities and responsibilities of developing luxury hospitality in environmentally sensitive areas.',
    date: 'Coming Soon',
    readTime: '6 min read',
    author: 'Ozura Resorts',
    featured: false
  },
  {
    id: 6,
    category: 'Economics',
    title: 'Africa\'s Economic Outlook: Opportunities in a Transforming Continent',
    excerpt: 'An analysis of macroeconomic trends and investment opportunities across African markets.',
    date: 'Coming Soon',
    readTime: '10 min read',
    author: 'KÓRADEON Research',
    featured: true
  }
]

const categories = ['All', 'Thought Leadership', 'Agriculture', 'Infrastructure', 'Real Estate', 'Hospitality', 'Economics']

export default function InsightsPage() {
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

      {/* Featured Articles */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="label mb-4 block">Featured Insights</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.filter(a => a.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-medium transition-all duration-500"
              >
                <div className="aspect-video bg-stone-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-stone-400 text-sm">Featured Image</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-medium tracking-wider uppercase text-champagne-600">{article.category}</span>
                  </div>
                  <h2 className="text-2xl font-serif text-stone-900 mb-3 hover:text-champagne-600 transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="text-stone-700 mb-4">
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
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {article.author}
                    </span>
                  </div>
                  <button
                    disabled
                    className="inline-flex items-center text-stone-900 font-medium opacity-50 cursor-not-allowed"
                  >
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
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
