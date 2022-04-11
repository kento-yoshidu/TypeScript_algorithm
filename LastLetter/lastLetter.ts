export const lastLetter = (input: string) => {
  const [N, S] = input.split("\n")

  return S[Number(N) -1]
}