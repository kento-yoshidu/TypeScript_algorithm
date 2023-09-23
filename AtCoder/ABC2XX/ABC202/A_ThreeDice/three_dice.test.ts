import { threeDice } from "./three_dice"

describe.each([
  [1, 4, 3, 13],
  [5, 6, 4, 6]
])("ThreeDice", (a, b, c, expected) => {
  test("main", () => {
    expect(threeDice(a, b, c)).toBe(expected)
  })
})
