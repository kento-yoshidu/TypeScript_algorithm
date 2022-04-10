function func(a: string, b: string, c: string) {
  if (a === b) {
    return c
  } else if (b === c) {
    return a
  } else {
    return b
  }
}

export const fourPoints = (input: string) => {
  const i = input.split("\n")
  
  const a = i[0].split(" ")
  const b = i[1].split(" ")
  const c = i[2].split(" ")

  const x = func(a[0], b[0], c[0])
  const y = func(a[1], b[1], c[1])

  return `${x} ${y}`
}
