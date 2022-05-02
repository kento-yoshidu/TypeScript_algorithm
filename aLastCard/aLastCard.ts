export const aLastCard = (input: string) => {
  const [N, K, A] = input.split(" ").map(Number)

  const result = (A + K - 1) % N

  return result === 0 ? N : result
}

aLastCard("3 3 2") //=> 1gg
aLastCard("3 3 3") //=> 2
aLastCard("3 3 1") //=> 3
aLastCard("1 100 1") //=> 1
aLastCard("3 14 2") //=> 3


