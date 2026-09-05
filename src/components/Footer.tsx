'use client'

import Link from 'next/link'
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Youtube, Facebook, Music } from 'lucide-react'
import { FOOTER_NAVIGATION, COMPANY_INFO } from '@/constants/brand'
import { Logo } from '@/components/Logo'
const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin className="w-4 h-4" />,
  Instagram: <Instagram className="w-4 h-4" />,
  Twitter: <Twitter className="w-4 h-4" />,
  Youtube: <Youtube className="w-4 h-4" />,
  Facebook: <Facebook className="w-4 h-4" />,
  Music: <Music className="w-4 h-4" />
}

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300" role="contentinfo">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
<Logo className="w-full h-full" />
                </div>
                <div>
                  <div className="text-xl font-serif tracking-tight text-ivory-50">
                    KÓRADEON
                  </div>
                  <div className="text-xs tracking-widest text-stone-400 uppercase">
                    Group
                  </div>
                </div>
              </div>
            </Link>
            <p className="text-stone-400 max-w-md mb-8 leading-relaxed">
              Building enduring businesses across Africa and beyond. A diversified holding company focused on long-term value creation and institutional excellence.
            </p>
            <div className="space-y-3">
              <a href={`mailto:${COMPANY_INFO.email.general}`} className="flex items-center space-x-3 text-stone-400 hover:text-ivory-50 transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span>{COMPANY_INFO.email.general}</span>
              </a>
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center space-x-3 text-stone-400 hover:text-ivory-50 transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <div className="flex items-center space-x-3 text-stone-400">
                <MapPin className="w-5 h-5" />
                <span>{COMPANY_INFO.headquarters}</span>
              </div>
            </div>
          </div>

          {/* Businesses */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-ivory-50 mb-6">
              Our Businesses
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.businesses.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-stone-400 hover:text-ivory-50 transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-ivory-50 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-stone-400 hover:text-ivory-50 transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-ivory-50 mb-6">
              Opportunities
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.opportunities.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-stone-400 hover:text-ivory-50 transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-8 border-t border-stone-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              {Object.entries(COMPANY_INFO.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-ivory-50 transition-colors duration-300"
                  aria-label={platform}
                >
                  {socialIcons[platform.charAt(0).toUpperCase() + platform.slice(1)] || socialIcons[platform]}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex-1 max-w-md">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-stone-800 border border-stone-700 text-ivory-50 placeholder-stone-500 focus:outline-none focus:border-champagne-500 transition-colors duration-300 rounded-lg text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-ivory-50 text-stone-900 font-medium tracking-wide hover:bg-champagne-300 transition-colors duration-300 rounded-lg text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} KÓRADEON GROUP. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-sm text-stone-500 hover:text-ivory-50 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-stone-500 hover:text-ivory-50 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
