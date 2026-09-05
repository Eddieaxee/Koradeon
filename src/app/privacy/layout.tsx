import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | KÓRADEON GROUP',
  description: 'KÓRADEON GROUP privacy policy and data protection commitment.',
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
