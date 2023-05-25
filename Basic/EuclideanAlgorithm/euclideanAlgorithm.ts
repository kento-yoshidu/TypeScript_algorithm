const func = (m: number, n: number): number => {
  return n === 0 ? m : func(n, m % n)
}

export const euclideanAlgorithm = (input: number[]) => {
  return func(input[0], input[1])
}
