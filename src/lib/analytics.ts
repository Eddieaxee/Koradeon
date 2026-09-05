/**
 * Privacy-friendly analytics facade.
 * Activates only when NEXT_PUBLIC_ENABLE_ANALYTICS is "true" and an ID exists.
 * Swap the internals for GA4 / Plausible / Clarity without touching call sites.
 */

const ENABLED =
  process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true' &&
  Boolean(process.env.NEXT_PUBLIC_GA_ID)

type EventPayload = Record<string, string | number | boolean | undefined>

export function trackEvent(name: string, payload: EventPayload = {}) {
  if (!ENABLED || typeof window === 'undefined') return

  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag === 'function') {
    w.gtag('event', name, payload)
  }
}

export const analytics = {
  ctaClick: (label: string, location: string) =>
    trackEvent('cta_click', { label, location }),

  businessExplore: (business: string) =>
    trackEvent('business_explore', { business }),

  articleRead: (slug: string) => trackEvent('article_read', { slug }),

  formSubmit: (form: string) => trackEvent('form_submit', { form }),

  newsletterSignup: () => trackEvent('newsletter_signup', {}),

  searchOpen: () => trackEvent('search_open', {}),

  socialClick: (network: string) => trackEvent('social_click', { network }),
}
