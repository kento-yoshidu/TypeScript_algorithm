export const intersection = (input: string) => {
  const [l1, r1, l2, r2] = input.split(" ").map(Number)

  return Math.max(0, Math.min(r1, r2) - Math.max(l1, l2))
}
