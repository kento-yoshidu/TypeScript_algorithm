const calc = (num: number) => {
  let n = num
  let total = 0

  while (n > 0) {
    total += n % 10
    n = Math.floor(n / 10)
  }

  return total
}

export const someSums = (input: string) => {
  const [N, A, B] = input.split(" ").map(Number)

  let total = 0

  for (let i = 1; i <= N; i++) {
    const result = calc(i)

    if (A <= result && result <= B) {
      total += i
    }
  }

  return total
}
