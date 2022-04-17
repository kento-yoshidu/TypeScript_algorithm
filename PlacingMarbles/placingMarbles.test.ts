import { placingMarbles } from "./placingMarbles"

describe.each([
  ["001", 1],
  ["101", 2],
  ["111", 3],
  ["000", 0]
])("PlacingMarbles", (a, expected) => {
  test("main", () => {
    expect(placingMarbles(a)).toBe(expected)
  })
})
