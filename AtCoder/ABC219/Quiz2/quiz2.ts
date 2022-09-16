export const quiz2 = (input: string): number | string => {
  const X = Number(input)

  if (X >= 90) {
    return "expert"
  } else if (X >= 70) {
    return 90 - X
  } else if (X >= 40) {
    return 70 - X
  } else {
    return 40 - X
  }
}
