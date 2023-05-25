export const onePercent = (input: number) => {
  const i = BigInt(input)
  let saving = 100n
  let year = 0

  while (saving < i) {
    saving += saving / 100n
    year++
  }

  return year
}
