import { _81 } from "./_81"

describe.each([
  [81, "Yes"],
  [10, "Yes"],
  [11, "No"]
])("81", (a, expected) => {
  test("main", () => {
    expect(_81(a)).toBe(expected)
  })
})
