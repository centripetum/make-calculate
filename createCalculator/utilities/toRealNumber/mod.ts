import {
  FractionValue,
  NonFractionValue,
  NumberValue,
  RealNumberValue,
} from '../../../types.ts'

export function toRealNumber(value: NumberValue | number): RealNumberValue {
  if (typeof value === 'number') {
    return {
      datatype: 'real',
      value,
    }
  }

  if ((value as NumberValue).datatype === 'fraction') {
    return {
      datatype: 'real',
      value:
        (value as FractionValue).value.numerator /
        (value as FractionValue).value.denominator,
    }
  }

  return {
    datatype: 'real',
    value: (value as NonFractionValue).value,
  }
}
