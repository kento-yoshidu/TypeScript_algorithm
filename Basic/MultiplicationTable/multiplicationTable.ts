const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function multiplicationTable(array: number[]) {
  return array.map((a) => array.map((b) => a * b ))
}

console.table(multiplicationTable(array))
