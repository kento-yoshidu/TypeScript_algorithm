export const multiplication = (input: string) => {
  const [a, b] = input.split(" ").map(Number)

  return a * b
}
