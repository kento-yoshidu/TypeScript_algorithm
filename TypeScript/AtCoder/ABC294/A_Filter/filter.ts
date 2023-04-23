export const filter = (num: string) => {
  const arr = num.split(" ").map(Number)

  return arr.filter((a) => a % 2 === 0).join(" ")
}
