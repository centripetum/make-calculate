import { createCalculator } from '../mod.ts'
import type {
  Calculation,
  Calculator,
  NumberValue,
  SumCalculation,
} from '../../types.ts'
import { ReturnType, TruncationType } from '../../types.ts'
import { truncateValue } from '../utilities/truncateValue/mod.ts'
import { sumFractions } from './sumFractions/mod.ts'
import { sumIntegers } from './sumIntegers/mod.ts'
import { sumPrecisionNumbers } from './sumPrecisionNumbers/mod.ts'
import { sumRealNumbers } from './sumRealNumbers/mod.ts'

export type SummingFunctionOptions = {
  decimalPlaces?: number
  truncationType?: TruncationType
}

export type SummingFunction = (
  addends: Array<Calculator>,
  options: SummingFunctionOptions,
) => NumberValue

const summingFunctions = {
  [ReturnType.FRACTION]: sumFractions,
  [ReturnType.INTEGER]: sumIntegers,
  [ReturnType.PRECISION_NUMBER]: sumPrecisionNumbers,
  [ReturnType.REAL_NUMBER]: sumRealNumbers,
}

/** Returns a function that SUMS one or more numbers */
export function createCalculateSum(calculation: Calculation): Calculator {
  const {
    decimalPlaces,
    returnType,
    truncationType = TruncationType.ROUND,
  } = calculation as SumCalculation

  const addends: Array<Calculator> = (
    calculation as SumCalculation
  ).operands.map<Calculator>((operand: Calculation | NumberValue | number) => {
    if (typeof operand === 'number') {
      return () =>
        typeof decimalPlaces === 'number'
          ? {
              datatype: 'precision',
              decimalPlaces,
              value: truncateValue(operand, {
                decimalPlaces,
                truncationType,
              }),
            }
          : Number.isInteger(operand)
          ? {
              datatype: 'integer',
              value: operand,
            }
          : {
              datatype: 'real',
              value: operand,
            }
    }

    if ((operand as Calculation).operatorType) {
      return createCalculator(operand as Calculation)
    }

    return () => operand
  })

  return function calculateSum() {
    return (
      summingFunctions[
        returnType as keyof typeof summingFunctions
      ] as SummingFunction
    )?.(addends, { decimalPlaces, truncationType })
  }
}
