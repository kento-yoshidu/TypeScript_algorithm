import { potions } from "./potions"

describe.each([
  [3, 100, 200, [50, 200, 999], 2],
  [2, 10, 21, [10, 999], 2],
  [10, 500, 999, [38, 420, 490, 585, 613, 614, 760, 926, 945, 999], 4]
])("Potions", (a, b, c, d, expected) => {
  test("main", () => {
    expect(potions(a, b, c, d)).toBe(expected)
  })
})
