import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsroom | KÓRADEON GROUP',
  description: 'Stay updated with the latest news, announcements, and insights from KÓRADEON GROUP and our four businesses.',
}

export default function NewsroomLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
