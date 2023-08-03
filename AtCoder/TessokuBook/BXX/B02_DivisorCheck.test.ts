import { divisorCheck } from "./B02_DivisorCheck"

describe.each([
  [5, 20, "Yes"],
  [6, 9, "No"]
])("DivisorCheck", (a, b, expected) => {
  test("main", () => {
    expect(divisorCheck(a, b)).toBe(expected)
  })
})
