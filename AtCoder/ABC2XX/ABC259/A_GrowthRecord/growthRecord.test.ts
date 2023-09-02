import { growthRecord } from "./growthRecord"

describe.each([
  [38, 20, 17, 168, 3, 168],
  [1, 0, 1, 3, 2, 1],
  [100, 10, 100, 180, 1, 90]
])("GrowthRecord", (a, b, c, d, e, expected) => {
  test("main", () => {
    expect(growthRecord(a, b, c, d, e)).toBe(expected)
  })
})
