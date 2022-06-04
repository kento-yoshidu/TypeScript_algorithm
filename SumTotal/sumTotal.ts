export const sumTotal = (num: number, total: number): number => {
  return num !== 0 ? sumTotal(num - 1, total + num) : total
}
