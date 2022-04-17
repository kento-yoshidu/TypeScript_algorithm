export const lackedNumber = (input: string) => {
  const a = input.split("").map(Number)

  return([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((_, i) => a.indexOf(i) === -1)[0])
}
