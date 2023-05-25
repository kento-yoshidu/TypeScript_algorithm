export const extraCharacter = (input: string) => {
  const [S, T] = input.split(" ")

  for (let i = 0; i < T.length; i++) {
    if (S[i] !== T[i]) {
      return i + 1
    }
  }
}
