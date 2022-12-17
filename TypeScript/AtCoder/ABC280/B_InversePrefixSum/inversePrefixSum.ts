export const inversePrefixSum = (input: string) => {
  const arr = input.split(" ").map(Number)

  const ans = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
    ans.push(arr[i] - arr[i - 1])
  }

  return ans.join(" ")
}
