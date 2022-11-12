import chalk from "chalk";
import { copyFileSync } from "fs"

const input = `##.......
##.......
.........
.......#.
.....#...
........#
......#..
.........
.........
`

const countingSquares = (input: string) => {
  const arr = input.split("\n")

  let count = 0;

  for (let ar = 0; ar <= 9; ar++) {
    for (let ac = 0; ac <= 9; ac++) {
      if (arr[ar].charAt(ac) !== "#") continue


      for (let br = ar; br <= 9; br++) {
        for (let bc = ac; bc <= 9; bc++) {
          if (ar === br || ac === bc) continue

          if (arr[br].charAt(bc) !== "#") continue

          if (arr[br].charAt(bc) === "#") {
            console.log("ar is", ar, "ac is", ac, "\n")
            console.log("br is", br, "bc is", bc, "\n")
            console.log("======================\n")
            count++
            continue
          }
        }
      }
    }
  }

  console.log(count)
}

countingSquares(input)