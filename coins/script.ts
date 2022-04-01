function coins (coin1: number, coin2: number, coin3: number, amount: number) {
  console.time("coin")
  let count = 0;
  let roopCount = 0

  for (let i = 0; i <= coin1; i++) {
    for (let j = 0; j <= coin2; j++) {
      for (let k = 0; k <= coin3; k++) {
        roopCount++
        if ((i*500 + j*100 + k*50) === amount) {
          count++
        }
      }
    }
  }

  console.log(count)
  console.log(roopCount)
  console.timeEnd("coin")
}

coins(1, 5, 10, 500)

function coins2 (coin1: number, coin2: number, coin3: number, amount: number) {
  console.time("coin2")
  let count = 0
  let roopCount = 0;

  [...Array(coin1 + 1)].map((_, i) => {
    [...Array(coin2 + 1)].map((_, j) => {
      [...Array(coin3 + 1)].map((_, k) => {
        roopCount++
        (i*500 + j*100 + k*50) === amount && count++
      })
    })
  })

  console.log(count)
  console.log(roopCount)
  console.timeEnd("coin2")
}

coins2(1, 5, 10, 500)
