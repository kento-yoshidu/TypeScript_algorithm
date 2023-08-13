import { powerSocket } from "./powerSocket"

describe.each([
  [4, 10, 3],
  [8, 9, 2],
  [8, 8, 1]
])("PowerSocket", (a, b, expected) => {
  test("main", () => {
    expect(powerSocket(a, b)).toBe(expected)
  })
})
