// https://atcoder.jp/contests/abc260/tasks/abc260_a

export const aUniqueLetter = (input: string) => {
  const [a, b, c] = input.split("")

  if (a === b && a === c) {
    return -1
  }

  if (a === b) {
    return c
  } else if (b === c) {
    return a
  } else {
    return b
  }
}

export const aUniqueLetter2 = (s: string) => {
  const map: Map<string, number> = new Map()

  for (const c of s) {
    if (map.get(c) === undefined) {
      map.set(c, 1)
    } else {
      const num = map.get(c)
      map.set(c, num!+1)
    }
  }

  for (const [char, count] of map) {
    if (count === 1) {
      return char
    }
  }

  return -1
}
