import { findTakahashi } from "./findTakahashi"

describe.each([
  [[50, 80, 70], 2],
  [[1000000000], 1],
  [[22, 75, 26, 45, 72, 81, 47, 29, 97], 9]
])("FindTakahashi", (a, expected) => {
  test("main", () => {
    expect(findTakahashi(a)).toBe(expected)
  })
})
