// https://atcoder.jp/contests/abc057/tasks/abc057_c

export const walkOnMultiplicationTable = (n: number) => {
  let ans = n

  for (let i = 1; i*i <= n; i++) {
    if (n % i == 0) {
      const j = n / i

      const step = i+j-2

      if (step < ans) {
        ans = step
      }
    }
  }

  return ans
}
