import { Business } from '@/types'

export interface BusinessCardProps {
  business: Business;
  index: number;
}

export interface BusinessGridProps {
  businesses: Business[];
}