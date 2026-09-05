import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Centre | KÓRADEON GROUP',
  description: 'Access KÓRADEON GROUP brand assets, logos, guidelines, and corporate identity resources.',
}

export default function BrandCentreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
