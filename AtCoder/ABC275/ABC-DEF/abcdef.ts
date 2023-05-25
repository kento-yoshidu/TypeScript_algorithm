export const abcdef = (input: number[]) => {
  const [a, b, c, d, e, f] = input

  return ((a * b * c) - (d * e * f)) % 998244353
}
