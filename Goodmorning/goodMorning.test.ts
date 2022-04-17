import { goodMorning } from "./goodMorning"

describe.each([
  ["7 0 6 30", "Aoki"],
  ["7 30 7 30", "Takahashi"],
  ["0 0 23 59", "Takahashi"]
])("goodMorning", (a, expected) => {
  test("main", () => {
    expect(goodMorning(a)).toBe(expected)
  })
})
