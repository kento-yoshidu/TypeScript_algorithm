export const _1_21 = (a: number, b: number) => {
  const num = String(a) + String(b)

  for (let i = 1; i <= Math.sqrt(Number(num)); i++) {
    if (i * i === Number(num)) {
      return "Yes"
    }
  }

  return "No"
}

