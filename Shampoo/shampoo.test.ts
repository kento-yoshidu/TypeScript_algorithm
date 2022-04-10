import { shampoo } from "./shampoo"

describe.each([
  ["25 10 11 12", "T"],
  ["30 10 10 10", "F"],
  ["100000 1 1 1", "M"]
])("shampoo", (a, expected) => {
  test("main", () => {
    expect(shampoo(a)).toBe(expected)
  })
})

