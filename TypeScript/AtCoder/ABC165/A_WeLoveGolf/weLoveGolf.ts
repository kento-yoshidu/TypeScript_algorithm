export const weLoveGolf = (input: string) => {
  const [K, A, B] = input.split(" ").map(Number)

  for (let a = A; a <= B; a++) {
    if (a % K === 0) {
      return "OK"
    }
  }

  return "NG"
}
