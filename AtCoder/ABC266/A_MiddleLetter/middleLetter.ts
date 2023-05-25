export const middleLetter = (input: string) => {
  return input.length % 2 === 0
    ? input.charAt(input.length / 2 - 1)
    : input.charAt(input.length / 2)
}
