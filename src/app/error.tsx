'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center bg-ivory-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8">
            <span className="text-9xl font-serif text-stone-200">!</span>
          </div>
          
          <h1 className="heading-md text-stone-900 mb-6">
            Something went wrong
          </h1>
          
          <p className="body-lg text-stone-700 mb-12">
            We apologize for the inconvenience. An error occurred while loading this page. Please try again or contact us if the problem persists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={reset}
              className="btn-primary"
            >
              Try Again
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <Link href="/" className="btn-secondary">
              Return to Homepage
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
