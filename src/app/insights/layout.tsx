import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights | KÓRADEON GROUP',
  description: 'Explore thought leadership, industry opinions, and research from KÓRADEON GROUP leaders and experts.',
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
