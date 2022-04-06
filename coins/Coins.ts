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
