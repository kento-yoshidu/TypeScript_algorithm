import { bestBody } from "./bestBody"

describe.each([
  [5, 60, 70, [50, 10, 10, 10, 10], 2],
  [5, 50, 100, [120, -10, -20, -30, 70], 2]
])("BestBody", (a, b, c, d, expected) => {
  test("main", () => {
    expect(bestBody(a, b, c, d)).toBe(expected)
  })
})
