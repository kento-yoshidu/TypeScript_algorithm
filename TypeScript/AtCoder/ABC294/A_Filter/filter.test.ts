import { filter } from "./filter"

describe.each([
  ["1 2 3 5 6", "2 6"],
  ["2 2 2 3 3", "2 2 2"],
  ["22 3 17 8 30 15 12 14 11 17", "22 8 30 12 14"]
])("Filter", (a, expected) => {
  test("main", () => {
    expect(filter(a)).toBe(expected)
  })
})
