export const digitMachine = (input: string) => {
  const a = input.split(" ").map(Number)

  let num = 0

  for (let i = 0; i < 3; i++) {
    num = a[num]
  }

  return num
}
