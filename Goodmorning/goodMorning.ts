export const goodMorning = (input: string) => {
  const [A, B, C, D] = input.split(" ").map(Number)

  const takashashi = A*60 + B
  const aoki = C*60 + D

  return takashashi <= aoki ? "Takahashi" : "Aoki"
}
