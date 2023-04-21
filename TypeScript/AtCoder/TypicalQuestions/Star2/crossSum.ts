/*
export const crossSum = (h: number, w: number, A: string) => {
  const arr = A.split("\n")
  const arr2 = arr.map((a) => a.split(" ").map(Number))

  console.log(arr2)
  let ans: number[] = []

  for (let row = 0; row < w; row++) {
    let row_sum = arr2[row].reduce((a, b) => a + b)

    for (let column = 0; column < w; column++) {
    }

    console.log("===")
  }
}


const data = `1 2 3
4 5 6
7 8 9`

crossSum(3, 3, data)
*/

export const test = () => {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const ans: any = []

  for (let row = 0; row < arr.length; row++) {
    let row_total = arr[row].reduce((a, b) => a + b)

    for (let column = 0; column < arr[row].length; column++) {
      let column_total = 0
      column_total += arr[column][row]
      console.log(column_total)
    }
  }

  console.log(ans)
}
