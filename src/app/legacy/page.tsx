'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'
import Link from 'next/link'



const principles = [
  {
    title: 'Stewardship',
    description: 'We are temporary custodians of institutions designed to outlive us. Every decision we make considers the impact on future generations.'
  },
  {
    title: 'Patience',
    description: 'We reject the tyranny of quarterly results. We build with a multi-decade horizon, understanding that true value compounds over time.'
  },
  {
    title: 'Integrity',
    description: 'Our word is our bond. We conduct business with unwavering ethical standards, transparency, and accountability to all stakeholders.'
  },
  {
    title: 'Excellence',
    description: 'We settle for nothing less than world-class. In every business, every operation, every interaction, we pursue excellence relentlessly.'
  }
]

const commitments = [
  {
    title: 'To Africa',
    description: 'We are committed to Africa\'s economic transformation. We build businesses that create jobs, develop skills, and contribute to sustainable development across the continent.'
  },
  {
    title: 'To Future Generations',
    description: 'We build institutions that will serve our children\'s children. Every investment, every innovation, every partnership is made with future generations in mind.'
  },
  {
    title: 'To Sustainable Growth',
    description: 'We reject short-term gains at the expense of long-term value. Our businesses are designed for sustainability—economically, socially, and environmentally.'
  }
]

export default function LegacyPage() {
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
            <span className="label mb-6 block">Our Legacy</span>
            <h1 className="heading-lg text-stone-900 mb-8">
              Building institutions, not just companies
            </h1>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                We are not in the business of building companies to sell. We are in the business of building institutions that will serve generations. This is the foundation upon which KÓRADEON GROUP is built.
              </p>
              <p>
                Our legacy is not measured in quarters or years, but in decades and centuries. Every business we establish, every investment we make, and every partnership we forge is guided by this long-term perspective.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-stone-900 text-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Quote className="w-12 h-12 text-champagne-500 mb-8" />
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight mb-8">
              We are building institutions that will outlive us, serve generations we will never meet, and create value that extends far beyond our own lifetimes.
            </blockquote>
            <p className="text-xl text-champagne-400">The KÓRADEON Philosophy</p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Our Principles</span>
            <h2 className="heading-md text-stone-900 mb-4">The foundations of our approach</h2>
            <p className="body-lg max-w-2xl mx-auto text-stone-700">
              These principles guide every decision we make and every business we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-stone-200 rounded-2xl p-8 hover:shadow-medium transition-all duration-500"
              >
                <h3 className="text-2xl font-serif text-stone-900 mb-4">{principle.title}</h3>
                <p className="text-stone-700 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Our Commitments</span>
            <h2 className="heading-md text-stone-900 mb-4">Promises we keep</h2>
            <p className="body-lg max-w-2xl mx-auto text-stone-700">
              These commitments define who we are and what we stand for.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-champagne-100 text-champagne-600 mb-6">
                  <span className="text-3xl font-serif">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-4">{commitment.title}</h3>
                <p className="text-stone-700 leading-relaxed">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="label mb-6 block text-center">Our Manifesto</span>
            <h2 className="heading-md text-stone-900 mb-12 text-center">Why We Exist</h2>

            <div className="space-y-8 body-lg text-stone-700">
              <p className="text-center text-xl font-serif text-stone-900 mb-8">
                We believe that the most enduring institutions are built on a foundation of purpose, not profit.
              </p>

              <p>
                KÓRADEON GROUP exists to build businesses that matter—businesses that solve real problems, create genuine value, and stand the test of time. We are not interested in quick wins or short-term gains. We are building for the long term.
              </p>

              <p>
                In a world obsessed with quarterly results and rapid growth, we choose a different path. We choose patience over speed, quality over quantity, and legacy over liquidity. This is not a strategy—it is a conviction.
              </p>

              <p>
                We believe that Africa represents one of the greatest opportunities for sustainable, long-term value creation in the world. With its young population, abundant resources, and growing economies, the continent is poised for transformative growth. We are here to build the institutions that will help shape that future.
              </p>

              <p>
                Every business we build is designed to outlive us. Every investment we make is made with future generations in mind. Every partnership we forge is based on shared values and long-term mutual success.
              </p>

              <p>
                This is our legacy. This is our promise. This is KÓRADEON GROUP.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Our Journey</span>
            <h2 className="heading-md text-stone-900 mb-4">Building for the future</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                { year: '2024', title: 'Foundation', description: 'KÓRADEON GROUP established with four foundational businesses: Kavora Farms, Ozura Resorts, Rumara Estates, and Arcovia Infrastructure.' },
                { year: '2025-2030', title: 'Growth', description: 'Expanding operations across Africa, establishing regional presence, and building market-leading positions in each sector.' },
                { year: '2030-2040', title: 'Transformation', description: 'Technology-driven transformation across all businesses, setting new industry standards for innovation and sustainability.' },
                { year: '2040+', title: 'Legacy', description: 'Institutions that serve generations, creating lasting impact across the African continent and beyond.' }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-32 text-right">
                    <span className="text-2xl font-serif text-champagne-600">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-champagne-500 mt-2" />
                  <div className="flex-1 pb-12">
                    <h3 className="text-xl font-serif text-stone-900 mb-2">{milestone.title}</h3>
                    <p className="text-stone-700">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Be part of our legacy
              </h2>
              <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
                Join us in building institutions that will shape Africa's future for generations to come.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/about" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn-secondary border-ivory-50 text-ivory-50 hover:bg-ivory-50 hover:text-stone-900">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
