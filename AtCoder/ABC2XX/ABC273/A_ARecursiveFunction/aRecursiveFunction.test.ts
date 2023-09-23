import { aRecursiveFunction } from "./aRecursiveFunction"

describe.each([
  [2, 2],
  [3, 6],
  [0, 1],
  [10, 3628800]
])("ARecursiveFunction", (a, expected) => {
  test("main", () => {
    expect(aRecursiveFunction(a)).toBe(expected)
  })
})
