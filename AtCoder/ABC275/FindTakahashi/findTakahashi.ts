export const findTakahashi = (input: number[]) => {
  let h = 0

  for (let i = 0; i < input.length; i++) {
    if (input[h] < input[i]) {
      h = i
    }
  }

  return h + 1
}
