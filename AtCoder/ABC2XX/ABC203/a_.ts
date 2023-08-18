// https://atcoder.jp/contests/abc203/tasks/abc203_a

export const abc203a = (a: number, b: number, c: number) => {
  if (a !== b && a !== c && b !== c) {
    return 0
  }

  if (a === b) {
    return c
  } else if (b === c) {
    return a
  } else {
    return b
  }
}
