import { createCalculator } from '../mod.ts'
import type {
  Calculation,
  Calculator,
  FractionValue,
  IntegerValue,
  NumberValue,
  PrecisionNumberValue,
  RealNumberValue,
  SumCalculation,
  Value,
} from '../../types.ts'
import { ReturnType, TruncationType } from '../../types.ts'
import { truncateValue } from '../utilities/truncateValue/mod.ts'
import { reduceFraction } from '../utilities/reduceFraction/mod.ts'
import { toFraction } from '../utilities/toFraction/mod.ts'
import { toInteger } from '../utilities/toInteger/mod.ts'
import { toPrecisionNumber } from '../utilities/toPrecisionNumber/mod.ts'
import { toRealNumber } from '../utilities/toRealNumber/mod.ts'

export type SummingFunctionOptions = {
  decimalPlaces?: number
  truncationType?: TruncationType
}

export type SummingFunction = (
  acc: NumberValue,
  addend: Calculator,
) => Promise<NumberValue>

const createReducerFunctions = {
  [ReturnType.FRACTION]: reduceFractions,
  [ReturnType.INTEGER]: reduceIntegers,
  [ReturnType.PRECISION_NUMBER]: reducePrecisionNumbers,
  [ReturnType.REAL_NUMBER]: reduceRealNumbers,
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
      return () => {
        const output =
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

        return new Promise((resolve) => resolve(output))
      }
    }

    if ((operand as Calculation).operatorType) {
      return createCalculator(operand as Calculation)
    }

    return () => {
      return new Promise((resolve) => resolve(operand))
    }
  })

  return async function calculateSum(): Promise<Value> {
    const options = { decimalPlaces, truncationType }
    const summingFunction =
      createReducerFunctions[returnType as keyof typeof createReducerFunctions](
        options,
      )

    return await addends.reduce(summingFunction, {
      datatype: 'integer',
      value: 0,
    })
  }
}

/** Returns a fraction summing function to be used in a call to reduce to sum numbers */
export function reduceFractions(
  options: SummingFunctionOptions,
): SummingFunction {
  const { decimalPlaces = 0, truncationType = TruncationType.ROUND } = options

  return async function doSum(
    acc: NumberValue,
    addend: Calculator,
  ): Promise<FractionValue> {
    const accValue: FractionValue = toFraction(acc, {
      decimalPlaces,
      truncationType,
    })
    const fractionValue: FractionValue = toFraction(
      (await addend()) as NumberValue | number,
      {
        decimalPlaces,
        truncationType,
      },
    )

    return new Promise((resolve) =>
      resolve(
        reduceFraction({
          datatype: 'fraction',
          value: {
            denominator:
              accValue.value.denominator * fractionValue.value.denominator,
            numerator:
              accValue.value.numerator * fractionValue.value.denominator +
              fractionValue.value.numerator * accValue.value.denominator,
          },
        }),
      ),
    )
  }
}

/** Returns an integer summing function to be used in a call to reduce to sum numbers */
export function reduceIntegers(
  options: SummingFunctionOptions,
): SummingFunction {
  const { truncationType = TruncationType.TRUNCATE } = options

  return async function doSum(
    acc: NumberValue,
    addend: Calculator,
  ): Promise<IntegerValue> {
    const accValue: IntegerValue = toInteger(acc, {
      truncationType,
    })
    const integerValue: IntegerValue = toInteger(
      (await addend()) as NumberValue | number,
      {
        truncationType,
      },
    )

    return new Promise((resolve) =>
      resolve({
        datatype: 'integer',
        value: accValue.value + integerValue.value,
      }),
    )
  }
}

/** Returns a precision number summing function to be used in a call to reduce to sum numbers */
export function reducePrecisionNumbers(
  options: SummingFunctionOptions,
): SummingFunction {
  const { decimalPlaces = 0, truncationType = TruncationType.ROUND } = options

  return async function doSum(
    acc: NumberValue,
    addend: Calculator,
  ): Promise<PrecisionNumberValue> {
    const accValue: PrecisionNumberValue = toPrecisionNumber(acc, {
      decimalPlaces,
      truncationType,
    })
    const precisionNumberValue: PrecisionNumberValue = toPrecisionNumber(
      (await addend()) as NumberValue | number,
      {
        decimalPlaces,
        truncationType,
      },
    )

    return new Promise((resolve) =>
      resolve({
        datatype: 'precision',
        decimalPlaces,
        value: accValue.value + precisionNumberValue.value,
      }),
    )
  }
}

/** Returns a real number summing function to be used in a call to reduce to sum numbers */
export function reduceRealNumbers(): SummingFunction {
  return async function doSum(
    acc: NumberValue,
    addend: Calculator,
  ): Promise<RealNumberValue> {
    const accValue: RealNumberValue = toRealNumber(acc)
    const realNumberValue: RealNumberValue = toRealNumber(
      (await addend()) as NumberValue | number,
    )

    return new Promise((resolve) =>
      resolve({
        datatype: 'real',
        value: accValue.value + realNumberValue.value,
      }),
    )
  }
}
