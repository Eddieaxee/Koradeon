import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About KÓRADEON GROUP',
  description: 'Learn about KÓRADEON GROUP\'s vision, mission, and values. A diversified holding company building enduring businesses across Africa and beyond.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
