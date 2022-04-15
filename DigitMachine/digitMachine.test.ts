import { digitMachine } from "./digitMachine"

describe.each([
  ["9 0 1 2 3 4 5 6 7 8", 7],
  ["4 8 8 8 0 8 8 8 8 8", 4],
  ["0 0 0 0 0 0 0 0 0 0", 0]
])("digitMachine", (a, expected) => {
  test("main", () => {
    expect(digitMachine(a)).toBe(expected)
  })
})
