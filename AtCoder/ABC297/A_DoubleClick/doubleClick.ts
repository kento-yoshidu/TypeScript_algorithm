export const doubleClick = (n: number, d: number, t: number[]) => {
  for (let i = 0; i < n - 1; i++) {
    if (t[i + 1] - t[i] <= d) {
      return t[i + 1]
    }
  }

  return -1
}
