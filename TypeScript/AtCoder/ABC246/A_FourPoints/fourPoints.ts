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

/** ****************************** **/

function func2(arr: Number[]) {
  return arr.filter((x) => arr.indexOf(x) === arr.lastIndexOf(x))[0]
}

export const fourPoints2 = (input: string) => {
  const array: Number[][] = input.split("\n").map((a) => a.split(" ").map(Number))

  const x: Number[] = []
  const y: Number[] = []

  array.map((arr: Number[]) => {
    x.push(arr[0])
    y.push(arr[1])
  })

  const X = func2(x)
  const Y = func2(y)

  return `${X} ${Y}`
}
