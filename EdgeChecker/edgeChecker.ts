export const edgeChecker = (input: string) => {
  const [x, y] = input.split(" ").map(Number)

  const num = Math.abs(x - y)

  return (num === 1 || num === 9) ? "Yes" : "No"
}
