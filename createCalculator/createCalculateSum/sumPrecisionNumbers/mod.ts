import { TruncationType } from '../../../types.ts'
import {
  Calculator,
  NumberValue,
  PrecisionNumberValue,
} from '../../../types.ts'
import { toPrecisionNumber } from '../../utilities/toPrecisionNumber/mod.ts'
import { SummingFunctionOptions } from '../mod.ts'

export function sumPrecisionNumbers(
  addends: Array<Calculator>,
  options: SummingFunctionOptions,
): PrecisionNumberValue {
  const { decimalPlaces = 0, truncationType = TruncationType.ROUND } = options

  return addends.reduce(
    (acc: PrecisionNumberValue, addend: Calculator) => {
      const value = toPrecisionNumber(addend() as NumberValue | number, {
        decimalPlaces,
        truncationType,
      }) as PrecisionNumberValue

      return {
        datatype: 'precision',
        decimalPlaces,
        value: acc.value + value.value,
      } as PrecisionNumberValue
    },
    {
      datatype: 'precision',
      decimalPlaces,
      value: 0,
    } as PrecisionNumberValue,
  ) as PrecisionNumberValue
}
