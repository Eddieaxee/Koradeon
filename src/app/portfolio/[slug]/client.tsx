'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { type Project, getProjectsByBusiness } from '@/constants/projects'

interface ProjectPageClientProps {
  project: Project
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const relatedProjects = getProjectsByBusiness(project.businessId)
    .filter(p => p.id !== project.id)
    .slice(0, 2)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image src={project.image} alt={project.imageAlt} fill unoptimized priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-stone-900/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-12">
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-stone-300 hover:text-ivory-50 mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Portfolio
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-champagne-500/90 text-stone-900 text-[11px] font-medium tracking-[0.15em] uppercase rounded-full">{project.status}</span>
                <span className="text-stone-300 text-sm">{project.category}</span>
              </div>
              <h1 className="heading-lg text-ivory-50 mb-4 max-w-3xl">{project.title}</h1>
              <p className="text-stone-300 text-lg max-w-2xl">{project.overview}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <span className="label mb-4 block">Project Overview</span>
                <h2 className="heading-md text-stone-900 mb-6">About this project</h2>
                <p className="body-lg text-stone-700 mb-8">{project.description}</p>
                <h3 className="text-xl font-serif text-stone-900 mb-4">Key Highlights</h3>
                <ul className="space-y-3 mb-8">
                  {project.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-champagne-600 shrink-0 mt-0.5" />
                      <span className="text-stone-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="lg:col-span-1">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-ivory-50 border border-stone-200 rounded-2xl p-6 sticky top-24">
                <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-stone-900 mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Business</p>
                    <Link href={`/businesses/${project.businessId}`} className="text-stone-900 font-medium hover:text-champagne-600 transition-colors">{project.businessName}</Link>
                  </div>
                  {project.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-stone-400" />
                      <span className="text-stone-700">{project.location}</span>
                    </div>
                  )}
                  {project.completion && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-stone-400" />
                      <span className="text-stone-700">Expected {project.completion}</span>
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Status</p>
                    <span className="text-stone-900 font-medium">{project.status}</span>
                  </div>
                </div>
                {project.stats && project.stats.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-stone-200">
                    <h4 className="text-xs text-stone-500 uppercase tracking-wider mb-4">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {project.stats.map((stat: { value: string; label: string }, index: number) => (
                        <div key={index}>
                          <p className="text-xl font-serif text-champagne-600">{stat.value}</p>
                          <p className="text-xs text-stone-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding bg-ivory-50">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
              <span className="label mb-4 block">Related Projects</span>
              <h2 className="heading-md text-stone-900">More from {project.businessName}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.article key={relatedProject.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }} className="bg-white border border-stone-200 rounded-2xl overflow-hidden group">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image src={relatedProject.image} alt={relatedProject.imageAlt} fill unoptimized sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium tracking-wider uppercase text-champagne-600">{relatedProject.category}</span>
                    <h3 className="text-lg font-serif text-stone-900 mt-2 mb-3 group-hover:text-champagne-600 transition-colors">{relatedProject.title}</h3>
                    <p className="text-stone-600 text-sm mb-4 line-clamp-2">{relatedProject.shortDescription}</p>
                    <Link href={`/portfolio/${relatedProject.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-900 hover:text-champagne-600 transition-colors">
                      View project <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-stone-900 text-ivory-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="heading-lg mb-6">Interested in this project?</h2>
              <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">Get in touch to learn more about this project or explore partnership opportunities.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">Get in Touch <ArrowRight className="ml-2 w-5 h-5" /></Link>
                <Link href="/portfolio" className="btn-secondary border-ivory-50 text-ivory-50 hover:bg-ivory-50 hover:text-stone-900">View All Projects</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
