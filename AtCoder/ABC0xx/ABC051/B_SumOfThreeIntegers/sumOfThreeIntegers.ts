// https://atcoder.jp/contests/abc051/tasks/abc051_b

export const sumOfThreeIntegers = (k: number, s: number) => {
  let ans = 0

  for (let i = 0; i <= k; i++) {
    for (let j = 0; j <= k; j++) {
      if (i + j === s) {
        ans++
        break
      }

      if (i + j > s) {
        break
      }

      if (s - i - j <= k) {
        ans++
      }
    }
  }

  return ans
}
