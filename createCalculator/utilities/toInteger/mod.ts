import { TruncationType } from '../../../types.ts'
import {
  FractionValue,
  IntegerValue,
  NonFractionValue,
  NumberValue,
} from '../../../types.ts'
import { truncateValue } from '../truncateValue/mod.ts'

export type ToIntegerOptions = {
  truncationType: TruncationType
}

export function toInteger(
  value: NumberValue | number,
  options: ToIntegerOptions,
): IntegerValue {
  const { truncationType = TruncationType.TRUNCATE } = options

  if (typeof value === 'number') {
    return {
      datatype: 'integer',
      value: Math.trunc(value),
    }
  }

  if ((value as NumberValue).datatype === 'fraction') {
    return {
      datatype: 'integer',
      value: truncateValue(
        (value as FractionValue).value.numerator /
          (value as FractionValue).value.denominator,
        { truncationType },
      ) as number,
    }
  }

  return {
    datatype: 'integer',
    value: Math.trunc((value as NonFractionValue).value),
  }
}
