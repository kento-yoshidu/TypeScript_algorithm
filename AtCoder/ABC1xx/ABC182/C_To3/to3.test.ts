import { to3 } from "./to3"

describe.each([
  ["35", 1],
  ["369", 0],
  ["6227384", 1],
  ["11", -1]
])("To3", (a, expected) => {
  test("main", () => {
    expect(to3(a)).toBe(expected)
  })
})
