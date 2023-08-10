import { _105 } from "./105"

describe.each([
  [104, 0],
  [105, 1],
  [134, 1],
  [135, 2],
  [164, 2],
  [165, 3]
])("105", (a, expected) => {
  test("main", () => {
    expect(_105(a)).toBe(expected)
  })
})
