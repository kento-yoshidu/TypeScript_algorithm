const func = (seconds: number, speed: number, rest: number, X: number) => {
  let time = 0
  let distance = 0

  while (true) {
    // 1秒ごとに進んだ距離(b)とtimeを足していく
    for (let i = 0; i < seconds; i++) {
      distance += speed
      time++
      if (time === X) {
        return distance
      }
    }

    // 1秒ごとにtimeを足していく
    for (let j = 0; j < rest; j++) {
      time++
      if (time === X) {
        return distance
      }
    }
  }
}

export const jogging = (input: string) => {
  const [tSeconds, tSpeed, tRest, aSeconds, aSpeed, aRest, X] = input.split(" ").map(Number)

  const takahashi = func(tSeconds, tSpeed, tRest, X)
  const aoki = func(aSeconds, aSpeed, aRest, X)

  if (takahashi > aoki) {
    return "Takahashi"
  } else if (takahashi < aoki) {
    return "Aoki"
  } else {
    return "Draw"
  }
}
