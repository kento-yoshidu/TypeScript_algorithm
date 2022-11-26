const fizzBuzz = (num: number) => {
  if (!(num % 3 === 0 || num % 5 === 0)) {
    return true
  }
}

export const fizzBuzzSum = (input: number) => {
  let total = 0

  for (let i = 1; i <= input; i++) {
    if (fizzBuzz(i)) {
      total += i
    }
  }

  return total
}
