export const creamPuff = (n: number) => {
  const ans = []

  for (let i = 0; i*i <= n; i++) {
    if (n % i === 0) {
      ans.push(i)
      ans.push(n / i)
    }
  }

  return ans.sort((a, b) => {
    if (a < b) {
      return -1
    } else {
      return 0
    }
  })
}
