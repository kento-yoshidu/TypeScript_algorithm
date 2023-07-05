export const countABC = (input: string) => {
  let count = 0;

  const [N, S] = input.split("\n")
  const n = Number(N)

  if (!S.includes("ABC")) return 0
  
  for (let i = 0; i < n - 2; i++) {
    if (S.slice(i, i+3) === "ABC") {
      count++
    }
  }

  return count
}
