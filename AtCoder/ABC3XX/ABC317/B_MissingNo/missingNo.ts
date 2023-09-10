// https://atcoder.jp/contests/abc317/tasks/abc317_b

export const missingNo = (_n: number, arr: number[]) => {
  arr.sort()

  for (let i = 0; i < arr.length -1; i++) {
    if (arr[i+1] - arr[i] === 2) {
      return arr[i] + 1
    }
  }
}
