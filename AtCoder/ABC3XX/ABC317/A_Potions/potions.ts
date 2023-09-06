// https://atcoder.jp/contests/abc317/tasks/abc317_a

export const potions = (n: number, h: number, x: number, a: number[]) => {
  const rest = x - h

  for (const [i, val] of a.entries()) {
    if (rest <= val) {
      return i + 1
    }
  }
}
