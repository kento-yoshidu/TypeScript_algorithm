export const tcdr = (s: string) => {
  let ans = ""

  for (let i = 0; i < s.length; i++) {
    if (!"aioue".includes(s[i])) {
      ans += s[i]
    }
  }

  return ans
}
