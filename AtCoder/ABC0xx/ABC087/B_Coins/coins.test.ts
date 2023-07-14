import { coins, coins2 } from "./coins"

describe.each([
  [1, 0, 0, 500, 1],
  [1, 5, 0, 500, 2],
  [1, 5, 10, 500, 7]
])("coins", (a, b, c, x, expected) => {
  test("first", () => {
    expect(coins(a, b, c, x)).toBe(expected)
  })
  test("second", () => {
    expect(coins2(a, b, c, x)).toBe(expected)
  })
})
