import { extraCharacter } from "./extraCharacter"

describe.each([
  ["atcoder atcorder", 5],
  ["million milllion", 5],
  ["vvwvw vvvwvw", 3],
  ["abc abcd", 4]
])("ExtraCharacter", (a, expected) => {
  test("main", () => {
    expect(extraCharacter(a)).toBe(expected)
  })
})
