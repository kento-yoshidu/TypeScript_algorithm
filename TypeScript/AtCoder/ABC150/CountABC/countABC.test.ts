import { countABC } from "./countABC"

const a = `10
ZABCDBABCQ`

const b = `19
THREEONEFOURONEFIVE`

const c = `33
ABCCABCBABCCABACBCBBABCBCBCBCABCB`

describe.each([
  [a, 2],
  [b, 0],
  [c, 5]
])("CountABC", (a, expected) => {
  test("main", () => {
    expect(countABC(a)).toBe(expected)
  })
})
