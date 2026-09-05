'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Counts from 0 to `target` once the element scrolls into view.
 * Attach the returned ref to the element you want to observe.
 */
export function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    let frame: number
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      // easeOutExpo — settles confidently rather than snapping
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return { ref, value }
}
