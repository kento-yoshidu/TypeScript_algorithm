import { substring } from "./substring"

describe.each([
  ["cabacc", "abc", 1],
  ["codeforces", "atcoder", 6]
])("Substring", (a, b, expected) => {
  test("main", () => {
    expect(substring(a, b)).toBe(expected)
  })
})
