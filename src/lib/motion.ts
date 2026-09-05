/**
 * KÓRADEON unified motion language.
 * One source of truth for timing and easing — architectural, restrained, calm.
 */

export const EASE = {
  /** Signature ease — confident deceleration, like settling stone. */
  signature: [0.22, 1, 0.36, 1],
  /** For entrances that should feel drafted, not dropped. */
  precise: [0.16, 1, 0.3, 1],
  /** Soft exits. */
  exit: [0.4, 0, 0.2, 1],
} as const

export const DURATION = {
  micro: 0.2,
  base: 0.5,
  slow: 0.8,
  cinematic: 1.2,
} as const

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.signature, delay },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: DURATION.slow, ease: EASE.signature, delay },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE.precise, delay },
  }),
}

export const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: DURATION.cinematic, ease: EASE.precise, delay },
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const viewportOnce = { once: true, margin: '-80px' } as const
