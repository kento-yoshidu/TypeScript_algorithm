import {
  fourPoints,
  fourPoints2
} from "./fourPoints"

const strA = `-1 -1
-1 2
3 2`

const strB = `-60 -40
-60 -80
-20 -80`

describe.each([
  [strA, "3 -1"],
  [strB, "-20 -40"]
])("fourPoints", (a, expected) => {
  test("first", () => {
    expect(fourPoints(a)).toBe(expected)
  })
  test("second", () => {
    expect(fourPoints2(a)).toBe(expected)
  })
})
