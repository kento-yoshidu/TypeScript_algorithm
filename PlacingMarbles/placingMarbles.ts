export const placingMarbles = (str: string) => {
  let count = 0

  str[0] === "1" && count++
  str[1] === "1" && count++
  str[2] === "1" && count++

  return count
}
