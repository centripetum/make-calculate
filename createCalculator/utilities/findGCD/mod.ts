export function findGCD(x: number, y: number): number {
  return y === 0 ? x : findGCD(y, x % y)
}
