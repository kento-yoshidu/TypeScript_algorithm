import { rightMost } from "./a_rightMost"

describe.each([
  ["abcdaxayz", 7],
  ["bcbbbz", -1],
  ["aaaaa", 5]
])("RightMost", (a, expected) => {
  test("main", () => {
    expect(rightMost(a)).toBe(expected)
  })
})
