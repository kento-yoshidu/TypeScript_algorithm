import { edgeChecker } from "./edgeChecker"

describe.each([
  ["2 3", "Yes"],
  ["3 5", "No"],
  ["1 10", "Yes"]
])("EdgeChecker", (a, expected) => {
  test("main", () => {
    expect(edgeChecker(a)).toBe(expected)
  })
})
