export const multiplication2 = (input: string) => {
  const arr = input.split(" ").map(BigInt)

  if (arr.includes(0n)) {
    return 0
  }

  let total = 1n

  for (let i = 0; i < arr.length; i++) {
    total *= arr[i]

    if (total > 10n ** 18n) {
      return -1
    }
  }

  return Number(total)
}
