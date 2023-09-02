// https://atcoder.jp/contests/abc259/tasks/abc259_a

export const growthRecord = (n: number, m: number, x: number, t: number, d: number) => {
  if (m >= x) {
    return t
  }

  return t - (x - m) * d
}
