'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

/**
 * KÓRADEON — opening experience.
 *
 * One quiet, cinematic gesture: a champagne rule draws itself across the
 * dark, the official logo is revealed through a soft wipe, the wordmark
 * settles beneath it — then the curtain lifts onto the hero, which has been
 * warming underneath the whole time.
 *
 * • Plays once per session (sessionStorage), never on every visit.
 * • Respects prefers-reduced-motion (brief fade only).
 * • Skippable from 0.9s — the intro never traps the user.
 * • The official /images/logo.png is used untouched: only its appearance
 *   (clip, scale, opacity) is animated, never its geometry or colour.
 */

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const HOLD_MS = 2700

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(false)
  const [showSkip, setShowSkip] = useState(false)
  const finished = useRef(false)

  const finish = () => {
    if (finished.current) return
    finished.current = true
    try {
      sessionStorage.setItem('koradeon-intro-played', 'true')
    } catch {
      /* private mode — intro simply plays once per mount */
    }
    setVisible(false)
    onComplete()
  }

  useEffect(() => {
    let played = false
    try {
      played = sessionStorage.getItem('koradeon-intro-played') === 'true'
    } catch {
      played = false
    }

    // Already seen this session — release the page instantly.
    if (played) {
      finished.current = true
      onComplete()
      return
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setVisible(true)
    const skipTimer = setTimeout(() => setShowSkip(true), reduced ? 0 : 900)
    const doneTimer = setTimeout(finish, reduced ? 350 : HOLD_MS)
    return () => {
      clearTimeout(skipTimer)
      clearTimeout(doneTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="koradeon-intro"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#12100D]"
          role="presentation"
          aria-hidden="true"
        >
          {/* Soft champagne aura behind the mark — barely there */}
          <div
            className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
            style={{
              background:
                'radial-gradient(closest-side, rgba(184,164,126,0.16), rgba(184,164,126,0.05) 55%, transparent 75%)',
            }}
          />

          {/* The rule: draws itself first */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.05, ease: EASE, delay: 0.15 }}
            className="absolute left-1/2 top-1/2 h-px w-[min(76vw,480px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#B8A47E]/70 to-transparent"
          />

          {/* Official logo — revealed by a wipe, gently settling to scale */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.35 }}
            className="relative z-10 h-36 w-36 sm:h-44 sm:w-44"
          >
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.15, ease: EASE, delay: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src="/images/logo.png"
                alt=""
                fill
                priority
                sizes="176px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Wordmark settles beneath the mark */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.45 }}
            className="absolute bottom-[22%] z-10 text-center"
          >
            <p className="font-serif text-xl tracking-[0.42em] text-[#F0EBE4] sm:text-2xl">
              KÓRADEON
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.5em] text-[#8E8578]">
              Group
            </p>
          </motion.div>

          {/* Skip — small, unobtrusive, always honest */}
          <AnimatePresence>
            {showSkip && (
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={finish}
                className="absolute bottom-6 right-6 z-20 text-[11px] uppercase tracking-[0.25em] text-[#8E8578] transition-colors duration-300 hover:text-[#F0EBE4]"
              >
                Skip
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}