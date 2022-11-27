export const battle = (input: string) => {
  let [tHp, tAt, aHp, aAt] = input.split(" ").map(Number)

  while (true) {
    aHp -= tAt

    if (aHp <= 0) {
      return "Yes"
    }

    tHp -= aAt

    if (tHp <= 0) {
      return "No"
    }
  }
}
