'use client'

import { useEffect, useState, useCallback } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Building2, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export interface MapLocation {
  id: string
  city: string
  country: string
  role: string
  focus: string
  lat: number
  lng: number
  isHQ?: boolean
}

const LOCATIONS: MapLocation[] = [
  {
    id: 'lagos',
    city: 'Lagos',
    country: 'Nigeria',
    role: 'Group Headquarters',
    focus: 'Kavora · Ozura · Rumara · Arcovia',
    lat: 6.5244,
    lng: 3.3792,
    isHQ: true,
  },
  {
    id: 'accra',
    city: 'Accra',
    country: 'Ghana',
    role: 'West Africa Regional Office',
    focus: 'Rumara Estates · Arcovia Infrastructure',
    lat: 5.6037,
    lng: -0.187,
  },
  {
    id: 'nairobi',
    city: 'Nairobi',
    country: 'Kenya',
    role: 'East Africa Regional Office',
    focus: 'Kavora Farms',
    lat: -1.2921,
    lng: 36.8219,
  },
  {
    id: 'johannesburg',
    city: 'Johannesburg',
    country: 'South Africa',
    role: 'Southern Africa Office',
    focus: 'Arcovia Infrastructure',
    lat: -26.2041,
    lng: 28.0473,
  },
  {
    id: 'kigali',
    city: 'Kigali',
    country: 'Rwanda',
    role: 'Innovation Hub',
    focus: 'Group Innovation',
    lat: -1.9441,
    lng: 30.0619,
  },
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    role: 'Investor Relations',
    focus: 'Group Capital Markets',
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    role: 'Gulf Partnerships Office',
    focus: 'Ozura Resorts · Group Ventures',
    lat: 25.2048,
    lng: 55.2708,
  },
  {
    id: 'new-york',
    city: 'New York',
    country: 'United States',
    role: 'Representative Office',
    focus: 'Investor & Institution Relations',
    lat: 40.7128,
    lng: -74.006,
  },
]

export function markerIcon(hot: boolean) {
  const html = `<span class="kd-marker${hot ? ' is-hot' : ''}"></span>`
  return L.divIcon({ html, className: 'kd-marker-shell', iconSize: [16, 16], iconAnchor: [8, 8] })
}

function FlyTo({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.4 })
  }, [center, zoom, map])
  return null
}

export interface MapSectionProps {
  className?: string
  heightClass?: string
  dark?: boolean
}

