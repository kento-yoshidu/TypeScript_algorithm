export const sequenceOfStrings = (input: string) => {
  const arr = input.split("\n")

  for (let i = arr.length - 1; i > 0; i--) {
    console.log(arr[i])
  }
}

const a = `3
Takahashi
Aoki
Snuke`

sequenceOfStrings(a)
