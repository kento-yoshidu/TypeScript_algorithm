import { pawnOnAGrid } from "./pawnOnAGrid"

const case1 = `
#.#.#
....#
..##.
####.
..#..
#####`

const case2 = `
#....
.....
.##..`

const case3 = `
..........`

describe.each([
  [case1, 16],
  [case2, 3],
  [case3, 0]
])("PawnOnAGrid", (a, expected) => {
  test("main", () => {
    expect(pawnOnAGrid(a)).toBe(expected)
  })
})
