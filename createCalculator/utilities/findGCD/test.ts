import { assertEquals } from 'https://deno.land/std@0.105.0/testing/asserts.ts'
import { findGCD } from './mod.ts'

Deno.test('[findGCD] finds the greatest common denominator.', () => {
  assertEquals(findGCD(12, 52), 4)
})
