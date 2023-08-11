import { battle } from "./battle"

describe.each([
  ["10 9 10 10", "No"],
  ["46 4 40 5", "Yes"]
])("Battle", (a, expected) => {
  test("main", () => {
    expect(battle(a)).toBe(expected)
  }),
  test("2nd", () => {
    expect(battle(a)).toBe(expected)
  })
})
