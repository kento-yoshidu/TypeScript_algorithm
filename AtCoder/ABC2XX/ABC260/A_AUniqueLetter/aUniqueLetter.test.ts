import { aUniqueLetter /* , aUniqueLetter2 */ } from "./aUniqueLetter"

describe.each([
  ["abc", "b"],
  ["pop", "o"],
  ["xxx", -1]
])("AUniqueLetter", (a, expected) => {
  test("first", () => {
    expect(aUniqueLetter(a)).toBe(expected)
  })
  /*
  test("second", () => {
    expect(aUniqueLetter2(a)).toBe(expected)
  })
  */
})
