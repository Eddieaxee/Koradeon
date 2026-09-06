'use client'

import { COMPANY_INFO } from '@/constants/brand'
import { LinkedinIcon, TiktokIcon, InstagramIcon, XIcon, YoutubeIcon, FacebookIcon } from '@/components/SocialIcons'

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
  hoverColor: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: COMPANY_INFO.social.linkedin,
    icon: <LinkedinIcon className="w-5 h-5" />,
    hoverColor: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    url: COMPANY_INFO.social.instagram,
    icon: <InstagramIcon className="w-5 h-5" />,
    hoverColor: 'hover:text-pink-600'
  },
  {
    name: 'X (Twitter)',
    url: COMPANY_INFO.social.twitter,
    icon: <XIcon className="w-5 h-5" />,
    hoverColor: 'hover:text-slate-900'
  },
  {
    name: 'YouTube',
    url: COMPANY_INFO.social.youtube,
    icon: <YoutubeIcon className="w-5 h-5" />,
    hoverColor: 'hover:text-red-600'
  },
  {
    name: 'Facebook',
    url: COMPANY_INFO.social.facebook,
    icon: <FacebookIcon className="w-5 h-5" />,
    hoverColor: 'hover:text-blue-700'
  },
  {
    name: 'TikTok',
    url: COMPANY_INFO.social.tiktok,
    icon: <TiktokIcon className="w-5 h-5" />,
    hoverColor: 'hover:text-[#F72582]'
  }
]

interface SocialLinksProps {
  variant?: 'icons' | 'list'
  className?: string
}

export function SocialLinks({ variant = 'icons', className = '' }: SocialLinksProps) {
  if (variant === 'list') {
    return (
      <div className={`flex flex-col space-y-3 ${className}`}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-3 text-stone-600 ${social.hoverColor} transition-all duration-300 group`}
            aria-label={social.name}
          >
            {social.icon}
            <span className="text-sm">{social.name}</span>
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-stone-600 ${social.hoverColor} transition-all duration-300 group`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export { socialLinks }
