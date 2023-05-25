import { fizzBuzzSum } from "./fizzBuzzSum"

describe.each([
  [15, 60],
  [1000000, 266666333332]
])("FizzBuzzSum", (a, expected) => {
  test("main", () => {
    expect(fizzBuzzSum(a)).toBe(expected)
  })
})
