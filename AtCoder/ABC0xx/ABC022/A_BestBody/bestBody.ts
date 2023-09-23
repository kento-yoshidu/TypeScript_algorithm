// https://atcoder.jp/contests/abc022/tasks/abc022_a

export const bestBody = (_n: number, s: number, t: number, w: number[]) => {
  const arr: number[] = []

  w.map((w, index) => {
    if (index === 0) {
      arr.push(w)
    } else {
      arr.push(arr[index-1] + w)
    }
  })

  return arr.filter((weight) => {
    return s <= weight && weight <= t
  }).length
}

