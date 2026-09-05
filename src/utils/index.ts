/**
 * KÓRADEON GROUP - Shared Utility Entry Point
 *
 * Re-exports core utilities from /lib (the canonical implementation)
 * and provides additional project-level helpers.
 */

export { cn, formatDate, slugify, truncate, debounce, throttle } from '@/lib/utils'

/**
 * Clamps a number between a minimum and maximum bound.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Maps a value from one numeric range into another.
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  const t = (value - inMin) / (inMax - inMin)
  return outMin + t * (outMax - outMin)
}

/**
 * Delays execution for a given number of milliseconds.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Returns the current year as a string (used for copyright notices).
 */
export function getCurrentYear(): number {
  return new Date().getFullYear()
}

/**
 * Checks whether a given value is a non-empty string after trimming.
 */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * Safely reads an environment variable.
 */
export function getEnv(key: string, fallback = ''): string {
  if (typeof process === 'undefined') return fallback
  return process.env[key]?.trim() || fallback
}