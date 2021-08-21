import type { Calculator, FractionValue, NumberValue } from '../../../types.ts'
import type { SummingFunctionOptions } from '../mod.ts'
import { toFraction } from '../../utilities/toFraction/mod.ts'
import { reduceFraction } from '../../utilities/reduceFraction/mod.ts'
import { TruncationType } from '../../../types.ts'

export function sumFractions(
  addends: Array<Calculator>,
  options: SummingFunctionOptions,
): FractionValue {
  const { decimalPlaces = 0, truncationType = TruncationType.ROUND } = options

  return addends.reduce<FractionValue>(
    (acc: FractionValue, addend: Calculator) => {
      const value = toFraction(addend() as NumberValue | number, {
        decimalPlaces,
        truncationType,
      }) as FractionValue

      return reduceFraction({
        datatype: 'fraction',
        value: {
          denominator: acc.value.denominator * value.value.denominator,
          numerator:
            acc.value.numerator * value.value.denominator +
            value.value.numerator * acc.value.denominator,
        },
      })
    },
    {
      datatype: 'fraction',
      value: {
        denominator: 1,
        numerator: 0,
      },
    },
  )
}
