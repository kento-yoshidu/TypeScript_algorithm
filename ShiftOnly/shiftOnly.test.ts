import {
  shiftOnly,
  shiftOnly2
} from "./shiftOnly"

describe.each([
  [3, "8 12 40", 2],
  [4, "5 6 8 10", 0],
  [6, "382253568 723152896 37802240 379425024 404894720 471526144", 8]
])("ShiftOnly", (a, b, expected) => {
  test("first", () => {
    expect(shiftOnly(a, b)).toBe(expected)
  })
  test("second", () => {
    expect(shiftOnly2(a, b)).toBe(expected)
  })
})
