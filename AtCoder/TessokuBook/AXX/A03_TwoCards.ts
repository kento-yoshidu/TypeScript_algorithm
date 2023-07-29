// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_c

export const twoCards = (n: number, k: number, p: number[], q: number[]) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (p[i] + q[j] === k) {
        return "Yes"
      }
    }
  }

  return "No"
}
