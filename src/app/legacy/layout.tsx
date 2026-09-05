import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Legacy | KÓRADEON GROUP',
  description: 'Discover KÓRADEON GROUP\'s commitment to building enduring institutions and creating lasting impact across generations.',
}

export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
