'use client'

import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react'

interface AppContextValue {
  /** Command palette open state — shared across Navigation, Footer, hotkeys */
  isCommandPaletteOpen: boolean
  openCommandPalette: () => void
  closeCommandPalette: () => void
  /** Replay the cinematic intro from anywhere (footer easter egg, brand centre) */
  replayIntro: () => void
  /** Set when the user prefers reduced motion — components read this to disable animation */
  prefersReducedMotion: boolean
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [introKey, setIntroKey] = useState(0)
  const [introActive, setIntroActive] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const openCommandPalette = useCallback(() => setIsCommandPaletteOpen(true), [])
  const closeCommandPalette = useCallback(() => setIsCommandPaletteOpen(false), [])

  const replayIntro = useCallback(() => {
    setIntroKey((k) => k + 1)
    setIntroActive(true)
  }, [])

  const value = useMemo(
    () => ({
      isCommandPaletteOpen,
      openCommandPalette,
      closeCommandPalette,
      replayIntro,
      introKey,
      introActive,
      setIntroActive,
      prefersReducedMotion,
    }),
    [isCommandPaletteOpen, openCommandPalette, closeCommandPalette, replayIntro, introKey, introActive, prefersReducedMotion]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
