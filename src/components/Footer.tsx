'use client'

import Link from 'next/link'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'
import { FOOTER_NAVIGATION, COMPANY_INFO } from '@/constants/brand'
import { Logo } from '@/components/Logo'
import { LinkedinIcon, TiktokIcon, InstagramIcon, XIcon, YoutubeIcon, FacebookIcon } from '@/components/SocialIcons'
import { NewsletterForm } from '@/features/newsletter/NewsletterForm'

const socials: { key: string; name: string; href: string; icon: React.ReactNode }[] = [
  { key: 'linkedin', name: 'LinkedIn', href: COMPANY_INFO.social.linkedin, icon: <LinkedinIcon className="w-4 h-4" /> },
  { key: 'tiktok', name: 'TikTok', href: COMPANY_INFO.social.tiktok, icon: <TiktokIcon className="w-4 h-4" /> },
  { key: 'instagram', name: 'Instagram', href: COMPANY_INFO.social.instagram, icon: <InstagramIcon className="w-4 h-4" /> },
  { key: 'twitter', name: 'X (Twitter)', href: COMPANY_INFO.social.twitter, icon: <XIcon className="w-4 h-4" /> },
  { key: 'youtube', name: 'YouTube', href: COMPANY_INFO.social.youtube, icon: <YoutubeIcon className="w-4 h-4" /> },
  { key: 'facebook', name: 'Facebook', href: COMPANY_INFO.social.facebook, icon: <FacebookIcon className="w-4 h-4" /> },
]

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300" role="contentinfo">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6" aria-label="KÓRADEON GROUP — Home">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 shrink-0 bg-ivory-50/95 rounded-xl p-2">
                  <Logo className="w-full h-full" />
                </div>
                <div>
                  <div className="text-xl font-serif tracking-tight text-ivory-50">KÓRADEON</div>
                  <div className="text-[10px] tracking-[0.35em] text-stone-400 uppercase">Group</div>
                </div>
              </div>
            </Link>
            <p className="text-stone-400 max-w-md mb-8 leading-relaxed text-sm">
              A diversified holding company building enduring institutions across agriculture, hospitality, real estate
              and infrastructure — for the long term, across Africa and beyond.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${COMPANY_INFO.email.general}`}
                className="flex items-center space-x-3 text-stone-400 hover:text-ivory-50 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>{COMPANY_INFO.email.general}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center space-x-3 text-stone-400 hover:text-ivory-50 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <div className="flex items-center space-x-3 text-stone-400">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>{COMPANY_INFO.headquarters}</span>
              </div>
            </div>
          </div>
{/* Businesses */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-200 mb-6">Our Businesses</h3>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.businesses.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm text-stone-400 hover:text-ivory-50 transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-200 mb-6">Company</h3>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm text-stone-400 hover:text-ivory-50 transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-200 mb-6">Opportunities</h3>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.opportunities.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm text-stone-400 hover:text-ivory-50 transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-200 mb-6">Newsletter</h3>
            <p className="text-sm text-stone-400 mb-5 leading-relaxed">
              Market perspectives, project milestones and Group announcements — monthly.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>
{/* Social row */}
        <div className="py-8 border-t border-stone-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {socials.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid place-items-center w-10 h-10 rounded-full border border-stone-700 text-stone-400 hover:text-stone-900 hover:bg-champagne-300 hover:border-champagne-300 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-stone-500 font-serif italic">“Building enduring businesses.”</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} KÓRADEON GROUP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-stone-500 hover:text-ivory-50 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-stone-500 hover:text-ivory-50 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/brand-centre" className="text-xs text-stone-500 hover:text-ivory-50 transition-colors duration-300">
              Brand Centre
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}