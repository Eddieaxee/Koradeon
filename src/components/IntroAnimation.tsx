'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

/**
 * KÓRADEON — opening experience.
 *
 * A quiet, cinematic sequence: the dark holds still, a single champagne
 * line draws itself, the official logo is revealed through a soft wipe,
 * the wordmark settles — then the whole composition recedes, revealing
 * the page that has been waiting underneath.
 *
 * • Plays once per session (sessionStorage), never on every visit.
 * • Respects prefers-reduced-motion (brief fade only).
 * • Skippable from 0.8s — the intro never traps the user.
 * • The official /images/logo.png is used untouched: only its appearance
 *   (clip, scale, opacity) is animated, never its geometry or colour.
 */

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const HOLD_MS = 2400

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
    const skipTimer = setTimeout(() => setShowSkip(true), reduced ? 0 : 800)
    const doneTimer = setTimeout(finish, reduced ? 300 : HOLD_MS)
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
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0E0C0A]"
          role="presentation"
          aria-hidden="true"
        >
          {/* Soft champagne aura behind the mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.8, ease: EASE, delay: 0.2 }}
            className="absolute left-1/2 top-1/2 h-[55vmin] w-[55vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(closest-side, rgba(184,164,126,0.18), rgba(184,164,126,0.04) 55%, transparent 75%)',
            }}
          />

          {/* The rule: draws itself first */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            className="absolute left-1/2 top-1/2 h-px w-[min(70vw,420px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#B8A47E]/60 to-transparent"
          />

          {/* Official logo — revealed by a wipe, gently settling to scale */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
            className="relative z-10 h-32 w-32 sm:h-40 sm:w-40"
          >
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.0, ease: EASE, delay: 0.45 }}
              className="absolute inset-0"
            >
              <Image
                src="/images/logo.png"
                alt=""
                fill
                priority
                sizes="160px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Wordmark settles beneath the mark */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.3 }}
            className="absolute bottom-[20%] z-10 text-center"
          >
            <p className="font-serif text-xl tracking-[0.42em] text-[#F0EBE4] sm:text-2xl">
              KÓRADEON
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-3 text-[10px] uppercase tracking-[0.5em] text-[#8E8578]"
            >
              Group
            </motion.p>
          </motion.div>

          {/* Skip — small, unobtrusive */}
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