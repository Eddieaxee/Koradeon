// Animation variants and constants for KÓRADEON GROUP
// All animations follow the architectural motion design system

export const ANIMATION_EASING = {
  OUT_EXPO: [0.19, 1, 0.22, 1],
  IN_OUT_EXPO: [0.87, 0, 0.13, 1],
  OUT_QUART: [0.25, 0.46, 0.45, 0.94],
  IN_OUT_QUINT: [0.83, 0, 0.58, 1],
} as const

export const ANIMATION_DURATIONS = {
  FAST: 0.3,
  STANDARD: 0.5,
  SLOW: 0.8,
  VERY_SLOW: 1.2,
} as const

export const ANIMATION_DELAYS = {
  NONE: 0,
  SM: 0.1,
  MD: 0.2,
  LG: 0.3,
  XL: 0.4,
} as const

// Fade variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
}

// Scale variants
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
}

export const scaleBounce = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
}

// Stagger children animation
export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// Hover animations
export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.3, ease: ANIMATION_EASING.OUT_EXPO },
}

export const hoverLift = {
  y: -5,
  transition: { duration: 0.3, ease: ANIMATION_EASING.OUT_EXPO },
}

// Logo-specific animations
export const logoAssembly = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: ANIMATION_EASING.OUT_EXPO,
      type: 'spring',
      stiffness: 100,
    },
  },
}

export const logoLightPass = {
  initial: { x: '-100%' },
  animate: { x: '200%' },
}

// Construction line animations
export const constructionLine = {
  initial: { scaleX: 0, transformOrigin: 'left' },
  animate: { scaleX: 1 },
}

// Fade and slide for sections
export const sectionFadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: ANIMATION_EASING.OUT_EXPO },
}

export const slideInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
}

export const slideInFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
}

// Button animations
export const buttonTap = {
  scale: 0.98,
}

// Card hover effect
export const cardHover = {
  boxShadow: 'var(--shadow-large)',
  transition: { duration: 0.3, ease: ANIMATION_EASING.OUT_EXPO },
}

// Text reveal animation
export const textReveal = {
  initial: { width: 0, opacity: 0 },
  animate: { width: '100%', opacity: 1 },
  transition: { duration: 0.8, ease: ANIMATION_EASING.OUT_EXPO },
}

// Statistics count-up
export const countUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// Scroll-triggered animation helper
export const scrollAnimation = (delay = 0, direction = 'up') => {
  const directionOffset = direction === 'up' ? 30 : direction === 'down' ? -30 : 0
  const xOffset = direction === 'left' ? 30 : direction === 'right' ? -30 : 0

  return {
    initial: {
      opacity: 0,
      y: directionOffset,
      x: xOffset,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: ANIMATION_EASING.OUT_EXPO,
      },
    },
  }
}