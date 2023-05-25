import { doubleClick } from "./doubleClick"

describe.each([
  [4, 500, [300, 900, 1300, 1700], 1300],
  [4, 500, [100, 600, 1100, 1600], 600],
  [4, 500, [100, 700, 1400, 2100], -1]
])("DoubleClick", (n, d, t, expected) => {
  test("main", () => {
    expect(doubleClick(n, d, t)).toBe(expected)
  })
})
