'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Users, Target, Heart, Globe } from 'lucide-react'
import Link from 'next/link'



const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Long-term Vision',
    description: 'We think in decades, not quarters. Every decision is guided by a commitment to sustainable, lasting value creation.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Responsible Stewardship',
    description: 'We are custodians of institutions that will outlive us. We build with integrity, transparency, and accountability.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'African Excellence',
    description: 'Rooted in Africa, with a global perspective. We combine local expertise with international best practices.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Institutional Impact',
    description: 'We measure success by the positive impact we create for employees, communities, and future generations.'
  }
]

export default function AboutPage() {
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
            <span className="label mb-6 block">About Us</span>
            <h1 className="heading-lg text-stone-900 mb-8">
              Building institutions that transcend generations
            </h1>
            <div className="mx-auto max-w-3xl space-y-6 body-lg text-stone-700">
              <p>
                KÓRADEON GROUP is more than a holding company. We are architects of enduring institutions, builders of sustainable businesses, and stewards of long-term value creation.
              </p>
              <p>
                Founded with a singular vision to create diversified businesses that stand the test of time, we combine strategic foresight, operational excellence, and unwavering commitment to our core values.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label mb-4 block">Our Vision</span>
              <h2 className="heading-md text-stone-900 mb-6">
                A legacy of enduring institutions
              </h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  To become Africa's most respected diversified holding company, known for building world-class businesses that create sustainable value for all stakeholders and contribute to the continent's economic transformation.
                </p>
                <p>
                  We envision a future where KÓRADEON GROUP stands as a testament to what is possible when vision, discipline, and long-term thinking converge to build institutions that serve generations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label mb-4 block">Our Mission</span>
              <h2 className="heading-md text-stone-900 mb-6">
                Creating lasting value across industries
              </h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  To build and grow diversified businesses across strategic sectors, creating sustainable competitive advantages and long-term value for shareholders, employees, and communities.
                </p>
                <p>
                  We achieve this by identifying opportunities where we can apply our expertise, resources, and vision to build market-leading positions that generate consistent, growing returns over decades.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Our Values</span>
            <h2 className="heading-md text-stone-900 mb-4">The principles that guide us</h2>
            <p className="body-lg max-w-2xl mx-auto text-stone-700">
              These core values shape every decision we make and every business we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-champagne-100 text-champagne-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif text-stone-900 mb-3">{value.title}</h3>
                <p className="text-stone-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <span className="label mb-4 block">Leadership</span>
            <h2 className="heading-md text-stone-900 mb-4">Guided by experience</h2>
            <p className="body-lg max-w-2xl mx-auto text-stone-700">
              KÓRADEON is led by operators and investors with decades of combined
              experience across four continents.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto max-w-3xl border border-stone-200 bg-white p-10 text-center shadow-soft sm:p-14"
          >
            <span className="mx-auto mb-8 block h-px w-14 bg-champagne-500" aria-hidden="true" />
            <p className="font-serif text-xl leading-relaxed text-stone-900 sm:text-2xl">
              The executive appointments of the Group are being finalised. Profiles of the
              leadership team will be published here as they are announced.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-stone-600">
              Governance of the Group is exercised through its board and investment
              committee, which oversee capital allocation, risk and standards across all
              four businesses.
            </p>
            <Link
              href="/newsroom"
              className="mt-8 inline-flex items-center gap-2 font-medium text-stone-900 transition-colors duration-300 hover:text-champagne-700"
            >
              Announcements via the newsroom
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label mb-4 block">Governance</span>
              <h2 className="heading-md text-stone-900 mb-6">
                Committed to the highest standards
              </h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  We maintain rigorous corporate governance standards, ensuring transparency, accountability, and ethical conduct across all our operations.
                </p>
                <p>
                  Our governance framework is designed to protect stakeholder interests, ensure regulatory compliance, and promote sustainable long-term value creation.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Independent board oversight</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Robust risk management frameworks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Transparent financial reporting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Ethical business practices</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video bg-stone-100 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-stone-900 rounded-xl flex items-center justify-center">
                      <Target className="w-10 h-10 text-ivory-50" />
                    </div>
                    <p className="text-stone-600 font-medium">Corporate Governance</p>
                    <p className="text-stone-500 text-sm mt-2">Excellence in stewardship</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Our Journey</span>
            <h2 className="heading-md text-stone-900 mb-4">Milestones</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                { year: '2024', title: 'Foundation', description: 'KÓRADEON GROUP established with four foundational businesses' },
                { year: 'Future', title: 'Expansion', description: 'Strategic growth across Africa and beyond' },
                { year: 'Future', title: 'Innovation', description: 'Technology-driven transformation across all businesses' },
                { year: 'Future', title: 'Legacy', description: 'Building institutions that serve generations' }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-24 text-right">
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
                Join us in building the future
              </h2>
              <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
                Whether you're a potential partner, investor, or team member, we'd love to connect with you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/careers" className="btn-secondary border-ivory-50 text-ivory-50 hover:bg-ivory-50 hover:text-stone-900">
                  View Careers
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
