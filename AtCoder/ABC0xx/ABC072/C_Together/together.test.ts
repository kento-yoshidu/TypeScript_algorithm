import { together } from "./together"

describe.each([
  [7, [3, 1, 4, 1, 5, 9, 2], 4],
  [10, [1, 2, 3, 4, 5, 6, 7, 8, 9], 3],
  [1, [99999], 1]
])("Together", (a, b, expected) => {
  test("main", () => {
    expect(together(a, b)).toBe(expected)
  })
})
