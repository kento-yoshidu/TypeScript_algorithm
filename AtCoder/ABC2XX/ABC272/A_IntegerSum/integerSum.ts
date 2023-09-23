// https://atcoder.jp/contests/abc272/tasks/abc272_a

export const integerSum = (_n: number, a: number[]) => {
  return a.reduce((ans, num) => ans + num)
}
