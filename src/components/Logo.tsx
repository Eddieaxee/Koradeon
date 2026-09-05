/**
 * KÓRADEON mark — faithful SVG recreation of the official K logo.
 * Transparent background, currentColor body, champagne foundational dots.
 * Server-safe: no client hooks, usable anywhere.
 */

interface LogoProps {
  className?: string
  /** Gently animates the three foundational dots (CSS, respects reduced motion via globals). */
  animated?: boolean
  title?: string
}

export function Logo({ className = 'h-10 w-10', animated = false, title = 'KÓRADEON GROUP' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      {/* Stem */}
      <rect x="10" y="6" width="11" height="52" rx="1" fill="currentColor" />
      {/* Upper arm */}
      <path d="M27 36 L45 6 L57 6 L33 44 Z" fill="currentColor" />
      {/* Lower arm */}
      <path d="M27 28 L33 22 L56 58 L44 58 Z" fill="currentColor" />
      {/* Three foundational dots */}
      <circle cx="22" cy="60" r="2.2" fill="#C9A85C" className={animated ? 'animate-breathe' : undefined} />
      <circle
        cx="32"
        cy="60"
        r="2.2"
        fill="#C9A85C"
        className={animated ? 'animate-breathe' : undefined}
        style={animated ? { animationDelay: '0.4s' } : undefined}
      />
      <circle
        cx="42"
        cy="60"
        r="2.2"
        fill="#C9A85C"
        className={animated ? 'animate-breathe' : undefined}
        style={animated ? { animationDelay: '0.8s' } : undefined}
      />
    </svg>
  )
}

/** Full lockup: mark + wordmark, for footer and intro contexts. */
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
