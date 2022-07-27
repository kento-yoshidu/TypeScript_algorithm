import { intersection } from "./intersection"

describe.each([
  ["0 3 1 5", 2],
  ["0 1 4 5", 0],
  ["0 3 3 7", 0]
])("Intersection", (a, expected) => {
  test("main", () => {
    expect(intersection(a)).toBe(expected)
  })
})
