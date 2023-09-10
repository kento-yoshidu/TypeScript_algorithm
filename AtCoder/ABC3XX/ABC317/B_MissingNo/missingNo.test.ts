import { missingNo } from "./missingNo"

describe.each([
  [3, [2, 3, 5], 4],
  [8, [3, 1, 4, 5, 9, 2, 6, 8], 7],
  [16, [152, 153, 154, 147, 148, 149, 158, 159, 160, 155, 156, 157, 144, 145, 146, 150], 151]
])("MissingNo", (a, b, expected) => {
  test("main", () => {
    expect(missingNo(a, b)).toBe(expected)
  })
})
