export const theMiddleDay = (m: number, d: number[]) => {
  const total = d.reduce((sum, val) => sum + val)

  const ans: number[] = []

  let days = Math.floor(total / 2) + 1

  for (const [index, day] of d.entries()) {
    if (days - day <= 0) {
      ans.push(index+1)
      ans.push(days)
      break
    }

    days -= day
  }

  return ans
}
