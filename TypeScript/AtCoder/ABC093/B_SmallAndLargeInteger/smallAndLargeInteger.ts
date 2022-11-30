export const smallAndLargeInteger = (input: string) => {
  const [A, B, K] = input.split(" ").map(Number)

  const result = []

  for (let i = A; i < A+K; i++) {
    if (i > Math.floor((A + B) / 2)) {
      continue
    }
    result.push(i)
  }

  for (let i = B - K + 1; i <= B; i++) {
    if (i < Math.ceil((A + B) / 2)) {
      continue
    }
    result.push(i)
  }

  return result
}

console.log(smallAndLargeInteger("1 9 3"))
