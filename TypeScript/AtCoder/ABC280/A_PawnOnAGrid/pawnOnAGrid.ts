export const pawnOnAGrid = (input: string) => {
  const count = (input.match(/#/g))?.length

  return count ? count : 0
}
