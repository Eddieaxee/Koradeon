'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)
  const [showSkip, setShowSkip] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    // Check if intro has already played
    const introPlayed = sessionStorage.getItem('koradeon-intro-played')
    if (introPlayed) {
      setHasPlayed(true)
      onComplete()
      return
    }

    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => setShowSkip(true), 2000)

    // Auto-complete after 7 seconds
    const completeTimer = setTimeout(() => {
      sessionStorage.setItem('koradeon-intro-played', 'true')
      setHasPlayed(true)
      onComplete()
    }, 7000)

    return () => {
      clearTimeout(skipTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  const handleSkip = () => {
    sessionStorage.setItem('koradeon-intro-played', 'true')
    setIsVisible(false)
    setTimeout(() => {
      setHasPlayed(true)
      onComplete()
    }, 500)
  }

  const handleReplay = () => {
    sessionStorage.removeItem('koradeon-intro-played')
    setHasPlayed(false)
    setIsVisible(true)
    setShowSkip(false)
    
    setTimeout(() => {
      setShowSkip(true)
    }, 2000)

    setTimeout(() => {
      sessionStorage.setItem('koradeon-intro-played', 'true')
      setHasPlayed(true)
      onComplete()
    }, 7000)
  }

  if (hasPlayed && !isVisible) {
    return (
      <button
        onClick={handleReplay}
        className="fixed bottom-6 right-6 z-50 p-3 bg-stone-900 text-ivory-50 rounded-full shadow-large hover:bg-stone-800 transition-colors duration-300"
        aria-label="Replay intro animation"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    )
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-stone-900 flex items-center justify-center"
        >
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 blueprint-grid opacity-30" />

          {/* Structural Guides */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="absolute left-1/4 top-0 bottom-0 w-px bg-champagne-500/20"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="absolute right-1/4 top-0 bottom-0 w-px bg-champagne-500/20"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="absolute top-1/4 left-0 right-0 h-px bg-champagne-500/20"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="absolute bottom-1/4 left-0 right-0 h-px bg-champagne-500/20"
          />

          {/* Floating Dots */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1.2, 1],
                  opacity: [0, 1, 1, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  delay: 0.5 + index * 0.3,
                  ease: [0.19, 1, 0.22, 1]
                }}
                className={`absolute w-3 h-3 rounded-full bg-champagne-500 ${
                  index === 0 ? 'translate-x-[-40px]' : index === 2 ? 'translate-x-[40px]' : ''
                }`}
              />
            ))}
          </div>

          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2,
              delay: 1.5,
              ease: [0.19, 1, 0.22, 1]
            }}
            className="relative z-10"
          >
            {/* Metallic Light Effect */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ 
                duration: 2,
                delay: 2.5,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne-300/20 to-transparent"
            />

            {/* Logo */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64">
              <Image
                src="/images/logo.png"
                alt="KÓRADEON GROUP"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 3,
                ease: [0.19, 1, 0.22, 1]
              }}
              className="text-center mt-8"
            >
              <h1 className="text-4xl sm:text-5xl font-serif text-ivory-50 tracking-tight mb-2">
                KÓRADEON
              </h1>
              <p className="text-sm sm:text-base text-stone-400 tracking-widest uppercase">
                Building Enduring Businesses
              </p>
            </motion.div>
          </motion.div>

          {/* Skip Button */}
          {showSkip && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleSkip}
              className="absolute bottom-8 right-8 px-6 py-3 text-sm text-stone-400 hover:text-ivory-50 transition-colors duration-300 z-20"
            >
              Skip Intro
            </motion.button>
          )}

          {/* Replay Button (shown after completion) */}
          {hasPlayed && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={handleReplay}
              className="absolute bottom-8 right-8 p-3 text-stone-400 hover:text-ivory-50 transition-colors duration-300 z-20"
              aria-label="Replay intro"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
