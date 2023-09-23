// https://atcoder.jp/contests/abc231/tasks/abc231_b

export const election = (n: number, s: string[]) => {
  const hashmap = new Map()

  s.map((name) => {
    if (hashmap.has(name)) {
      hashmap.set(name, hashmap.get(name) + 1)
    } else {
      hashmap.set(name, 1)
    }
  })

  return [...hashmap.entries()].reduce((a, e) => e[1] > a[1] ? e : a)[0]
}
