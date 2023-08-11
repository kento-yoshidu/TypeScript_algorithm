import { sumOfThreeIntegers } from "./sumOfThreeIntegers"

describe.each([
  [2, 2, 6],
  [5, 15, 1]
])("SumOfThreeIntegers", (a, b, expected) => {
  test("main", () => {
    expect(sumOfThreeIntegers(a, b)).toBe(expected)
  })
})
