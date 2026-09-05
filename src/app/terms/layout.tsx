import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | KÓRADEON GROUP',
  description: 'KÓRADEON GROUP terms of service and conditions of use.',
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
