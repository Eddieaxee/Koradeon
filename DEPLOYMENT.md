# KÓRADEON GROUP - Deployment Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- GitHub account
- Vercel/Netlify account (for deployment)

## Step 1: Install Dependencies

```bash
npm install --legacy-peer-deps
```

## Step 2: Environment Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Update `.env.local` with your actual values:
```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://koradeon.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_CLARITY_ID=your-microsoft-clarity-id

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@koradeon.com
NEXT_PUBLIC_CAREERS_EMAIL=careers@koradeon.com
NEXT_PUBLIC_INVESTORS_EMAIL=investors@koradeon.com
NEXT_PUBLIC_MEDIA_EMAIL=media@koradeon.com
NEXT_PUBLIC_BRAND_EMAIL=brand@koradeon.com
NEXT_PUBLIC_PRIVACY_EMAIL=privacy@koradeon.com
NEXT_PUBLIC_LEGAL_EMAIL=legal@koradeon.com

# Phone Numbers
NEXT_PUBLIC_PHONE_NUMBER=+234 800 000 0000

# Social Media
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/koradeon
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/koradeon
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/koradeon
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/koradeon
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/koradeon
NEXT_PUBLIC_TIKTOK_URL=https://tiktok.com/@koradeon

# CMS Integration (Future)
NEXT_PUBLIC_CMS_API_URL=
NEXT_PUBLIC_CMS_API_KEY=

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_SEARCH=true
NEXT_PUBLIC_ENABLE_NEWSLETTER=true
```

## Step 3: Add Brand Assets

Place the following files in `public/images/`:

- `logo.png` - KÓRADEON GROUP logo (transparent background)
- `favicon.ico` - Site favicon
- `icon-16x16.png` - PWA icon
- `icon-32x32.png` - PWA icon
- `icon-72x72.png` - PWA icon
- `icon-96x96.png` - PWA icon
- `icon-128x128.png` - PWA icon
- `icon-144x144.png` - PWA icon
- `icon-152x152.png` - PWA icon
- `icon-180x180.png` - Apple touch icon
- `icon-192x192.png` - PWA icon
- `icon-384x384.png` - PWA icon
- `icon-512x512.png` - PWA icon
- `og-image.jpg` - Social media preview image (1200x630px)

## Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 5: Test Build

```bash
npm run build
```

Ensure the build completes without errors.

## Step 6: Run Linter

```bash
npm run lint
```

Fix any linting errors:

```bash
npm run lint -- --fix
```

## Step 7: Format Code

```bash
npm run format
```

## Step 8: Type Check

```bash
npm run type-check
```

## Step 9: Deploy to Vercel

### Option A: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Option B: Deploy via GitHub

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: KÓRADEON GROUP website"
git remote add origin https://github.com/Eddieaxee/Kora.git
git push -u origin main
```

2. Go to [Vercel](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Configure environment variables in Vercel dashboard

6. Click "Deploy"

## Step 10: Configure Custom Domain

1. In Vercel dashboard, go to your project

2. Click "Settings" → "Domains"

3. Add your custom domain (e.g., koradeon.com)

4. Update your domain's DNS settings as instructed by Vercel

5. Wait for SSL certificate to be issued (automatic)

## Step 11: Enable Analytics (Optional)

1. Set up Google Analytics:
   - Create a GA4 property
   - Add the measurement ID to `.env.local`:
     ```
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
     ```

2. Set up Microsoft Clarity:
   - Create a Clarity project
   - Add the project ID to `.env.local`:
     ```
     NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX
     ```

3. Set the feature flag:
     ```
     NEXT_PUBLIC_ENABLE_ANALYTICS=true
     ```

## Step 12: Set Up PWA Icons

Generate PWA icons using a tool like [RealFaviconGenerator](https://realfavicongenerator.net/) or [Favicon.io](https://favicon.io/).

Place all generated icons in `public/images/`.

## Production Checklist

- [ ] All environment variables configured
- [ ] Brand assets added (logo, icons, images)
- [ ] Build completes without errors
- [ ] Linter passes
- [ ] TypeScript compiles without errors
- [ ] All pages load correctly
- [ ] Mobile responsive design tested
- [ ] SEO meta tags configured
- [ ] Analytics configured (if needed)
- [ ] PWA manifest configured
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Contact forms tested
- [ ] Social links tested
- [ ] Performance tested (Lighthouse)

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear Next.js cache:
```bash
rm -rf .next
```

2. Reinstall dependencies:
```bash
rm -rf node_modules
npm install --legacy-peer-deps
```

3. Try building again:
```bash
npm run build
```

### TypeScript Errors

If you encounter TypeScript errors:

1. Run type check:
```bash
npm run type-check
```

2. Fix any type errors in the code

### Linting Errors

If you encounter linting errors:

1. Run linter with auto-fix:
```bash
npm run lint -- --fix
```

2. Manually fix any remaining errors

## Performance Optimization

1. Enable image optimization in `next.config.js` (already configured)

2. Use dynamic imports for heavy components:
```typescript
const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'))
```

3. Implement lazy loading for images (already using Next.js Image)

4. Enable compression in Vercel dashboard

## Security

1. Enable security headers in `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        }
      ]
    }
  ]
}
```

2. Implement rate limiting for API routes

3. Add CSRF protection to forms

4. Sanitize all user inputs

## Monitoring

1. Set up error monitoring (Sentry, LogRocket, etc.)

2. Configure performance monitoring

3. Set up uptime monitoring (UptimeRobot, Pingdom, etc.)

4. Monitor Core Web Vitals

## Backup

1. Set up automated database backups (when database is added)

2. Regular code backups to GitHub

3. Export important data regularly

## Support

For deployment issues:
- Email: info@koradeon.com
- Documentation: See README.md

---

**Last Updated**: 2024
**Version**: 1.0.0