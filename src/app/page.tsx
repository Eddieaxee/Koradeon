'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { HeroSculpture } from '@/components/HeroSculpture'
import Image from 'next/image'
import { IntroAnimation } from '@/components/IntroAnimation'
import { BUSINESSES } from '@/constants/brand'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if intro has played
    const introPlayed = sessionStorage.getItem('koradeon-intro-played')
    if (introPlayed) {
      setShowIntro(false)
      setIsLoaded(true)
    }
  }, [])

  const handleIntroComplete = () => {
    setShowIntro(false)
    setIsLoaded(true)
  }

  return (
    <>
      {/* Intro Animation */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Main Content */}
      <main className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ivory-50">
          {/* Cinematic Artwork Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-monolith.svg"
              alt=""
              fill
              unoptimized
              priority
              sizes="100vw"
              className="object-cover"
              aria-hidden="true"
            />
          </div>

          {/* Three.js Sculpture */}
          <div className="absolute inset-0 opacity-60">
            <HeroSculpture />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-ivory-50/50 via-transparent to-ivory-50" />

          {/* Hero Content */}
          <div className="relative z-10 container-custom text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-stone-900 text-ivory-50 text-sm tracking-widest uppercase rounded-full">
                Building Enduring Businesses
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="heading-xl text-stone-900 mb-8"
            >
              KÓRADEON
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4 font-sans font-light tracking-wide text-stone-600">
                GROUP
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="body-lg max-w-2xl mx-auto mb-12 text-stone-700"
            >
              A diversified holding company focused on long-term value creation across strategic industries.
              Building institutions that transcend generations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/about" className="btn-primary">
                Discover Our Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/businesses" className="btn-secondary">
                Explore Our Businesses
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-stone-400 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 bg-stone-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Who We Are Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="label mb-4 block">Who We Are</span>
                <h2 className="heading-md text-stone-900 mb-6">
                  Building institutions that stand the test of time
                </h2>
                <div className="space-y-4 body-md text-stone-700">
                  <p>
                    KÓRADEON GROUP is a diversified holding company with a singular focus: creating enduring value across strategic industries. We don't just build businesses—we build institutions designed to thrive for generations.
                  </p>
                  <p>
                    Our name derives from the foundational pillars upon which we stand: <strong>K</strong>avora Farms, <strong>O</strong>zura Resorts, <strong>R</strong>umara Estates, and <strong>A</strong>rcovia Infrastructure. Each pillar represents a commitment to excellence in its respective field.
                  </p>
                  <p>
                    With roots in Africa and a global outlook, we combine local expertise with international best practices to deliver sustainable growth and lasting impact.
                  </p>
                </div>
                <Link href="/about" className="inline-flex items-center mt-8 text-stone-900 font-medium hover:text-champagne-600 transition-colors duration-300">
                  Learn more about us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 bg-stone-900 rounded-2xl flex items-center justify-center">
                        <span className="text-6xl font-serif text-ivory-50">K</span>
                      </div>
                      <p className="text-stone-600 text-lg">Est. 2024</p>
                      <p className="text-stone-500 text-sm mt-2">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Four Pillars Section */}
        <section className="section-padding bg-ivory-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="label mb-4 block">Our Ecosystem</span>
              <h2 className="heading-md text-stone-900 mb-4">Four Pillars of Excellence</h2>
              <p className="body-lg max-w-2xl mx-auto text-stone-700">
                Each business operates independently while contributing to a unified ecosystem of growth and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BUSINESSES.map((business, index) => (
                <motion.div
                  key={business.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-large transition-all duration-500"
                >
                  <div className={`aspect-video bg-gradient-to-br ${business.color === 'kavora' ? 'from-kavora-olive/20 to-kavora-forest/20' : business.color === 'ozura' ? 'from-ozura-ocean/20 to-ozura-turquoise/20' : business.color === 'rumara' ? 'from-rumara-champagne/30 to-rumara-stone/20' : 'from-arcovia-steel/20 to-arcovia-blue/20'} relative overflow-hidden`}>
                    <Image src={`/images/business-${business.id}.svg`} alt={`${business.name} — ${business.tagline}`} fill unoptimized sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" aria-hidden="true" />
                    <span className="absolute left-5 top-5 rounded-full bg-ivory-50/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-stone-800">
                      {business.tagline}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif text-stone-900 mb-2">{business.name}</h3>
                    <p className="text-stone-600 mb-4">{business.tagline}</p>
                    <p className="text-stone-700 mb-6">{business.description}</p>
                    <Link href={`/businesses#${business.id}`} className="inline-flex items-center text-stone-900 font-medium hover:text-champagne-600 transition-colors duration-300">
                      Explore {business.name.split(' ')[0]}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link href="/businesses" className="btn-primary">
                View All Businesses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="section-padding bg-stone-900 text-ivory-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="label mb-6 block text-champagne-400">Our Philosophy</span>
              <h2 className="heading-lg mb-8">
                Building beyond generations
              </h2>
              <div className="space-y-6 body-lg text-stone-300">
                <p>
                  We believe in creating institutions, not just companies. Every decision we make is guided by a long-term perspective that prioritizes sustainable growth, responsible stewardship, and lasting impact.
                </p>
                <p>
                  Our commitment to Africa is unwavering. We see the continent's potential not as an opportunity for extraction, but as a foundation for building world-class enterprises that will serve generations to come.
                </p>
              </div>
              <Link href="/legacy" className="inline-flex items-center mt-12 text-champagne-400 font-medium hover:text-champagne-300 transition-colors duration-300">
                Read our legacy statement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="grid grid-cols-2 gap-4">
                  {['AI & Automation', 'Smart Infrastructure', 'Sustainable Tech', 'Digital Innovation'].map((item, index) => (
                    <div key={index} className="aspect-square bg-stone-100 rounded-xl flex items-center justify-center p-6 hover:bg-stone-200 transition-colors duration-300">
                      <span className="text-sm font-medium text-stone-700 text-center">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <span className="label mb-4 block">Innovation</span>
                <h2 className="heading-md text-stone-900 mb-6">
                  Technology-driven growth for the future
                </h2>
                <div className="space-y-4 body-md text-stone-700">
                  <p>
                    Innovation is at the heart of everything we do. From AI-powered agriculture to smart infrastructure, we leverage cutting-edge technology to drive efficiency and create competitive advantages.
                  </p>
                  <p>
                    Our innovation initiatives span across all four businesses, ensuring we remain at the forefront of our industries while building capabilities that will define the future.
                  </p>
                </div>
                <Link href="/innovation" className="inline-flex items-center mt-8 text-stone-900 font-medium hover:text-champagne-600 transition-colors duration-300">
                  Explore our innovation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* News Preview Section */}
        <section className="section-padding bg-ivory-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-end justify-between mb-12"
            >
              <div>
                <span className="label mb-4 block">Latest Updates</span>
                <h2 className="heading-md text-stone-900">News & Insights</h2>
              </div>
              <Link href="/newsroom" className="hidden sm:inline-flex items-center text-stone-900 font-medium hover:text-champagne-600 transition-colors duration-300">
                View all news
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: 'Corporate',
                  title: 'KÓRADEON GROUP Announces Strategic Expansion into East Africa',
                  date: 'Coming Soon',
                  excerpt: 'Plans to establish regional headquarters and launch new business ventures across the East African region.'
                },
                {
                  category: 'Innovation',
                  title: 'Kavora Farms Launches Precision Agriculture Initiative',
                  date: 'Coming Soon',
                  excerpt: 'Leveraging AI and IoT technologies to revolutionize sustainable farming practices across Nigeria.'
                },
                {
                  category: 'Partnership',
                  title: 'Arcovia Infrastructure Wins Major Transportation Contract',
                  date: 'Coming Soon',
                  excerpt: 'Awarded contract for critical infrastructure development project valued at significant investment.'
                }
              ].map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-medium transition-all duration-500 group"
                >
                  <div className="aspect-video bg-stone-100 relative overflow-hidden">
                    <Image src={["/images/news-corporate.svg", "/images/news-innovation.svg", "/images/news-infrastructure.svg"][index]} alt={article.title} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-xs font-medium tracking-wider uppercase text-champagne-600">{article.category}</span>
                      <span className="text-stone-400 text-sm">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-serif text-stone-900 mb-3 group-hover:text-champagne-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-stone-700 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <Link href="/newsroom" className="inline-flex items-center text-stone-900 font-medium hover:text-champagne-600 transition-colors duration-300">
                      Read more
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12 sm:hidden">
              <Link href="/newsroom" className="btn-primary">
                View all news
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Legacy Statement Section */}
        <section className="section-padding bg-stone-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="label mb-6 block">Our Commitment</span>
              <h2 className="heading-lg text-stone-900 mb-8">
                A legacy of stewardship
              </h2>
              <div className="space-y-6 body-lg text-stone-700">
                <p>
                  We are not merely building companies. We are creating institutions that will serve future generations. Every business we establish, every investment we make, and every partnership we forge is guided by a commitment to long-term value creation and responsible growth.
                </p>
                <p>
                  Our vision extends beyond quarterly results and annual targets. We think in decades, not years. We measure success not just by financial returns, but by the lasting positive impact we create for our employees, communities, and the African continent.
                </p>
              </div>
              <Link href="/legacy" className="inline-flex items-center mt-12 btn-primary">
                Read Our Full Legacy Statement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
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
                  Let's build the future together
                </h2>
                <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
                  Whether you're a potential partner, investor, or team member, we'd love to hear from you. Join us in building enduring businesses that make a difference.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link href="/careers" className="btn-secondary border-ivory-50 text-ivory-50 hover:bg-ivory-50 hover:text-stone-900">
                    Join Our Team
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
