export const savings = (input: number) => {
  let day = 0
  let total = 0

  for (let i = 1; i < input; i++) {
    if (total < input) {
      day++
      total += i
    }
  }

  return day
}
