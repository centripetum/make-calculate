import type { Calculation, Calculator } from '../types.ts'
import { Operators } from '../types.ts'
// import { createCalculateDifference } from './createCalculateDifference/mod.ts'
// import { createCalculateProduct } from './createCalculateProduct/mod.ts'
// import { createCalculateQuotient } from './createCalculateQuotient/mod.ts'
import { createCalculateSum } from './createCalculateSum/mod.ts'

const calculators = {
  // [Operators.DIFFERENCE]: createCalculateDifference,
  // [Operators.PRODUCT]: createCalculateProduct,
  // [Operators.QUOTIENT]: createCalculateQuotient,
  [Operators.SUM]: createCalculateSum,
}

export function createCalculator(calculation: Calculation): Calculator {
  const calculator = calculators[
    calculation.operatorType as keyof typeof calculators
  ] as (calculation: Calculation) => Calculator

  return calculator(calculation as Calculation)
}
