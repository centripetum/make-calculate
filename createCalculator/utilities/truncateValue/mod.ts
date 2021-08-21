import { TruncationType } from '../../../types.ts'

export type TruncateValueOptions = {
  count?: number
  decimalPlaces?: number
  truncationType?: TruncationType
}

const newline = `
`

export function truncateValue(
  value: string | number,
  options: TruncateValueOptions,
): string | number {
  const { count, decimalPlaces, truncationType } = options

  switch (truncationType) {
    case TruncationType.ROUND:
      return (
        Math.round((value as number) * Math.pow(10, decimalPlaces || 0)) /
        Math.pow(10, decimalPlaces || 0)
      )
    case TruncationType.ROUND_DOWN:
      return (
        Math.floor((value as number) * Math.pow(10, decimalPlaces || 0)) /
        Math.pow(10, decimalPlaces || 0)
      )
    case TruncationType.ROUND_UP:
      return (
        Math.ceil((value as number) * Math.pow(10, decimalPlaces || 0)) /
        Math.pow(10, decimalPlaces || 0)
      )
    case TruncationType.CHARACTERS:
      return typeof count === 'number'
        ? (value as string).replace(/\n/g, ' ').slice(0, count)
        : value
    case TruncationType.LINES:
      return typeof count === 'number'
        ? (value as string).split(/\n/).slice(0, count).join(newline)
        : value
    case TruncationType.WORDS:
      return typeof count === 'number'
        ? (value as string).split(/[ \n]/).slice(0, count).join(' ')
        : value
    case TruncationType.TRUNCATE:
      return Math.trunc(value as number)
    default:
      return value
  }
}
