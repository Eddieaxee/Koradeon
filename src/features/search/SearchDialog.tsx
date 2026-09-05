'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, FileText, Building2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { BUSINESSES, NAVIGATION } from '@/constants/brand'

export interface SearchResult {
  title: string
  href: string
  category: string
  description?: string
  icon: React.ReactNode
}

const allSearchResults: SearchResult[] = [
  ...NAVIGATION.map(item => ({
    title: item.name,
    href: item.href,
    category: 'Pages',
    icon: <FileText className="w-4 h-4" />
  })),
  ...BUSINESSES.map(business => ({
    title: business.name,
    href: `/businesses#${business.id}`,
    category: 'Businesses',
    description: business.tagline,
    icon: <Building2 className="w-4 h-4" />
  }))
]

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const router = useRouter()

  const handleSearch = (value: string) => {
    setQuery(value)
    
    if (value.length < 2) {
      setResults([])
      return
    }

    const filtered = allSearchResults.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.category.toLowerCase().includes(value.toLowerCase()) ||
      (item.description?.toLowerCase().includes(value.toLowerCase()) ?? false)
    )
    setResults(filtered.slice(0, 8))
  }

  const handleSelect = (href: string) => {
    router.push(href)
    onClose()
    setQuery('')
    setResults([])
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[200] w-full max-w-2xl mx-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-white border border-stone-200 rounded-2xl shadow-large overflow-hidden">
              <div className="relative">
                <Search className="absolute left-4 top-4 w-5 h-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search pages, businesses, news..."
                  className="w-full pl-12 pr-4 py-4 text-lg focus:outline-none border-b border-stone-200 bg-transparent"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  autoFocus
                />
              </div>
              
              <div className="max-h-80 overflow-y-auto">
                {results.length > 0 ? (
                  results.map((result) => (
                    <button
                      key={`${result.category}-${result.href}`}
                      onClick={() => handleSelect(result.href)}
                      className="w-full flex items-center px-4 py-3 text-left hover:bg-stone-50 transition-colors duration-200 group border-b border-stone-100 last:border-0"
                    >
                      <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center mr-4 flex-shrink-0">
                        {result.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-stone-900">{result.title}</div>
                        {result.description && (
                          <div className="text-sm text-stone-500 truncate">{result.description}</div>
                        )}
                      </div>
                      <span className="text-xs text-stone-400 uppercase">{result.category}</span>
                      <ArrowRight className="w-4 h-4 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2" />
                    </button>
                  ))
                ) : query.length >= 2 ? (
                  <div className="px-4 py-8 text-center text-stone-500">
                    No results found for &quot;{query}&quot;
                  </div>
                ) : (
                  <div className="px-4 py-6">
                    <p className="text-sm text-stone-500 mb-2">Recent searches</p>
                    <div className="space-y-2">
                      {['About', 'Businesses', 'Careers'].map(item => (
                        <button
                          key={item}
                          onClick={() => handleSelect(`/${item.toLowerCase()}`)}
                          className="w-full flex items-center px-3 py-2 text-left text-stone-700 hover:bg-stone-50 rounded-lg transition-colors duration-200"
                        >
                          <FileText className="w-4 h-4 mr-3" />
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
