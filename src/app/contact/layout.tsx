import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | KÓRADEON GROUP',
  description: 'Get in touch with KÓRADEON GROUP. Contact us for general enquiries, investment opportunities, media enquiries, or career information.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
