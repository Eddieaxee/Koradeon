'use client'

import dynamic from 'next/dynamic'
import type { MapSectionProps } from './MapSection'

/**
 * Client-only wrapper for the interactive map.
 * Leaflet touches `window` at module-evaluation time, so the map module must
 * never be evaluated on the server — this keeps prerendering safe while the
 * map hydrates normally in the browser.
 */
const MapSection = dynamic(() => import('./MapSection').then((m) => m.MapSection), {
  ssr: false,
})

export default function MapSectionLazy(props: MapSectionProps) {
  return <MapSection {...props} />
}