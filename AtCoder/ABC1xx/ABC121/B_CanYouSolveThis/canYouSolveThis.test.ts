import { canYouSolveThis } from "./canYouSolveThis"

describe.each([
  [2, 3, -10, [1, 2, 3], [[3, 2, 1], [1, 2, 2]], 1],
  [5, 2, -4, [-2, 5], [[100, 41], [100, 40], [-3, 0], [-6, -2], [18, -13]], 2],
  [3, 3, 0, [100, -100, 0], [[0, 100, 100], [100, 100, 100], [-100, 100, 100]], 0]
])("CanYouSolveThis", (a, b, c, d, e, expected) => {
  test("main", () => {
    expect(canYouSolveThis(a, b, c, d, e)).toBe(expected)
  })
})
