export const wordCount = (s: string) => {
  const ans = Array(6).fill(0)

  for (let i = 0; i < s.length; i++) {
    ans[s[i].charCodeAt(0) - 65] += 1
  }

  return ans
}
