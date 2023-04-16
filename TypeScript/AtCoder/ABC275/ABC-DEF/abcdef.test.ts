import { abcdef } from "./abcdef"

describe.each([
  [[2, 3, 5, 1, 2, 4], 22],
  [[1, 1, 1000000000, 0, 0, 0], 1755647],
  [[1000000000000000000, 1000000000000000000, 1000000000000000000, 1000000000000000000, 1000000000000000000, 1000000000000000000], 0]
])("ABC-DEF", (a, expected) => {
  test("main", () => {
    expect(abcdef(a)).toBe(expected)
  })
})
