'use client'

import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Cpu, LineChart, Sprout, Sun } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroSculpture } from '@/components/HeroSculpture'
import { IntroAnimation } from '@/components/IntroAnimation'
import MapSectionLazy from '@/components/MapSectionLazy'
import { BUSINESSES } from '@/constants/brand'
import { NEWS_ARTICLES } from '@/constants/news'
import { IMAGES } from '@/constants/assets'
import { useCountUp } from '@/hooks/useCountUp'

const EASE = [0.16, 1, 0.3, 1] as const

/* Hero content waits for the opening experience, then enters as one composition. */
const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [...EASE] },
  }),
}

const INNOVATION_PILLARS = [
  {
    icon: Sprout,
    title: 'Precision agriculture',
    text: 'AI-guided irrigation, nutrition and yield modelling across the Kavora land bank.',
  },
  {
    icon: Cpu,
    title: 'Smart infrastructure',
    text: 'Sensor-equipped corridors and utilities designed to be managed, not just built.',
  },
  {
    icon: Sun,
    title: 'Renewable systems',
    text: 'Solar-plus-storage as the default power architecture for every new asset.',
  },
  {
    icon: LineChart,
    title: 'Data & intelligence',
    text: 'Group-wide analytics that turn operating data into better capital decisions.',
  },
] as const

