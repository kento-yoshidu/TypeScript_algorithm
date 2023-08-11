export const makingTriangle = (n: number, array: number[]) => {
  const arr = array.sort()

  let count = 0

  for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
      if (arr[i] === arr[j]) {
        continue
      }

      for (let k = j+1; k < n; k++) {
        if (arr[j] === arr[k]) {
          continue
        }

        if (arr[i] + arr[j] > arr[k]) {
          count++
        }
      }
    }
  }

  return count
}
