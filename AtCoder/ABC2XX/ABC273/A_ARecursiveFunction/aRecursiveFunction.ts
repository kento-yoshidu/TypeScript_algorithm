// https://atcoder.jp/contests/abc273/tasks/abc273_a

const calc = (n: number): number => {
  if (n === 0) {
    return 1
  }

  return n * calc(n - 1)
}

export const aRecursiveFunction = (n: number) => {
  return calc(n)
}
