import { TruncationType } from '../../../types.ts'
import type {
  FractionValue,
  NumberValue,
  RealNumberValue,
} from '../../../types.ts'
import { truncateValue } from '../truncateValue/mod.ts'

export type ToFractionOptions = {
  decimalPlaces: number
  truncationType: TruncationType
}

export function toFraction(
  value: NumberValue | number,
  options: ToFractionOptions,
): FractionValue {
  const { decimalPlaces = 0, truncationType = TruncationType.ROUND } = options

  if (typeof value === 'object' && value.datatype === 'fraction') {
    return value
  }

  const exponent: number =
    typeof value === 'object'
      ? (value as RealNumberValue).decimalPlaces || 0
      : decimalPlaces
  const power = Math.pow(10, exponent)
  const raw = typeof value === 'number' ? value : value.value

  return {
    datatype: 'fraction',
    value: {
      denominator: power,
      numerator: truncateValue(raw * power, {
        decimalPlaces,
        truncationType,
      }) as number,
    },
  }
}