function Stat({
  value,
  suffix = '',
  label,
  staticValue,
}: {
  value?: number
  suffix?: string
  label: string
  staticValue?: string
}) {
  const count = useCountUp(value ?? 0)
  return (
    <div className="border-l border-stone-700/70 pl-5 sm:pl-7">
      <span
        ref={count.ref}
        className="block font-serif text-3xl text-ivory-50 sm:text-4xl lg:text-[2.75rem]"
      >
        {staticValue ?? `${count.value.toLocaleString('en-US')}${suffix}`}
      </span>
      <span className="mt-2 block max-w-[16rem] text-xs leading-relaxed tracking-wide text-stone-400">
        {label}
      </span>
    </div>
  )
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const loaded = isLoaded ? 'show' : 'hidden'
  const latest = NEWS_ARTICLES.slice(0, 3)

  return (
    <>
      {/* Opening experience — plays once per session, skippable */}
      <IntroAnimation onComplete={() => setIsLoaded(true)} />

      <main
        className={`min-h-screen transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* ─────────────────── HERO — the 3D sculpture is the scene ──────── */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ivory-50 dark:bg-stone-900">
          {/* 3D Sculpture — can pass in front of logo area for depth effect */}
          <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
            <HeroSculpture />
          </div>

          <div className="relative z-10 container-custom pb-28 pt-28">
            <div className="max-w-3xl relative">
              {/* Subtle backdrop for readability over 3D scene */}
              <div className="absolute -inset-8 -z-10 rounded-2xl bg-ivory-50/40 dark:bg-stone-900/40 backdrop-blur-sm" aria-hidden="true" />
              <motion.p
                variants={reveal}
                custom={0.05}
                initial="hidden"
                animate={loaded}
                className="label mb-7 flex items-center gap-4"
              >
                <span className="h-px w-12 bg-champagne-600" aria-hidden="true" />
                A diversified holding company · Est. 2024
              </motion.p>

              <motion.h1
                variants={reveal}
                custom={0.15}
                initial="hidden"
                animate={loaded}
                className="font-serif text-[2.6rem] leading-[1.05] tracking-tight text-stone-900 sm:text-6xl lg:text-[4.25rem]"
              >
                Building enduring
                <br />
                businesses.
              </motion.h1>

              <motion.p
                variants={reveal}
                custom={0.28}
                initial="hidden"
                animate={loaded}
                className="body-lg mt-7 max-w-xl text-stone-700"
              >
                KÓRADEON invests with patience across agriculture, hospitality, real estate and
                infrastructure — creating institutions designed to serve generations.
              </motion.p>

              <motion.div
                variants={reveal}
                custom={0.42}
                initial="hidden"
                animate={loaded}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Link href="/businesses" className="btn-primary">
                  The four pillars
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
                <Link href="/investors" className="btn-secondary">
                  Investor relations
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-10 w-6 items-start justify-center rounded-full border border-stone-400/80 p-1.5"
            >
              <span className="h-2 w-1 rounded-full bg-stone-500" />
            </motion.div>
          </motion.div>
        </section>

        {/* ───────────── WHO WE ARE — editorial image composition ──────────── */}
        <section className="section-padding bg-white">
          <div className="container-custom grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [...EASE] }}
              className="lg:col-span-5"
            >
              <span className="label mb-6 block">Who we are</span>
              <h2 className="heading-md text-stone-900">
                A group built on four foundations
              </h2>
              <div className="body-md mt-6 space-y-5 text-stone-700">
                <p>
                  The name is the structure: <strong>K</strong>avora Farms,{' '}
                  <strong>O</strong>zura Resorts, <strong>R</strong>umara Estates and{' '}
                  <strong>A</strong>rcovia Infrastructure. Four businesses, one standard —
                  patient capital, disciplined governance, work built to last.
                </p>
                <p>
                  Each pillar operates independently and contributes to a single ambition:
                  institutions that outlast the people who build them.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-2 font-medium text-stone-900 transition-colors duration-300 hover:text-champagne-700"
              >
                Inside the Group
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.1, ease: [...EASE] }}
              className="lg:col-span-7"
            >
              <div className="relative pb-12 pr-4 sm:pr-10">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-stone-200 shadow-medium">
                  <Image
                    src={IMAGES.peopleMeeting}
                    alt="KÓRADEON leadership in working session at group headquarters"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 aspect-[4/3] w-1/2 overflow-hidden rounded-lg border-4 border-white shadow-large sm:w-[45%]">
                  <Image
                    src={IMAGES.cityHarbour}
                    alt="Harbour skyline — the Group is headquartered in Lagos, Nigeria"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 50vw, 26vw"
                    className="object-cover"
                  />
                </div>
                <span className="absolute bottom-5 left-5 rounded-full bg-stone-900 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-ivory-50 shadow-large">
                  Lagos · Est. 2024
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────────── FOUR PILLARS — business cards ─────────────────────── */}
        <section className="section-padding bg-ivory-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
            >
              <div className="max-w-xl">
                <span className="label mb-4 block">Our ecosystem</span>
                <h2 className="heading-md text-stone-900">Four pillars, one standard</h2>
              </div>
              <p className="body-md max-w-sm text-stone-600">
                Independent operating companies, a single discipline of ownership.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {BUSINESSES.map((business, index) => (
                <motion.div
                  key={business.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                >
                  <Link
                    href={`/businesses#${business.id}`}
                    className="group relative block overflow-hidden rounded-lg border border-stone-200 bg-white shadow-soft transition-all duration-500 hover:shadow-large"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={IMAGES[business.id as keyof typeof IMAGES]}
                        alt={`${business.name} — ${business.tagline}`}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-stone-900/55 via-stone-900/10 to-transparent"
                        aria-hidden="true"
                      />
                      <span className="absolute left-5 top-5 rounded-full bg-ivory-50/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-800">
                        {business.tagline}
                      </span>
                      <h3 className="absolute bottom-5 left-5 font-serif text-2xl text-ivory-50 sm:text-3xl">
                        {business.name}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between gap-6 p-6">
                      <p className="body-sm max-w-md text-stone-600">{business.description}</p>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition-all duration-300 group-hover:border-stone-900 group-hover:bg-stone-900 group-hover:text-ivory-50">
                        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link href="/businesses" className="btn-primary">
                View All Businesses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ───────────── PHILOSOPHY — dark stats & pull-quote band ─────────── */}
        <section className="section-padding bg-stone-900 text-ivory-50">
          <div className="container-custom">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <span className="label mb-6 block text-champagne-300">Our philosophy</span>
                <h2 className="heading-md text-ivory-50">We think in decades, not quarters</h2>
                <blockquote className="mt-10 border-l-2 border-champagne-500 pl-6 sm:pl-8">
                  <p className="font-serif text-xl leading-relaxed text-stone-200 sm:text-2xl">
                    “We are not merely building companies. We are creating institutions that
                    will serve future generations.”
                  </p>
                  <cite className="mt-4 block text-xs uppercase not-italic tracking-[0.25em] text-stone-400">
                    Legacy statement · 2024
                  </cite>
                </blockquote>
                <Link
                  href="/legacy"
                  className="mt-10 inline-flex items-center gap-2 font-medium text-champagne-300 transition-colors duration-300 hover:text-champagne-200"
                >
                  Read the full legacy statement
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:col-span-5 lg:content-center"
              >
                <Stat
                  value={4}
                  label="Operating pillars across agriculture, hospitality, property and infrastructure"
                />
                <Stat
                  value={8}
                  label="Offices and teams across Africa, Europe, the Gulf and North America"
                />
                <Stat staticValue="2040" label="Group-wide net-zero operational commitment" />
                <Stat staticValue="2024" label="Founded — with patient, long-horizon capital" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────────── INNOVATION — capabilities + field imagery ─────────── */}
        <section className="section-padding bg-white">
          <div className="container-custom grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <span className="label mb-6 block">Innovation</span>
              <h2 className="heading-md text-stone-900">
                Technology in service of the physical economy
              </h2>
              <p className="body-md mt-6 text-stone-700">
                Our innovation agenda is not cosmetic. Sensor networks, analytics and
                renewable systems are embedded into the operations of every business —
                lowering costs, raising yields and compounding advantage.
              </p>
              <Link
                href="/innovation"
                className="mt-9 inline-flex items-center gap-2 font-medium text-stone-900 transition-colors duration-300 hover:text-champagne-700"
              >
                Explore innovation
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </Link>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {INNOVATION_PILLARS.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-lg border border-stone-200 bg-ivory-50 p-5 transition-colors duration-300 hover:border-stone-300"
                  >
                    <Icon className="h-5 w-5 text-champagne-700" aria-hidden="true" />
                    <h3 className="mt-3 text-sm font-semibold text-stone-900">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-stone-200 shadow-medium sm:aspect-[16/13]">
                <Image
                  src={IMAGES.drone}
                  alt="Drone surveying agricultural land — precision technology in the field"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/75 via-stone-900/30 to-transparent p-6 sm:p-8">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-stone-300">
                    In the field
                  </p>
                  <p className="mt-2 max-w-sm font-serif text-lg text-ivory-50 sm:text-xl">
                    Aerial intelligence guides planting, irrigation and harvest across the
                    Kavora land bank.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────────── NEWSROOM PREVIEW — editorial cards ────────────────── */}
        <section className="section-padding bg-ivory-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 flex items-end justify-between gap-6"
            >
              <div>
                <span className="label mb-4 block">News & insights</span>
                <h2 className="heading-md text-stone-900">From the newsroom</h2>
              </div>
              <Link
                href="/newsroom"
                className="hidden items-center gap-2 font-medium text-stone-900 transition-colors duration-300 hover:text-champagne-700 sm:inline-flex"
              >
                View all stories
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
              {latest.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/newsroom/${article.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-stone-200">
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-5">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="font-semibold uppercase tracking-[0.18em] text-champagne-700">
                          {article.category}
                        </span>
                        <span className="h-px w-6 bg-stone-300" aria-hidden="true" />
                        <time
                          dateTime={article.date}
                          className="text-stone-500"
                        >
                          {new Date(article.date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </time>
                      </div>
                      <h3 className="mt-3 font-serif text-xl leading-snug text-stone-900 transition-colors duration-300 group-hover:text-champagne-700">
                        {article.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-600">
                        {article.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-stone-900">
                        Read story
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 text-center sm:hidden">
              <Link href="/newsroom" className="btn-primary">
                View all stories
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ───────────── GLOBAL PRESENCE — interactive map ─────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
            >
              <div className="max-w-xl">
                <span className="label mb-4 block">Global presence</span>
                <h2 className="heading-md text-stone-900">African roots, global reach</h2>
              </div>
              <p className="body-md max-w-sm text-stone-600">
                Select a location to explore the Group&apos;s operating footprint and
                representative offices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <MapSectionLazy dark={false} />
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="section-padding bg-stone-900 text-ivory-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="heading-lg mb-6">
                  Let's build the future together
                </h2>
                <p className="body-lg text-stone-300 mb-12 max-w-2xl mx-auto">
                  Whether you're a potential partner, investor, or team member, we'd love to hear from you. Join us in building enduring businesses that make a difference.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="btn-primary bg-ivory-50 text-stone-900 hover:bg-champagne-300">
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link href="/careers" className="btn-secondary border-ivory-50 text-ivory-50 hover:bg-ivory-50 hover:text-stone-900">
                    Join Our Team
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
