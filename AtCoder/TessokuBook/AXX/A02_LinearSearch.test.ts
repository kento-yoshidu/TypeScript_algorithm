import { linearSearch } from "./A02_LinearSearch"

describe.each([
  [5, 40, [10, 20, 30, 40, 50], "Yes"],
  [6, 28, [30, 10, 40, 10, 50, 90], "No"]
])("LinearSearch", (a, b, c, expected) => {
  test("main", () => {
    expect(linearSearch(a, b, c)).toBe(expected)
  })
})
