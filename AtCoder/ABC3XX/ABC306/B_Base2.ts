export const base2 = (arr: number[]) => {
  let ans = 0n

  for (let i = 0; i < 64; i++) {
    if (arr[i] === 0) {
      continue
    }
    ans += BigInt(2 ** i)
  }

  return ans
}
