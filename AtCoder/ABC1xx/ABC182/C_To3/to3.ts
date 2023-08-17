export const to3 = (n: string) => {
  if (Number(n) % 3 === 0) {
    return 0
  }

  let ans = Number.MAX_SAFE_INTEGER

  for (let bit = 1; bit < n.length ** 2; bit++) {
    let count = 0

    let num = 0

    for (let i = 0; i < n.length; i++) {
      if ((bit & (1 << i)) !== 0) {
        count++
        num += Number(n[i])
      }
    }

    if (num % 3 === 0) {
      if (ans > count) {
        ans = count
      }
    }
  }

  if (ans === Number.MAX_SAFE_INTEGER) {
    return -1
  } else {
    return ans
  }
}
