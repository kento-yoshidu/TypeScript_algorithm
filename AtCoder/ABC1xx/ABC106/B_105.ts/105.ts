// https://atcoder.jp/contests/abc106/tasks/abc106_b

const check = (n: number) => {
  let count = 0

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++
    }
  }

  if (count === 8) {
    return true
  } else {
    return false
  }
}

export const _105 = (n: number) => {
  let ans = 0

  for (let i = 1; i <= n; i += 2) {
    if (check(i)) {
      ans++
    }
  }

  return ans
}
