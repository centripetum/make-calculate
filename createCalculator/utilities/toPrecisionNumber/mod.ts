import { TruncationType } from '../../../types.ts'
import {
  FractionValue,
  NonFractionValue,
  NumberValue,
  PrecisionNumberValue,
} from '../../../types.ts'
import { truncateValue } from '../truncateValue/mod.ts'

export type ToPrecisionNumberOptions = {
  decimalPlaces: number
  truncationType: TruncationType
}

export function toPrecisionNumber(
  value: NumberValue | number,
  options: ToPrecisionNumberOptions,
): PrecisionNumberValue {
  const { decimalPlaces = 0, truncationType = TruncationType.ROUND } = options

  if (typeof value === 'number') {
    return {
      datatype: 'precision',
      decimalPlaces,
      value: truncateValue(value, { decimalPlaces, truncationType }) as number,
    }
  }

  if ((value as NumberValue).datatype === 'fraction') {
    return {
      datatype: 'precision',
      decimalPlaces,
      value: truncateValue(
        (value as FractionValue).value.numerator /
          (value as FractionValue).value.denominator,
        { decimalPlaces, truncationType },
      ) as number,
    }
  }

  return {
    datatype: 'precision',
    decimalPlaces,
    value: truncateValue((value as NonFractionValue).value, {
      decimalPlaces,
      truncationType,
    }) as number,
  }
}
