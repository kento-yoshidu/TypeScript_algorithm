import { middleLetter } from "./middleLetter"

describe.each([
  ["atcoder", "o"],
  ["a", "a"]
])("MiddleLetter", (a, expected) => {
  test("main", () => {
    expect(middleLetter(a)).toBe(expected)
  })
})
