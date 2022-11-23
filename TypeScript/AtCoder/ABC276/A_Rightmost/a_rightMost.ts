export const rightMost = (input: string) => {
  const arr = input.split("")

  let result = -1

  arr.map((str, i) => {
    if (str === "a") {
      result = i + 1
    }
  })

  return result
}
