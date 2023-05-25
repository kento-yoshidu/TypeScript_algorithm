import { multiplication } from "./multiplication"

describe.each([
  ["2 5", 10]
])("Multiplication", (a, expected) => {
  test("main", () => {
    expect(multiplication(a)).toBe(expected)
  })
})
