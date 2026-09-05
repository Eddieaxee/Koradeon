import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investors | KÓRADEON GROUP',
  description: 'Investor information, corporate governance, and financial resources for KÓRADEON GROUP stakeholders.',
}

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
