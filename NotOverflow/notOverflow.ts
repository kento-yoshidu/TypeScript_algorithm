export const notOverflow = (input: string) => {
  const N = Number(input)

  return (N >= ((-2) ** 31) && N < 2 ** 31) ? "Yes" : "No"
}
