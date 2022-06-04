import { lackedNumber } from "./lackedNumber"

describe.each([
  ["023456789", 1],
  ["459230781", 6]
])("lackedNumber", (a, expected) => {
  test("main", () => {
    expect(lackedNumber(a)).toBe(expected)
  })
})
