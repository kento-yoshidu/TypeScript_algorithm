export const canYouSolveThis = (n: number, m: number, c: number, b: number[], arr: number[][]) => {
  let ans = 0

  arr.map((a) => {
    let total = 0

    a.map((num, index) => {
      total += num * b[index]
    })

    if ((total + c) > 0) {
      ans++
    }
  })

  return ans
}
