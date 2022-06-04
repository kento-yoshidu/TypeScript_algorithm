export const integerDivision = (input: string) => {
  const i = BigInt(input)

  return ((i < 0) && (i % 10n !== 0n)) ? Number(i / 10n - 1n) : Number(i / 10n)
}
