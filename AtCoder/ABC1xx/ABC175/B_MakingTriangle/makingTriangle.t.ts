import { makingTriangle } from "./makingTriangle"

describe.each([
  [5, [4, 4, 9, 7, 5], 5],
  [6, [4, 5, 4, 3, 3, 5], 8],
  [10, [9, 4, 6, 1, 9, 6, 10, 6, 6, 8], 39],
  [2, [1, 1], 0]
])("MakingTriangle", (a, b, expected) => {
  test("main", () => {
    expect(makingTriangle(a, b)).toBe(expected)
  })
})
