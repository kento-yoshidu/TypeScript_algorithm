import { walkOnMultiplicationTable } from "./walkOnMultiplicationTable"

describe.each([
  [10, 5],
  [50, 13],
  [10000000019, 10000000018]
])("WalkOnMultiplicationTable", (a, expected) => {
  test("main", () => {
    expect(walkOnMultiplicationTable(a)).toBe(expected)
  })
})
