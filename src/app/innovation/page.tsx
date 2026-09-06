'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Cpu, Globe, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/constants/assets'



const innovationAreas = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Artificial Intelligence',
    description: 'Leveraging AI and machine learning to optimize operations, enhance decision-making, and create new value streams across all our businesses.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Digital Twins',
    description: 'Creating virtual replicas of physical assets and systems to simulate, analyze, and optimize performance before implementation.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Smart Infrastructure',
    description: 'Building IoT-enabled infrastructure that responds dynamically to needs, improving efficiency and sustainability.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Sustainable Technology',
    description: 'Developing and implementing green technologies that reduce environmental impact while enhancing operational efficiency.'
  }
]

const technologies = [
  'AI & Machine Learning',
  'Internet of Things (IoT)',
  'Geographic Information Systems (GIS)',
  'Building Information Modeling (BIM)',
  'Parametric Design',
  'Robotics & Automation',
  'Renewable Energy Systems',
  'Blockchain',
  'Drones & Autonomous Systems',
  'Data Analytics',
  'Cloud Computing',
  'Edge Computing'
]

export default function InnovationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="label mb-6 block">Innovation</span>
            <h1 className="text-3xl font-serif leading-[1.1] tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
              Technology in service of the physical economy
            </h1>
            <div className="body-md mt-7 max-w-xl space-y-5 text-stone-700">
              <p>
                Innovation at KÓRADEON is not cosmetic. Sensor networks, analytics and
                renewable systems are embedded into the daily operations of every business —
                lowering costs, raising yields and compounding advantage season after season.
              </p>
              <p>
                From AI-guided agriculture to instrumented infrastructure corridors, we invest
                in capabilities that make our operating companies harder to compete with.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-stone-500">Programmes</dt>
                <dd className="mt-2 font-serif text-2xl text-stone-900 sm:text-3xl">12+</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-stone-500">Pilots live</dt>
                <dd className="mt-2 font-serif text-2xl text-stone-900 sm:text-3xl">7</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-stone-500">Target</dt>
                <dd className="mt-2 font-serif text-2xl text-stone-900 sm:text-3xl">2040</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-stone-200 shadow-medium">
              <Image
                src={IMAGES.drone}
                alt="Drone surveying agricultural land — precision technology in the field"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/70 via-stone-900/25 to-transparent p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-stone-300">
                  In the field
                </p>
                <p className="mt-2 font-serif text-lg text-ivory-50 sm:text-xl">
                  Aerial intelligence guides planting, irrigation and harvest across the Kavora
                  land bank.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Our Focus</span>
            <h2 className="heading-md text-stone-900 mb-4">Key innovation areas</h2>
            <p className="body-lg max-w-2xl mx-auto text-stone-700">
              We are investing in technologies that will define the future of our industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-stone-200 rounded-2xl p-8 hover:shadow-medium transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-champagne-100 text-champagne-600 mb-6">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-4">{area.title}</h3>
                <p className="text-stone-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Technology Stack</span>
            <h2 className="heading-md text-stone-900 mb-4">Tools and technologies we leverage</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-stone-50 border border-stone-200 rounded-xl p-6 text-center hover:bg-stone-100 hover:border-champagne-300 transition-all duration-300"
              >
                <p className="text-stone-900 font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Applications */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">By Business</span>
            <h2 className="heading-md text-stone-900 mb-4">Innovation across our ecosystem</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                business: 'Kavora Farms',
                innovations: ['Precision agriculture with AI', 'IoT soil monitoring', 'Drone-based crop analysis', 'Automated irrigation systems'],
                color: 'kavora'
              },
              {
                business: 'Ozura Resorts',
                innovations: ['Smart room technology', 'AI-powered guest experiences', 'Sustainable energy systems', 'Digital concierge services'],
                color: 'ozura'
              },
              {
                business: 'Rumara Estates',
                innovations: ['Smart building systems', 'BIM and parametric design', 'Sustainable materials research', 'IoT-enabled properties'],
                color: 'rumara'
              },
              {
                business: 'Arcovia Infrastructure',
                innovations: ['Digital twin infrastructure', 'Autonomous construction equipment', 'Smart city solutions', 'Advanced GIS mapping'],
                color: 'arcovia'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-stone-200 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-serif text-stone-900 mb-6">{item.business}</h3>
                <ul className="space-y-3">
                  {item.innovations.map((innovation, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-champagne-500 mt-2 flex-shrink-0" />
                      <span className="text-stone-700">{innovation}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label mb-4 block">Research & Development</span>
              <h2 className="heading-md text-stone-900 mb-6">
                Investing in tomorrow's solutions
              </h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  Our R&D initiatives focus on developing breakthrough technologies and solutions that will shape the future of our industries. We collaborate with leading research institutions, technology partners, and academic organizations worldwide.
                </p>
                <p>
                  Through strategic investments in research, we aim to create intellectual property, develop proprietary technologies, and build capabilities that will provide sustainable competitive advantages for decades to come.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Collaboration with leading universities and research institutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Proprietary technology development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Patent portfolio development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-champagne-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-champagne-600" />
                  </div>
                  <p className="text-stone-700">Technology scouting and evaluation</p>
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
                      <Lightbulb className="w-10 h-10 text-champagne-500" />
                    </div>
                    <p className="text-stone-600 font-medium">Research & Development</p>
                    <p className="text-stone-500 text-sm mt-2">Building the future</p>
                  </div>
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
                Partner with us in innovation
              </h2>
              <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
                We are always looking for innovative partners, researchers, and technologists to join us in building the future.
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
  )
}
