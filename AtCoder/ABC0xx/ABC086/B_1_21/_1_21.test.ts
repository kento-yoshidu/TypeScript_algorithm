import { _1_21 } from "./_1_21"

describe.each([
  [1, 21, "Yes"],
  [100, 100, "No"],
  [12, 10, "No"]
])("1_21", (a, b, expected) => {
  test("main", () => {
    expect(_1_21(a, b)).toBe(expected)
  })
})
