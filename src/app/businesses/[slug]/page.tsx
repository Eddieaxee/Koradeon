import { notFound } from 'next/navigation'
import { BUSINESSES } from '@/constants/brand'
import BusinessPageClient from './client'

interface BusinessPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return BUSINESSES.map((business) => ({
    slug: business.id,
  }))
}

export default function BusinessPage({ params }: BusinessPageProps) {
  const business = BUSINESSES.find(b => b.id === params.slug)

  if (!business) {
    notFound()
  }

  return <BusinessPageClient business={business} />
}
