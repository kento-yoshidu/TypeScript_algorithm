export const shiftOnly = (_: number, nums: string) => {
  let array = nums.split(' ').map((n) => parseInt(n, 10));
  let count = 0

  while (array.every((num) => num % 2 === 0)) {
    count++
    array = array.map((n) => n >> 1)
  }

  return count
}
