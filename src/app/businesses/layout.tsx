import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Businesses | KÓRADEON GROUP',
  description: 'Explore KÓRADEON GROUP\'s four foundational businesses: Kavora Farms, Ozura Resorts, Rumara Estates, and Arcovia Infrastructure.',
}

export default function BusinessesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
