import { election } from "./election"

describe.each([
  [5, ["snuke", "snuke", "takahashi", "takahashi", "takahashi"], "takahashi"],
  [5, ["takahashi", "takahashi", "aoki", "takahashi", "snuke"], "takahashi"],
  [1, ["a"], "a"]
])("Elction", (a, b, expected) => {
  test("main", () => {
    expect(election(a, b)).toBe(expected)
  })
})
