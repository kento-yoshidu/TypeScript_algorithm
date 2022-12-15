export const atcoderSubstr = (input: string) => {
  const [s, e] = input.split(" ").map(Number)

  return "atcoder".substring(s - 1, e)
}
