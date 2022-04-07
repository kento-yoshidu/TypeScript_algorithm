import { coins } from "./coins"

describe.each([
  [1, 0, 0, 500, 1],
  [1, 5, 0, 500, 2],
  [1, 5, 10, 500, 7]
])("coins", (a, b, c, x, expected) => {
  test("main", () => {
    expect(coins(a, b, c, x)).toBe(expected)
  })
})
