// https://atcoder.jp/contests/abc072/tasks/arc082_a

export const together = (n: number, a: number[]) => {
  let ans = 0

  const min = Math.min(...a)
  const max = Math.max(...a)

  for (let i = min; i <= max; i++) {
    let count = 0

    for (let j = 0; j < a.length; j++) {
      if (Math.abs(i - a[j]) <= 1) {
        count++
      }
    }

    if (ans < count) {
      ans = count
    }
  }

  return ans
}
