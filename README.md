# KÓRADEON GROUP Website

The digital headquarters for KÓRADEON GROUP - a diversified holding company focused on long-term value creation across strategic industries.

## 🏢 About

KÓRADEON GROUP is built on four foundational businesses:
- **Kavora Farms** - Agriculture & Food Production
- **Ozura Resorts** - Hospitality & Luxury Experiences
- **Rumara Estates** - Real Estate & Urban Development
- **Arcovia Infrastructure** - Construction & Engineering

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber, React Drei
- **Smooth Scroll**: Lenis
- **UI Components**: Radix UI, Shadcn/UI
- **Icons**: Lucide React
- **Forms**: React Hook Form, Zod
- **Theme**: Next Themes

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

```bash
npm run build
```

## 🔍 Linting

```bash
npm run lint
```

## 💻 Code Formatting

```bash
npm run format
```

## 🔍 Type Checking

```bash
npm run type-check
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── businesses/        # Businesses showcase
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── innovation/        # Innovation page
│   ├── insights/          # Insights page
│   ├── investors/         # Investors page
│   ├── legacy/            # Legacy page
│   ├── newsroom/          # Newsroom page
│   ├── portfolio/         # Portfolio page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── ...
├── components/            # Reusable components
│   ├── three/             # Three.js components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── CommandPalette.tsx
│   └── ...
├── features/              # Feature-specific components
├── hooks/                 # Custom React hooks
├── contexts/              # React contexts
├── lib/                   # Utility functions
├── utils/                 # Helper functions
├── styles/                # Additional styles
├── types/                 # TypeScript types
├── constants/             # Constants and config
└── config/                # Configuration files

public/                    # Static assets
├── images/
├── assets/
└── ...
```

## 🎨 Design System

### Colors
- **Primary Palette**: Warm ivory, stone, limestone, travertine, sand, clay, warm grey, slate, charcoal, bronze, champagne gold
- **Subsidiary Colors**: Kavora (olive, forest green), Ozura (ocean blue, turquoise), Rumara (stone, champagne), Arcovia (steel, graphite)

### Typography
- **Primary Font**: Inter (sans-serif)
- **Secondary Font**: Playfair Display (serif)
- **Mono Font**: JetBrains Mono

### Spacing
- Consistent spacing scale based on 8px grid
- Generous whitespace throughout

## 🎯 Key Features

- **Cinematic Homepage**: Three.js hero with animated logo
- **Smooth Scrolling**: Lenis smooth scroll experience
- **Command Palette**: Global search (Ctrl+K / Cmd+K)
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags, sitemap, robots.txt
- **Accessible**: WCAG 2.2 AA compliant
- **Dark Mode Ready**: Theme system in place
- **Performance Optimized**: Image optimization, code splitting, lazy loading

## 📱 Pages

- Home
- About
- Legacy
- Businesses (Kavora, Ozura, Rumara, Arcovia)
- Innovation
- Portfolio
- Newsroom
- Insights
- Investors
- Careers
- Contact
- Privacy Policy
- Terms of Service
- 404 Page
- Error Boundary

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://koradeon.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_CLARITY_ID=your-microsoft-clarity-id

# Contact (optional)
NEXT_PUBLIC_CONTACT_EMAIL=info@koradeon.com
NEXT_PUBLIC_CAREERS_EMAIL=careers@koradeon.com
NEXT_PUBLIC_INVESTORS_EMAIL=investors@koradeon.com
NEXT_PUBLIC_MEDIA_EMAIL=media@koradeon.com
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Docker

```bash
docker build -t koradeon-website .
docker run -p 3000:3000 koradeon-website
```

## 🤝 Contributing

This is an internal project for KÓRADEON GROUP. All contributions should follow the established coding standards and design principles.

## 📄 License

© 2024 KÓRADEON GROUP. All rights reserved.

## 📞 Contact

- **Website**: [https://koradeon.com](https://koradeon.com)
- **Email**: info@koradeon.com
- **Phone**: +234 800 000 0000
- **Location**: Lagos, Nigeria

---

Built with precision, designed for legacy.