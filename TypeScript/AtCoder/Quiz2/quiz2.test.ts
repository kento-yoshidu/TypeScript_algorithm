import { quiz2 } from "./quiz2"

describe.each([
  ["56", 14]
])("Quiz2", (a, expected) => {
  test("main", () => {
    expect(quiz2(a)).toBe(expected)
  })
})
