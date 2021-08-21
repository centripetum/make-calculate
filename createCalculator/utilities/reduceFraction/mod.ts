import { FractionValue } from '../../../types.ts'
import { findGCD } from '../findGCD/mod.ts'

export function reduceFraction(fraction: FractionValue): FractionValue {
  const commonDenominator = findGCD(
    fraction.value.denominator,
    fraction.value.numerator,
  )

  return {
    ...fraction,
    value: {
      denominator: fraction.value.denominator / commonDenominator,
      numerator: fraction.value.numerator / commonDenominator,
    },
  }
}
