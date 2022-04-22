import { sumTotal } from "./sumTotal"

describe.each([
  [5, 15],
  [10, 55],
  [100, 5050]
])("SumTotal", (a, expected) => {
  test("main", () => {
    expect(sumTotal(a, 0)).toBe(expected)
  })
})
