'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react'
import { COMPANY_INFO } from '@/constants/brand'
import MapSectionLazy from '@/components/MapSectionLazy'
import {
  LinkedinIcon,
  TiktokIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
  FacebookIcon
} from '@/components/SocialIcons'



const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    detail: 'info@koradeon.com',
    description: 'General enquiries'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    detail: '+234 800 000 0000',
    description: 'Mon-Fri, 9am-6pm WAT'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Office',
    detail: 'Lagos, Nigeria',
    description: 'Headquarters'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Hours',
    detail: '9:00 AM - 6:00 PM',
    description: 'Monday to Friday'
  }
]

const enquiryTypes = [
  'General Enquiry',
  'Investment Opportunity',
  'Media Enquiry',
  'Career Enquiry',
  'Partnership Enquiry',
  'Other'
]

export default function ContactPage() {
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
            <span className="label mb-6 block">Contact</span>
            <h1 className="heading-lg text-stone-900 mb-8">
              Let's start a conversation
            </h1>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                We'd love to hear from you. Whether you're interested in partnership opportunities, investment enquiries, media requests, or career opportunities, our team is here to help.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Get in Touch</span>
            <h2 className="heading-md text-stone-900 mb-4">Contact information</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-stone-200 rounded-2xl p-8 text-center hover:shadow-medium transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-champagne-100 text-champagne-600 mb-6">
                  {method.icon}
                </div>
                <h3 className="text-lg font-serif text-stone-900 mb-2">{method.title}</h3>
                <p className="text-stone-900 font-medium mb-1">{method.detail}</p>
                <p className="text-stone-600 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label mb-4 block">Send us a Message</span>
              <h2 className="heading-md text-stone-900 mb-6">
                We'd love to hear from you
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-ivory-50 border border-stone-200 rounded-lg focus:outline-none focus:border-champagne-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-ivory-50 border border-stone-200 rounded-lg focus:outline-none focus:border-champagne-500 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-stone-900 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-ivory-50 border border-stone-200 rounded-lg focus:outline-none focus:border-champagne-500 transition-colors duration-300"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="enquiryType" className="block text-sm font-medium text-stone-900 mb-2">
                    Enquiry Type *
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    required
                    className="w-full px-4 py-3 bg-ivory-50 border border-stone-200 rounded-lg focus:outline-none focus:border-champagne-500 transition-colors duration-300"
                  >
                    <option value="">Select an option</option>
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-ivory-50 border border-stone-200 rounded-lg focus:outline-none focus:border-champagne-500 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your enquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="sticky top-24">
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 lg:p-12">
                  <h3 className="text-2xl font-serif text-stone-900 mb-6">Other ways to connect</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider uppercase text-stone-900 mb-3">Investment Enquiries</h4>
                      <p className="text-stone-700 mb-2">
                        For investment opportunities and investor relations:
                      </p>
                      <a href="mailto:investors@koradeon.com" className="text-champagne-600 hover:text-champagne-700 font-medium">
                        investors@koradeon.com
                      </a>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold tracking-wider uppercase text-stone-900 mb-3">Media Enquiries</h4>
                      <p className="text-stone-700 mb-2">
                        For press and media requests:
                      </p>
                      <a href="mailto:media@koradeon.com" className="text-champagne-600 hover:text-champagne-700 font-medium">
                        media@koradeon.com
                      </a>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold tracking-wider uppercase text-stone-900 mb-3">Career Enquiries</h4>
                      <p className="text-stone-700 mb-2">
                        For career opportunities and applications:
                      </p>
                      <a href="mailto:careers@koradeon.com" className="text-champagne-600 hover:text-champagne-700 font-medium">
                        careers@koradeon.com
                      </a>
                    </div>

                                        <div className="pt-6 border-t border-stone-200">
                      <h4 className="text-sm font-semibold tracking-wider uppercase text-stone-900 mb-3">Follow Us</h4>
                      <div className="flex items-center space-x-5">
                        <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#0A66C2] transition-colors duration-300" aria-label="KÓRADEON on LinkedIn">
                          <LinkedinIcon className="w-5 h-5" />
                        </a>
                        <a href={COMPANY_INFO.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900 transition-colors duration-300" aria-label="KÓRADEON on TikTok">
                          <TiktokIcon className="w-5 h-5" />
                        </a>
                        <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#E4405F] transition-colors duration-300" aria-label="KÓRADEON on Instagram">
                          <InstagramIcon className="w-5 h-5" />
                        </a>
                        <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900 transition-colors duration-300" aria-label="KÓRADEON on X (Twitter)">
                          <XIcon className="w-5 h-5" />
                        </a>
                        <a href={COMPANY_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#FF0000] transition-colors duration-300" aria-label="KÓRADEON on YouTube">
                          <YoutubeIcon className="w-5 h-5" />
                        </a>
                        <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#1877F2] transition-colors duration-300" aria-label="KÓRADEON on Facebook">
                          <FacebookIcon className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="label mb-4 block">Our Location</span>
            <h2 className="heading-md text-stone-900 mb-4">Visit our headquarters</h2>
          </motion.div>

          <MapSectionLazy />
        </div>
      </section>
    </main>
  )
}
