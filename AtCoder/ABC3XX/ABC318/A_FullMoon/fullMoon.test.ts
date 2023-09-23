import { fullMoon } from "./fullMoon"

describe.each([
  [13, 3, 5, 3],
  [5, 6, 6, 0],
  [200000, 314, 318, 628]
])("FullMoon", (a, b, c, expected) => {
  test("main", () => {
    expect(fullMoon(a, b, c)).toBe(expected)
  })
})
