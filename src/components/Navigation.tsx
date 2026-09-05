'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, Linkedin, Instagram, Twitter, Youtube, Facebook, Music } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAVIGATION, COMPANY_INFO } from '@/constants/brand'
import { useUI } from '@/contexts/UIProvider'

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin className="w-4 h-4" />,
  Instagram: <Instagram className="w-4 h-4" />,
  Twitter: <Twitter className="w-4 h-4" />,
  Youtube: <Youtube className="w-4 h-4" />,
  Facebook: <Facebook className="w-4 h-4" />,
  Music: <Music className="w-4 h-4" />
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openSearch } = useUI()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-ivory-50/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
        }`}
      >
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative group" aria-label="KÓRADEON GROUP Home">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <rect x="2" y="2" width="18" height="18" fill="currentColor" className="text-stone-900"/>
                    <rect x="28" y="2" width="18" height="18" fill="currentColor" className="text-stone-900"/>
                    <rect x="2" y="28" width="18" height="18" fill="currentColor" className="text-stone-900"/>
                    <circle cx="38" cy="38" r="8" fill="currentColor" className="text-champagne-500"/>
                  </svg>
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg lg:text-xl font-serif tracking-tight text-stone-900">
                    KÓRADEON
                  </div>
                  <div className="text-xs tracking-widest text-stone-600 uppercase">
                    Group
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 relative ${
                    pathname === item.href
                      ? 'text-stone-900'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Social Links - Desktop */}
              <div className="hidden lg:flex items-center space-x-3">
                {Object.entries(COMPANY_INFO.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 hover:text-champagne-600 transition-colors duration-300"
                    aria-label={platform}
                  >
                    {socialIcons[platform.charAt(0).toUpperCase() + platform.slice(1)] || socialIcons[platform]}
                  </a>
                ))}
              </div>

              <button
                onClick={openSearch}
                className="hidden lg:flex items-center space-x-2 px-4 py-2 text-sm text-stone-600 bg-stone-100/50 rounded-full hover:bg-stone-100 transition-colors duration-300"
                aria-label="Open search (Ctrl+K)"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
                <kbd className="hidden xl:inline-flex items-center px-2 py-0.5 text-xs text-stone-500 bg-stone-200/50 rounded">
                  ⌘K
                </kbd>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-stone-900 hover:text-stone-700 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-40 bg-ivory-50 pt-24 pb-8 px-6 lg:hidden"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
              {NAVIGATION.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-4 text-2xl font-serif tracking-tight transition-colors duration-300 ${
                      pathname === item.href
                        ? 'text-stone-900'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Social Links - Mobile */}
            <div className="mt-8 pt-8 border-t border-stone-200">
              <div className="flex items-center justify-center space-x-6">
                {Object.entries(COMPANY_INFO.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 hover:text-champagne-600 transition-colors duration-300"
                    aria-label={platform}
                  >
                    {socialIcons[platform.charAt(0).toUpperCase() + platform.slice(1)] || socialIcons[platform]}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-200">
              <button
                onClick={openSearch}
                className="flex items-center space-x-3 w-full px-4 py-3 text-stone-600 bg-stone-100/50 rounded-lg"
              >
                <Search className="w-5 h-5" />
                <span className="text-base">Search</span>
                <kbd className="ml-auto px-2 py-1 text-xs text-stone-500 bg-stone-200/50 rounded">
                  ⌘K
                </kbd>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
