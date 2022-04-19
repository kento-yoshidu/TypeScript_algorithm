export const horizon = (input: string) => {
  const a = Number(input)

  return Math.sqrt(a * (12_800_000 + a))
}
