/**
 * KÓRADEON — official brand mark.
 * The single source of truth for the identity is `/images/logo.png`.
 * This component renders that exact asset everywhere the logo appears:
 * do not redraw, restyle or reinterpret it.
 *
 * Server-safe: no client hooks, usable anywhere.
 */

import Image from 'next/image'

interface LogoProps {
  className?: string
  /** Gently animates the mark (CSS, respects reduced motion via globals). */
  animated?: boolean
  title?: string
}

export function Logo({ className = 'h-10 w-10', animated = false, title = 'KÓRADEON GROUP' }: LogoProps) {
  return (
    <span className={`relative inline-block ${className} ${animated ? 'animate-logo-breathe' : ''}`}>
      <Image
        src="/images/logo.png"
        alt={title}
        fill
        priority={false}
        sizes="160px"
        className="object-contain"
        aria-hidden={false}
      />
    </span>
  )
}

/** Full lockup: official mark + wordmark, for footer and intro contexts. */
export function LogoFull({ className = '', animated = false }: { className?: string; animated?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Logo className="h-10 w-10 shrink-0" animated={animated} />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg tracking-tight">KÓRADEON</span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.35em] opacity-70">Group</span>
      </span>
    </span>
  )
}
