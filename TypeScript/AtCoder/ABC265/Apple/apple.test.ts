import { apple } from "./apple"

describe.each([
  ["10 25 10", 85],
  ["10 40 10", 100],
  ["100 100 2", 200],
  ["100 100 100", 3400]
])("Apple", (a, expected) => {
  test("main", () => {
    expect(apple(a)).toBe(expected)
  })
})
