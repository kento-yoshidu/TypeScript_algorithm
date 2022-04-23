import { notOverflow } from "./notOverflow"

describe.each([
  ["483597848400000", "No"]
])("NotOverflow", (a, expected) => {
  test("main", () => {
    expect(notOverflow(a)).toBe(expected)
  })
})
