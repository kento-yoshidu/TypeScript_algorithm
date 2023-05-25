import { servalVsMonster } from "./servalVsMonster"

describe.each([
  ["10 4", 3],
  ["1 10000", 1],
  ["10000 1", 10000]
])("ServalVsMonster", (a, expected) => {
  test("main", () => {
    expect(servalVsMonster(a)).toBe(expected)
  })
})