export function MapSection({
  className = '',
  heightClass = 'h-[420px] sm:h-[520px] lg:h-[620px]',
  dark = true,
}: MapSectionProps) {
  const [active, setActive] = useState<MapLocation | null>(LOCATIONS[0])
  const [fly, setFly] = useState<{ center: [number, number]; zoom: number } | null>(null)
  const [mounted, setMounted] = useState(false)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useEffect(() => setMounted(true), [])

  const select = useCallback((loc: MapLocation) => {
    setActive(loc)
    setFly({ center: [loc.lat, loc.lng], zoom: 6 })
  }, [])

  if (!mounted) return null

  return (
    <div className={`map-shell rounded-2xl border ${dark ? 'border-stone-800 bg-stone-900' : 'border-stone-200 bg-stone-100'} ${className}`}>
      <div className="grid lg:grid-cols-3">
{/* Location list */}
        <div className={`relative z-10 lg:col-span-1 p-6 sm:p-8 ${dark ? 'lg:bg-stone-900' : 'lg:bg-white'} border-b lg:border-b-0 lg:border-r ${dark ? 'border-stone-800' : 'border-stone-200'}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-xs font-semibold tracking-[0.2em] uppercase ${dark ? 'text-stone-400' : 'text-stone-600'}`}>
              Global Presence
            </h3>
            <span className="inline-flex items-center gap-1.5 text-[10px] tracking-wider text-champagne-500">
              {LOCATIONS.length} locations
            </span>
          </div>
          <ul className="space-y-1">
            {LOCATIONS.map(loc => (
              <li key={loc.id}>
                <button
                  onClick={() => select(loc)}
                  onMouseEnter={() => setHoveredId(loc.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  aria-pressed={active?.id === loc.id}
                  className={`w-full text-left flex items-center gap-3 rounded-lg px-3 py-3 transition-all duration-300 group ${
                    active?.id === loc.id
                      ? dark
                        ? 'bg-ivory-50/10 text-ivory-50'
                        : 'bg-stone-900 text-ivory-50'
                      : dark
                        ? 'hover:bg-white/5 text-stone-400'
                        : 'hover:bg-stone-100 text-stone-600'
                  }`}
                >
                  <span
                    className={`grid place-items-center w-8 h-8 rounded-full shrink-0 transition-all duration-300 ${
                      active?.id === loc.id
                        ? 'bg-champagne-300 text-stone-900'
                        : hoveredId === loc.id
                          ? dark ? 'bg-champagne-500/30 text-champagne-300' : 'bg-champagne-200 text-champagne-700'
                          : dark ? 'bg-white/10 text-stone-400' : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-medium truncate">{loc.city}, {loc.country}</span>
                    <span className={`block text-xs truncate ${dark ? 'text-stone-500' : 'text-stone-500'}`}>
                      {loc.role}
                    </span>
                  </span>
                  {loc.isHQ && (
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase ${dark ? 'bg-champagne-500/15 text-champagne-300' : 'bg-champagne-100 text-champagne-700'}`}>
                      HQ
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
{/* Map + active card */}
        <div className={`relative lg:col-span-2 ${heightClass} ${dark ? 'map-dark' : ''}`}>
          <MapContainer
            center={[6.5, 18]}
            zoom={3}
            minZoom={2}
            maxZoom={12}
            zoomControl={true}
            scrollWheelZoom={false}
            maxBounds={[[-85, -200], [85, 200]]}
            className="w-full h-full z-0 relative"
            attributionControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url={
                dark
                  ? 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
                  : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
              }
              subdomains="abcd"
            />
            {LOCATIONS.map(loc => (
              <Marker
                key={loc.id}
                position={[loc.lat, loc.lng]}
                icon={markerIcon(active?.id === loc.id)}
                eventHandlers={{
                  click: () => select(loc),
                }}
              />
            ))}
            {fly && <FlyTo center={fly.center} zoom={fly.zoom} />}
          </MapContainer>

          {/* Active location card overlay */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs z-[500] rounded-xl p-5 shadow-large ${dark ? 'bg-stone-900/95 backdrop-blur border border-stone-700' : 'bg-ivory-50/95 backdrop-blur border border-stone-200'}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${dark ? 'text-champagne-300' : 'text-champagne-700'}`}>
                      {active.role}
                    </p>
                    <h3 className={`mt-1 text-lg font-serif ${dark ? 'text-ivory-50' : 'text-stone-900'}`}>{active.city}, {active.country}</h3>
                  </div>
                  {active.isHQ && (
                    <span className="rounded-full bg-champagne-500 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-stone-900">HQ</span>
                  )}
                </div>
                <p className={`mt-3 text-sm flex items-center gap-2 ${dark ? 'text-stone-400' : 'text-stone-500'}`}>
                  <Building2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {active.focus}
                </p>
                <Link
                  href="/contact"
                  className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium ${dark ? 'text-ivory-50 hover:text-champagne-300' : 'text-stone-900 hover:text-champagne-700'} transition-colors`}
                >
                  Get in touch <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className={`flex items-center justify-between px-6 py-3 text-[10px] tracking-wide ${dark ? 'text-stone-500' : 'text-stone-400'}`}>
        <span>Scroll does not zoom — drag or use the controls to explore.</span>
        <span>Base map © OpenStreetMap / CARTO</span>
      </div>
    </div>
  )
}

export default MapSection