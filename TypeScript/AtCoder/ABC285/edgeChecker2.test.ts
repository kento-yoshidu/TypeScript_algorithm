import { edgeChecker2 } from "./edgeChecker2";

describe.each([
  [1, 2, "Yes"],
  [2, 8, "No"],
  [14, 15, "No"]
])("EdgeChecker2", (a, b, expected) => {
  test("main", () => {
    expect(edgeChecker2(a, b)).toBe(expected)
  })
})
