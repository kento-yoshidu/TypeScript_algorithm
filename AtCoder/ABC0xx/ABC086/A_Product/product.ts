export const product = (input: string) => {
  const [a, b] = input.split(" ").map(Number)

  return (a * b) % 2 === 0 ? "Even" : "Odd"
}
