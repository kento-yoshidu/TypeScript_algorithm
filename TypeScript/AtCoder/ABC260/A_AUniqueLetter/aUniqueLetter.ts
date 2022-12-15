export const aUniqueLetter = (input: string) => {
  const [a, b, c] = input.split("")

  if (a === b && a === c) {
    return -1
  }

  if (a === b) {
    return c
  } else if (b === c) {
    return a
  } else {
    return b
  }
}
