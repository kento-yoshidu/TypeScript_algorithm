export const shiftOnly = (_: number, nums: string) => {
  let array = nums.split(' ').map((n) => parseInt(n, 10));
  let count = 0

  while (array.every((num) => num % 2 === 0)) {
    count++
    array = array.map((n) => n >> 1)
  }

  return count
}

/* ************************* */

function shift(array: number[], count: number): number {
  return array.every((num) => num % 2 === 0)
    ? shift(array.map((n) => n >> 1), count + 1)
    : count
}

export const shiftOnly2 = (_: number, nums: string) => {
  const array = nums.split(' ').map((n) => parseInt(n, 10));

  return shift(array, 0)
}
