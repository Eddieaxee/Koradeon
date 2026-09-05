// Company and Business Types
export interface Business {
  id: string
  name: string
  tagline: string
  description: string
  color: BusinessColor
  icon: string
  sectors: string[]
  mission: string
  vision: string
  status: 'active' | 'launching-soon' | 'coming-soon'
  websiteUrl?: string
  leadership?: Leader[]
  projects?: Project[]
  news?: NewsArticle[]
}

export interface Leader {
  id: string
  name: string
  role: string
  bio: string
  image?: string
}

export interface Project {
  id: number
  title: string
  category: string
  business: string
  status: 'planning' | 'in-development' | 'completed'
  description: string
  image?: string
}

export interface NewsArticle {
  id: number
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  author: string
  featured: boolean
  content?: string
}

// Navigation Types
export interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
}

// Contact Types
export interface ContactMethod {
  icon: React.ReactNode
  title: string
  detail: string
  description: string
}

export interface EnquiryType {
  value: string
  label: string
}

// Career Types
export interface JobPosition {
  title: string
  department: string
  location: string
  type: string
  description?: string
  requirements?: string[]
}

export interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

// Investor Types
export interface InvestorResource {
  icon: React.ReactNode
  title: string
  description: string
  status: 'available' | 'coming-soon'
}

// Brand Centre Types
export interface BrandResource {
  icon: React.ReactNode
  title: string
  description: string
  items: string[]
}

// Innovation Types
export interface InnovationArea {
  icon: React.ReactNode
  title: string
  description: string
}

export interface Technology {
  name: string
}

// Social Media Types
export interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
  hoverColor: string
}

// Form Types
export interface ContactFormData {
  name: string
  email: string
  company: string
  enquiryType: string
  message: string
}

export interface NewsletterFormData {
  email: string
}

// Animation Types
export interface AnimationConfig {
  duration: number
  delay: number
  ease: number[]
}

// SEO Types
export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonical?: string
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

// Three.js Types
export interface SceneConfig {
  camera: {
    position: [number, number, number]
    fov: number
  }
  lights: {
    ambient: boolean
    directional: boolean
    point: boolean
  }
  controls: {
    autoRotate: boolean
    autoRotateSpeed: number
    enableZoom: boolean
    enablePan: boolean
  }
}

// Search Types
export interface SearchItem {
  title: string
  href: string
  category: string
  icon: React.ReactNode
}

// Utility Types
export type BusinessColor = 'kavora' | 'ozura' | 'rumara' | 'arcovia'

export type ThemeMode = 'light' | 'dark' | 'system'

export type AnimationVariant = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight' | 'scaleIn'

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type Status = 'active' | 'inactive' | 'pending' | 'error'