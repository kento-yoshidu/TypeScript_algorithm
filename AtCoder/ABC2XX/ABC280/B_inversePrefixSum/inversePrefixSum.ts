export const inversePrefixSum = (_n: number, arr: number[]) => {
  const ans = [arr[0]]

  for (let i = 0; i < arr.length - 1; i++) {
    ans.push(arr[i+1] - arr[i])
  }


  return ans
}
