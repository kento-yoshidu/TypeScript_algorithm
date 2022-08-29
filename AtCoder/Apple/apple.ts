export const apple = (input: string) => {
  const [X, Y, N] = input.split(" ").map(Number)

  const x = X * N

  const y = Math.floor(N / 3) * Y + (N % 3) * X

  return Math.min(x, y)
}
