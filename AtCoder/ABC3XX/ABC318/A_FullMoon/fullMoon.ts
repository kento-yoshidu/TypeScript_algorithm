// https://atcoder.jp/contests/abc318/tasks/abc318_a

export const fullMoon = (n: number, m: number, p: number) => {
  if (n - m < 0) {
    return 0
  }

  return Math.floor((n - m) / p) + 1
}
