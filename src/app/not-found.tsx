import { Metadata } from 'next'
import { ArrowRight, Home } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '@/components/Logo'

export const metadata: Metadata = {
  title: '404 - Page Not Found | KÓRADEON GROUP',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-ivory-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <div className="mb-10 flex flex-col items-center gap-6">
            <Logo className="h-14 w-14" />
            <span className="text-xs uppercase tracking-[0.4em] text-stone-400">Error 404</span>
          </div>

          <h1 className="heading-md text-stone-900 mb-6">
            Page Not Found
          </h1>

          <p className="body-lg text-stone-700 mb-12">
            The page you are looking for doesn&apos;t exist or has been moved. Let us help you find your way back.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary">
              <Home className="mr-2 w-5 h-5" />
              Return to Homepage
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
