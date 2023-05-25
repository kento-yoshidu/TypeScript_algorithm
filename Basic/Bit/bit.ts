function main(n: number) {
  for (let bit = 0; bit < (1 << n); bit++) {
    console.log(1 << n)
    const row = []
    for (let i = 0; i < n; i++) {
      if (bit & (1 << i)) {
        row.push(i)
      }
    }
    console.log(row)
  }
}

main(4)
