import { integerSum } from "./integerSum"

describe.each([
  [3, [2, 7, 2], 11],
  [1, [3], 3]
])("IntegerSum", (a, b, expected) => {
  test("main", () => {
    expect(integerSum(a, b)).toBe(expected)
  })
})
