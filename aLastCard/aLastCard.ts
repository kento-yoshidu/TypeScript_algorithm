export const aLastCard = (input: string) => {
  const [N, K, A] = input.split(" ").map(Number)

  const result = (A + K - 1) % N

  return result === 0 ? N : result
}
