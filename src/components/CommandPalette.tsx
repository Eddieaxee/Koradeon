'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, FileText, Users, Building2, Briefcase, Newspaper, Lightbulb, TrendingUp, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { BUSINESSES } from '@/constants/brand'
import { useUI } from '@/contexts/UIProvider'

interface SearchItem {
  title: string
  href: string
  category: string
  icon: React.ReactNode
}

const searchItems: SearchItem[] = [
  { title: 'About KÓRADEON', href: '/about', category: 'Company', icon: <FileText className="w-4 h-4" /> },
  { title: 'Our Legacy', href: '/legacy', category: 'Company', icon: <FileText className="w-4 h-4" /> },
  { title: 'Our Businesses', href: '/businesses', category: 'Company', icon: <Building2 className="w-4 h-4" /> },
  { title: 'Innovation', href: '/innovation', category: 'Company', icon: <Lightbulb className="w-4 h-4" /> },
  { title: 'Portfolio', href: '/portfolio', category: 'Company', icon: <Briefcase className="w-4 h-4" /> },
  { title: 'Newsroom', href: '/newsroom', category: 'Media', icon: <Newspaper className="w-4 h-4" /> },
  { title: 'Insights', href: '/insights', category: 'Media', icon: <Lightbulb className="w-4 h-4" /> },
  { title: 'Investors', href: '/investors', category: 'Stakeholders', icon: <TrendingUp className="w-4 h-4" /> },
  { title: 'Careers', href: '/careers', category: 'Opportunities', icon: <Users className="w-4 h-4" /> },
  { title: 'Contact', href: '/contact', category: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ...BUSINESSES.map(b => ({
    title: b.name,
    href: `/businesses#${b.id}`,
    category: 'Businesses' as const,
    icon: <Building2 className="w-4 h-4" />
  }))
]

export function CommandPalette() {
  const { isSearchOpen: isOpen, openSearch, closeSearch } = useUI()
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const openCommandPalette = useCallback(() => {
    openSearch()
    setSearchQuery('')
  }, [openSearch])

  const closeCommandPalette = useCallback(() => {
    closeSearch()
    setSearchQuery('')
  }, [closeSearch])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        openCommandPalette()
      }
      if (e.key === 'Escape' && isOpen) {
        closeCommandPalette()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, openCommandPalette, closeCommandPalette])

  const filteredItems = searchQuery
    ? searchItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchItems

  const handleSelect = (href: string) => {
    router.push(href)
    closeCommandPalette()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-50"
            onClick={closeCommandPalette}
          />

          {/* Command Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-x-4 top-[20%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl bg-ivory-50 rounded-2xl shadow-large z-50 overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center px-6 py-4 border-b border-stone-200">
              <Search className="w-5 h-5 text-stone-400 mr-3" />
              <input
                type="text"
                placeholder="Search pages, businesses, news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-stone-900 placeholder-stone-400 outline-none text-lg"
                autoFocus
              />
              <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs text-stone-500 bg-stone-100 rounded">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredItems.length > 0 ? (
                <div className="space-y-1">
                  {filteredItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleSelect(item.href)}
                      className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-200 text-left group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-stone-100 text-stone-600 mr-4 group-hover:bg-champagne-200 group-hover:text-stone-900 transition-colors duration-200">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-stone-900 font-medium">{item.title}</div>
                        <div className="text-sm text-stone-500">{item.category}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-12 text-center">
                  <p className="text-stone-500">No results found for &quot;{searchQuery}&quot;</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-stone-100 rounded text-stone-600 mr-1.5">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-stone-100 rounded text-stone-600 mr-1.5">↵</kbd>
                  Select
                </span>
              </div>
              <span>Powered by KÓRADEON</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
