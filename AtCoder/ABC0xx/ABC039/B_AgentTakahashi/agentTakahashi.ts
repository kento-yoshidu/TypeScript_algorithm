// https://atcoder.jp/contests/abc039/tasks/abc039_b

export const agentTakahashi = (n: number) => {
  for (let i = 1; i <= 1000; i++) {
    if (Math.pow(i, 4) === n) {
      return i
    }
  }
}
