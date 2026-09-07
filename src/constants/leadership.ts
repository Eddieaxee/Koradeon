/**
 * KÓRADEON — Group leadership.
 * Shared by the About page and the Investors governance section.
 * Portraits are licensed stock photography (Pexels), art-directed via assets.ts.
 */
import { IMAGES } from '@/constants/assets'

export interface Leader {
  name: string
  role: string
  image: string
  bio: string
}

export const LEADERSHIP: Leader[] = [
  {
    name: 'Kwame Mensah',
    role: 'Chief Executive Officer',
    image: IMAGES.execCeo,
    bio: 'Kwame oversees the Group\u2019s vision, capital strategy and long-term stewardship across all four businesses, with decades of operating and investment experience across Africa and Europe.',
  },
  {
    name: 'Amara Diallo',
    role: 'Chief Financial Officer',
    image: IMAGES.execCfo,
    bio: 'Amara leads the Group\u2019s financial strategy, capital allocation and investor relations, ensuring discipline, transparency and sustainable value creation across the portfolio.',
  },
  {
    name: 'Thabo Ndlovu',
    role: 'Chief Investment Officer',
    image: IMAGES.execCio,
    bio: 'Thabo heads the Group\u2019s investment committee, sourcing and structuring opportunities across agriculture, hospitality, real estate and infrastructure for the long term.',
  },
]