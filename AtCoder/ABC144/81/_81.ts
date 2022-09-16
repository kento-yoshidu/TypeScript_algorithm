export const _81 = (input: Number) => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (i * j === input) {
        return "Yes"
      }
    }
  }
  return "No"
}
