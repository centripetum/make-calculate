import { TruncationType } from '../../../types.ts'
import type { Calculator, IntegerValue, NumberValue } from '../../../types.ts'
import { toInteger } from '../../utilities/toInteger/mod.ts'
import { SummingFunctionOptions } from '../mod.ts'

export function sumIntegers(
  addends: Array<Calculator>,
  options: SummingFunctionOptions,
): IntegerValue {
  const { truncationType = TruncationType.TRUNCATE } = options

  return addends.reduce(
    (acc: IntegerValue, addend: Calculator) => {
      const value = toInteger(addend() as NumberValue | number, {
        truncationType,
      }) as IntegerValue

      return {
        datatype: 'integer',
        value: acc.value + value.value,
      } as IntegerValue
    },
    {
      datatype: 'integer',
      value: 0,
    } as IntegerValue,
  ) as IntegerValue
}
