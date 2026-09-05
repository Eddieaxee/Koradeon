'use client'

import { motion } from 'framer-motion'



export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="label mb-6 block">Legal</span>
            <h1 className="heading-lg text-stone-900 mb-8">
              Privacy Policy
            </h1>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                Last updated: 2024
              </p>
              <p>
                KÓRADEON GROUP ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-ivory-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="heading-sm text-stone-900 mb-4">Information We Collect</h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  We may collect information about you in a variety of ways. The information we may collect on the site includes personal data such as your name, email address, phone number, and any other information you voluntarily provide to us.
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-sm text-stone-900 mb-4">How We Use Your Information</h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-sm text-stone-900 mb-4">Data Security</h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, disclosure, alteration, and destruction.
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-sm text-stone-900 mb-4">Contact Us</h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  If you have questions about this Privacy Policy, please contact us at privacy@koradeon.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
