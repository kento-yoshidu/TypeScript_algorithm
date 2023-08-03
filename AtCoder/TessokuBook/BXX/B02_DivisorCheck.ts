// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_ca

export const divisorCheck = (a: number, b: number) => {
  for (let i = a; i <= b; i++) {
    if (100 % i === 0) {
      return "Yes"
    }
  }

  return "No"
}
