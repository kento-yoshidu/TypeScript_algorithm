// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_cb

export const supermarket1 = (n: number, arr: number[]) => {
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === 1000) {
          return "Yes"
        }
      }
    }
  }

  return "No"
}
