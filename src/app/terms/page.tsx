'use client'

import { motion } from 'framer-motion'



export default function TermsPage() {
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
              Terms of Service
            </h1>
            <div className="space-y-6 body-lg text-stone-700">
              <p>
                Last updated: 2024
              </p>
              <p>
                These Terms of Service govern your use of the KÓRADEON GROUP website. By accessing or using this website, you agree to be bound by these terms.
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
              <h2 className="heading-sm text-stone-900 mb-4">Acceptance of Terms</h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-sm text-stone-900 mb-4">Use of Website</h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-sm text-stone-900 mb-4">Intellectual Property</h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of KÓRADEON GROUP and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-sm text-stone-900 mb-4">Limitation of Liability</h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  KÓRADEON GROUP shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use this website.
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-sm text-stone-900 mb-4">Contact Us</h2>
              <div className="space-y-4 body-md text-stone-700">
                <p>
                  If you have questions about these Terms of Service, please contact us at legal@koradeon.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
