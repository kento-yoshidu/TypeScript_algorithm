export const coins = (coin1: number, coin2: number, coin3: number, amount: number) => {
  let count = 0;

  [...Array(coin1 + 1)].map((_, i) => {
    [...Array(coin2 + 2)].map((_, j) => {
      [...Array(coin3 + 1)].map((_, k) => {
        (i*500 + j*100 + k*50) === amount && count++
      })
    })
  })

  return count
}

export const coins2 = (a: number, b: number, c: number, x: number) => {
  let count = 0

  for (let i = 0; i <= a; i++) {
    if (i*500 > x) {
      break
    }

    for (let j = 0; j <= b; j++) {
      if ((i*500 + j*100) > x) {
        break
      }

      if ((i*500 + j+100) === x) {
        count++
        continue
      }

      const num = x - (i*500 + j*100)

      if (num % 50 === 0 && num / 50 <= c) {
        count++
      }
    }
  }

  return count
}
