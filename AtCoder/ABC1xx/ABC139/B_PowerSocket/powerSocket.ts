// https://atcoder.jp/contests/abc139/tasks/abc139_b

export const powerSocket = (a: number, b: number) => {
  if (a === b) {
    return 1
  } else {
    return Math.floor(b / a) + 1
  }
}
