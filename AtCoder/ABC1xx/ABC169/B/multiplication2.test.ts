import { multiplication2 } from "./multiplication2"

describe.each([
  ["1000000000 1000000000", 1000000000000000000],
  ["101 9901 999999000001", -1],
  ["4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 3 8 4 6 2 6 4 3 3 8 3 2 7 9 5 0", 0]
])("Multiplication2", (a, expected) => {
  test("main", () => {
    expect(multiplication2(a)).toBe(expected)
  })
})
