import { onePercent } from "./onePercent"

describe.each([
  [103, 3],
  [1000000000000000000, 3760],
  [1333333333, 1706]
])("OnePercent", (a, expected) => {
  test("main", () => {
    expect(onePercent(a)).toBe(expected)
  })
})
