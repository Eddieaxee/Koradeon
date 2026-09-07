'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle2, FileText } from 'lucide-react'

interface DocumentRequestModalProps {
  isOpen: boolean
  onClose: () => void
  documentTitle: string
}

export function DocumentRequestModal({ isOpen, onClose, documentTitle }: DocumentRequestModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ name: '', email: '', company: '', role: '' })
      onClose()
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm" onClick={onClose}>
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }} className="relative w-full max-w-lg bg-white rounded-2xl shadow-large overflow-hidden"
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-champagne-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-champagne-600" />
                </div>
                <div>
                  <h2 className="text-lg font-serif text-stone-900">Request Document</h2>
                  <p className="text-sm text-stone-500">{documentTitle}</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-stone-100 transition-colors" aria-label="Close">
                <X className="w-5 h-5 text-stone-500" />
              </button>
            </div>
            <div className="p-6">
              {isSuccess ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-serif text-stone-900 mb-2">Request Submitted</h3>
                  <p className="text-stone-600">Our investor relations team will send the document to your email shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-stone-600 mb-4">Please provide your details for the <strong>{documentTitle}</strong>.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dr-name" className="block text-sm font-medium text-stone-700 mb-1">Full Name *</label>
                      <input type="text" id="dr-name" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-champagne-500 text-stone-900" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="dr-email" className="block text-sm font-medium text-stone-700 mb-1">Email *</label>
                      <input type="email" id="dr-email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-champagne-500 text-stone-900" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dr-company" className="block text-sm font-medium text-stone-700 mb-1">Company</label>
                      <input type="text" id="dr-company" name="company" value={formData.company} onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-champagne-500 text-stone-900" placeholder="Company name" />
                    </div>
                    <div>
                      <label htmlFor="dr-role" className="block text-sm font-medium text-stone-700 mb-1">Role</label>
                      <select id="dr-role" name="role" value={formData.role} onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-champagne-500 text-stone-900">
                        <option value="">Select...</option>
                        <option value="investor">Potential Investor</option>
                        <option value="analyst">Equity Analyst</option>
                        <option value="media">Media / Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button type="button" onClick={onClose}
                      className="flex-1 px-4 py-3 border border-stone-200 text-stone-700 font-medium rounded-lg hover:bg-stone-50 transition-colors">Cancel</button>
                    <button type="submit" disabled={isSubmitting || !formData.name || !formData.email}
                      className="flex-1 px-4 py-3 bg-champagne-500 text-stone-900 font-medium rounded-lg hover:bg-champagne-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                      {isSubmitting ? <div className="w-5 h-5 border-2 border-stone-900 border-t-transparent rounded-full animate-spin" /> : <><Send className="w-4 h-4" /> Submit</>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DocumentRequestModal