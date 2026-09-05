import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | KÓRADEON GROUP',
  description: 'Join KÓRADEON GROUP and build a rewarding career with one of Africa\'s most dynamic holding companies.',
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
