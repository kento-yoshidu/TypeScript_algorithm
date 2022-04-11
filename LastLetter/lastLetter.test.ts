import { lastLetter } from "./lastLetter"

const strA = `5
abcde`

const strB = `1
a`

describe.each([
  [strA, "e"],
  [strB, "a"]
])("LastLetter", (a, expected) => {
  test("main", () => {
    expect(lastLetter(a)).toBe(expected)
  })
})