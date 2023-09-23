import { fourDigits } from "./fourDigits"

describe.each([
  [321, "0321"],
  [7777, "7777"],
  [1, "0001"]]
)("FourDigits", (a, expected) => {
  test("main", () => {
    expect(fourDigits(a)).toBe(expected)
  })
})
