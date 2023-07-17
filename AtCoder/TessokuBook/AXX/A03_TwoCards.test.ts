import { twoCards } from "./A03_TwoCards"

describe.each([
  [3, 100, [17, 57, 99], [10, 36, 53], "No"],
  [5, 53, [10, 20, 30, 40, 50], [1, 2, 3, 4, 5], "Yes"]
])("TwoCards", (a, b, c, d, expected) => {
  test("main", () => {
    expect(twoCards(a, b, c, d)).toBe(expected)
  })
})
