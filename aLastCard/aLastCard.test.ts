import { aLastCard } from "./aLastCard"

describe.each([
  ["3 3 2", 1],
  ["3 3 3", 2],
  ["3 3 1", 3],
  ["1 100 1", 1],
  ["3 14 2", 3]
])("ALastCard", (a, expected) => {
  test("main", () => {
    expect(aLastCard(a)).toBe(expected)
  })
})
