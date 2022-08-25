export const fullHouse = (input: string) => {
  const [a, b, c, d, e] = input.split(" ").map(Number).sort();

  return (a === c && d === e || a === b && c === e) ? "Yes" : "No"
}
