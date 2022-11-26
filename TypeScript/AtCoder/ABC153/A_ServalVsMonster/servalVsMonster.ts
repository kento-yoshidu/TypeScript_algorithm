export const servalVsMonster = (input: string) => {
  const [hp, a] = input.split(" ").map(Number)

  return hp % a === 0
    ? hp / a
    : Math.floor(hp / a + 1)
}
