export const coins = (coin1: number, coin2: number, coin3: number, amount: number) => {
  let count = 0;

  for (let i = 0; i <= coin1; i++) {
    for (let j = 0; j <= coin2; j++) {
      for (let k = 0; k <= coin3; k++) {
        if ((i*500 + j*100 + k*50) === amount) {
          count++
        }
      }
    }
  }

  return count
}
