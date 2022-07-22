import { aUniqueLetter } from "./aUniqueLetter"

describe.each([
  ["abc", "b"],
  ["pop", "o"],
  ["xxx", -1]
])("AUniqueLetter", (a, expected) => {
  test("main", () => {
    expect(aUniqueLetter(a)).toBe(expected)
  })
})
