export const takahashisFailure = (input: string) => {
  const [_, b, c] = input.split("\n").map((n) => n.split(" ").map(Number))

  const max = Math.max(...b)

  const result = c.filter((n) => {
    return b[n - 1] === max
  })

  return result.length ? "Yes" : "No"
}
