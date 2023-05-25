export const _200th = (input: string) => {
  let [N, K] = input.split(" ").map(Number)

  for (let i = 1; i <= K; i++) {
    if (N % 200 === 0) {
      N /= 200
    } else {
      N = Number(String(N + "200"))
    }
  }

  return N
}
