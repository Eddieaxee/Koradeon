'use client'

import { useRef, useCallback } from 'react'

/**
 * Magnetic hover — elements lean gently toward the cursor.
 * Returns a ref plus mouse handlers to spread onto the element.
 */
export function useMagnetic(strength = 0.25) {
  const ref = useRef<HTMLElement | null>(null)

  const onMouseMove = useCallback(
    (event: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = event.clientX - (rect.left + rect.width / 2)
      const y = event.clientY - (rect.top + rect.height / 2)
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
      el.style.transition = 'transform 0.1s linear'
    },
    [strength]
  )

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
    el.style.transform = 'translate(0px, 0px)'
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
