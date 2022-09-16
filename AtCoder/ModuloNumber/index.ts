const main = (input: number) => {
  const mod = BigInt(input) % 998244353n

  return mod < 0 ? Number(mod + 998244353n) : Number(mod)
}

console.log(main(-9982443534))
