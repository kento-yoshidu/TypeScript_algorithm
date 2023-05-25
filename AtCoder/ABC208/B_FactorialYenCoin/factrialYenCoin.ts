const fact = (num: number) => {
  let result = 1

  for (let i = 1; i <= num; i++) {
    result *= i
  }

  return result
}

export const factorialYenCoin = (input: number) => {
  let total = input
  let result = 0

  for (let i = 10; i >= 1; i--) {
    while (total >= fact(i)) {
      total -= fact(i)
      result++
    }
  }

  return result
}
