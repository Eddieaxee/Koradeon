'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Briefcase, GraduationCap, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/constants/assets'



const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Collaborative Culture',
    description: 'Work alongside talented professionals in a supportive, inclusive environment that values diverse perspectives.'
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Meaningful Work',
    description: 'Contribute to building enduring institutions that create lasting impact across Africa and beyond.'
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Continuous Learning',
    description: 'Access ongoing professional development, mentorship programs, and opportunities to grow your skills.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Work-Life Balance',
    description: 'Enjoy flexible work arrangements, comprehensive benefits, and a culture that values your wellbeing.'
  }
]

const openPositions = [
  {
    title: 'Senior Agricultural Economist',
    department: 'Kavora Farms',
    location: 'Lagos, Nigeria',
    type: 'Full-time'
  },
  {
    title: 'Hospitality Operations Manager',
    department: 'Ozura Resorts',
    location: 'Lagos, Nigeria',
    type: 'Full-time'
  },
  {
    title: 'Real Estate Development Lead',
    department: 'Rumara Estates',
    location: 'Lagos, Nigeria',
    type: 'Full-time'
  },
  {
    title: 'Civil Engineer',
    department: 'Arcovia Infrastructure',
    location: 'Lagos, Nigeria',
    type: 'Full-time'
  }
]

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section — editorial split */}
      <section className="section-padding bg-white">
        <div className="container-custom grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="label mb-6 block">Careers</span>
            <h1 className="heading-lg text-stone-900 mb-8">
              Build your legacy with us
            </h1>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                Join KÓRADEON GROUP and be part of a team that's building enduring institutions across Africa. We're looking for talented individuals who share our vision of long-term value creation and institutional excellence.
              </p>
              <p>
                At KÓRADEON, you'll have the opportunity to work on transformative projects, collaborate with industry leaders, and contribute to building businesses that will serve generations to come.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-stone-200 shadow-medium">
              <Image
                src={IMAGES.peopleTeam}
                alt="KÓRADEON colleagues collaborating in the Lagos office"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/70 via-stone-900/25 to-transparent p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-stone-300">
                  Life at KÓRADEON
                </p>
                <p className="mt-1.5 font-serif text-lg text-ivory-50">
                  One team across four businesses — Lagos and beyond.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Why Join Us</span>
            <h2 className="heading-md text-stone-900 mb-4">What we offer</h2>
            <p className="body-lg max-w-2xl mx-auto text-stone-700">
              We believe in creating an environment where our people can thrive and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-champagne-100 text-champagne-600 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif text-stone-900 mb-3">{benefit.title}</h3>
                <p className="text-stone-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Join Our Team</span>
            <h2 className="heading-md text-stone-900 mb-4">Open positions</h2>
            <p className="body-lg max-w-2xl mx-auto text-stone-700">
              Explore current opportunities across our four businesses.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-ivory-50 border border-stone-200 rounded-2xl p-6 hover:shadow-medium transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-stone-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-stone-600">
                      <span className="font-medium">{position.department}</span>
                      <span className="text-stone-400">•</span>
                      <span>{position.location}</span>
                      <span className="text-stone-400">•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button
                    disabled
                    className="inline-flex items-center justify-center px-6 py-3 bg-stone-900 text-ivory-50 font-medium rounded-lg opacity-50 cursor-not-allowed"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Programme */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label mb-4 block">Graduate Programme</span>
              <h2 className="heading-md text-stone-900 mb-6">
                Launch your career with KÓRADEON
              </h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  Our graduate programme offers talented young professionals the opportunity to gain hands-on experience across all four of our businesses. You'll work on real projects, receive mentorship from industry leaders, and develop the skills needed to build a successful career.
                </p>
                <p>
                  The programme rotates through different departments and businesses, giving you a comprehensive understanding of how a diversified holding company operates.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">12-24 month structured programme</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Rotations across all four businesses</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Mentorship from senior leaders</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Professional development and training</p>
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
              <div className="relative aspect-video overflow-hidden rounded-lg border border-stone-200 shadow-medium">
                <Image
                  src={IMAGES.meetingBoard}
                  alt="Graduate associates in a strategy session with senior leadership"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/75 via-stone-900/25 to-transparent p-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-stone-300">
                    Graduate Programme
                  </p>
                  <p className="mt-1.5 font-serif text-lg text-ivory-50">
                    Launch your career where decisions are made.
                  </p>
                </div>
              </div>
            </motion.div>
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
                Ready to build the future?
              </h2>
              <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your CV and let's start a conversation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="mailto:careers@koradeon.com" className="btn-secondary border-ivory-50 text-ivory-50 hover:bg-ivory-50 hover:text-stone-900">
                  careers@koradeon.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
