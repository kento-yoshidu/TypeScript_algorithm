export const exponentialOrQuadratic = (input: string) => {
  const a = Number(input)

  return ((2 ** a) > (a ** 2)) ? "Yes" : "No"
}

