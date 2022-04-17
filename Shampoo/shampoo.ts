export const shampoo = (input: string) => {
  const i = input.split(" ").map(Number)

  const remain = i[0] % (i[1] + i[2] + i[3])

  if (remain - i[1] < 0) {
    return "F"
  } else if (remain - (i[1] + i[2]) < 0) {
    return "M"
  } else {
    return "T"
  }
}
