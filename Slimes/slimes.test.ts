import { slimes } from "./slimes"

describe.each([
  ["1 4 2", 2],
  ["7 7 10", 0],
  ["31 415926 5", 6]
])("Slimes", (a, expected) => {
  test("main", () => {
    expect(slimes(a)).toBe(expected)
  })
})
