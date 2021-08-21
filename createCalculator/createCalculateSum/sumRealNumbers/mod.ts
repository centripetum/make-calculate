import type {
  Calculator,
  NumberValue,
  RealNumberValue,
} from '../../../types.ts'
import { toRealNumber } from '../../utilities/toRealNumber/mod.ts'

export function sumRealNumbers(addends: Array<Calculator>): RealNumberValue {
  return addends.reduce(
    (acc: RealNumberValue, addend: Calculator) => {
      const value = toRealNumber(
        addend() as NumberValue | number,
      ) as RealNumberValue

      return {
        datatype: 'real',
        value: acc.value + value.value,
      } as RealNumberValue
    },
    {
      datatype: 'real',
      value: 0,
    } as RealNumberValue,
  ) as RealNumberValue
}
