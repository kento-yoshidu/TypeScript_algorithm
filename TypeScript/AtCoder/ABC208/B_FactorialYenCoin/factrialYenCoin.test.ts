import { factorialYenCoin } from "./factrialYenCoin"

describe.each([
  [9, 3],
  [119, 10],
  [10_000_000, 24]
])("FactorialYenCoin", (a, expected) => {
  test("main", () => {
    expect(factorialYenCoin(a)).toBe(expected)
  })
})
