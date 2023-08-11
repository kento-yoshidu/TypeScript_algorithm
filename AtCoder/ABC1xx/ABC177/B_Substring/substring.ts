export const substring = (s: string, t: string) => {
  let ans = s.length

  for (let i = 0; i < s.length-2; i++) {
    let count = 0

    for (let j = 0; j < t.length; j++) {
      if (s[i+j] !== t[j]) {
        count++
      }
    }

    if (count < ans) {
      ans = count
    }
  }

  return ans
}
