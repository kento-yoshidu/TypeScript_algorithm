import { qqSolver } from "./qqSolver"

describe.each([
  ["3x7", 21],
  ["9x9", 81],
  ["1x1", 1]
])("QQSolver", (a, expected) => {
  test("main", () => {
    expect(qqSolver(a)).toBe(expected)
  })
})
