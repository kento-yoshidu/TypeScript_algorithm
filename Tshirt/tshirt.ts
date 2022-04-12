export const tshirt = (input: string): number => {
  const [a, b, c, rank] = input.split(" ").map(Number)

  if (rank <= a) {
    return 1.0
  } else if (rank <= b) {
    return c / (b - a)
  } else {
    return 0.0
  }
}

// 30 500 20 103
