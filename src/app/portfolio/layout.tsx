import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | KÓRADEON GROUP',
  description: 'Explore KÓRADEON GROUP\'s current projects, future concepts, and portfolio across agriculture, hospitality, real estate, and infrastructure.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
