export const perfectString = (input: string) => {
  const isUpperAndLower = /^(?=.*?[A-Z])(?=.*?[a-z])/.test(input)

  const isNotDuplicate = input.length === [...new Set(input)].length

  return isUpperAndLower && isNotDuplicate ? "Yes" : "No"
}
