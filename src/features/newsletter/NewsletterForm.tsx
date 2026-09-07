'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

interface NewsletterFormProps {
  className?: string
  variant?: 'default' | 'minimal' | 'footer'
}

export function NewsletterForm({ className = '', variant = 'default' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setError('')

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In production, replace with actual API call:
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // })
      // if (!response.ok) throw new Error('Failed to subscribe')

            setIsSuccess(true)
      setEmail('')
    } catch {
      setError('Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-center py-8 ${className}`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4"
        >
          <Send className="w-8 h-8" />
        </motion.div>
        <h3 className="text-xl font-serif text-stone-900 mb-2">Thank You!</h3>
        <p className="text-stone-600">You&apos;ve been added to our newsletter.</p>
      </motion.div>
    )
  }

  const formClass = {
    default: 'flex flex-col sm:flex-row gap-3',
    minimal: 'flex gap-2',
    footer: 'flex gap-3'
  }[variant]

  const inputClass = {
    default: 'flex-1 px-6 py-4 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-champagne-500 transition-colors duration-300 text-stone-900 placeholder-stone-500',
    minimal: 'flex-1 px-4 py-2 bg-stone-100 border border-stone-200 rounded-lg focus:outline-none focus:border-champagne-500 transition-colors duration-300 text-stone-900 placeholder-stone-500',
    footer: 'flex-1 min-w-0 px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg focus:outline-none focus:border-champagne-500 transition-colors duration-300 text-ivory-50 placeholder-stone-500'
  }[variant]

  const buttonClass = {
    default: 'px-8 py-4 bg-stone-900 text-ivory-50 font-medium tracking-wide hover:bg-stone-800 transition-colors duration-300 disabled:opacity-50',
    minimal: 'px-4 py-2 bg-champagne-500 text-stone-900 font-medium rounded-lg hover:bg-champagne-600 transition-colors duration-300',
    footer: 'shrink-0 px-5 py-3 bg-champagne-500 text-stone-900 font-medium rounded-lg hover:bg-champagne-600 transition-colors duration-300'
  }[variant]

  return (
    <form onSubmit={handleSubmit} className={formClass}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        disabled={isSubmitting}
        className={inputClass}
        aria-label="Email address"
      />
      <motion.button
        type="submit"
        disabled={isSubmitting || !email}
        whileTap={{ scale: 0.98 }}
        className={buttonClass}
        aria-label="Subscribe to newsletter"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <Send className="w-5 h-5" />
        )}
      </motion.button>
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm mt-2"
        >
          {error}
        </motion.p>
      )}
    </form>
  )
}

export default NewsletterForm