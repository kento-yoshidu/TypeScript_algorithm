export const nineNine = (n: number) => {
  const ans = []

  const sa = 2025 - n

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (i * j > sa) {
        break
      }

      if (i * j === sa) {
        ans.push(`${i} * ${j}`)
      }
    }
  }

  return ans
}
