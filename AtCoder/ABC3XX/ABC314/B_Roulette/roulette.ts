/*
// https://atcoder.jp/contests/abc314/tasks/abc314_b

export const B314 = (n: number, a: number[][], x: number) => {
  const map = new Map()

  for (const [index, arr] of a.entries()) {
    if (!arr.includes(x)) continue

    const len = arr.length

    if (!map.has(len)) {
      map.set(len, index+1)
    } else {
      map.get(len).push(index+1)
    }
  }

  console.log(map)
}

B314(4, [[7, 19, 20], [4, 19, 24, 0], [26, 10], [19, 31, 24]], 19)
*/
