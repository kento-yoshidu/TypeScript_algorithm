import { jogging } from "./jogging"

describe.each([
  ["4 3 3 6 2 5 10", "Takahashi"],
  ["3 1 4 1 5 9 2", "Aoki"],
  ["1 1 1 1 1 1 1", "Draw"]
])("Jogging", (a, expected) => {
  test("main", () => {
    expect(jogging(a)).toBe(expected)
  })
})
