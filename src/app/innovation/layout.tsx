import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Innovation | KÓRADEON GROUP',
  description: 'Discover KÓRADEON GROUP\'s commitment to innovation and technology-driven growth across all businesses.',
}

export default function InnovationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
