export const alternately = (input: string) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      return "No"
    }
  }

  return "Yes"
}
