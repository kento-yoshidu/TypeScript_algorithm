export const linearSearch = (n: number, x: number, arr: number[]) => {
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      return "Yes"
    }
  }

  return "No"
}

linearSearch(5, 40, [10, 20, 30, 40, 50])
