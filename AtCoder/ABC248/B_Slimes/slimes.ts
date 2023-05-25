function multiplication(A: number, B: number, K: number, count: number): number {
  return (A >= B) ? count : multiplication(A *= K, B, K, count +1)
}

export const slimes = (input: string) => {
  const [A, B, K] = input.split(" ").map(Number)

  return multiplication(A, B, K, 0)
}
