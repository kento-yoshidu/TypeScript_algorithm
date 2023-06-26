import { product } from "./product"

describe.each([
  ["3 4", "Even"],
  ["1 21", "Odd"]
])("Product", (a, expected) => {
  test("main", () => {
    expect(product(a)).toBe(expected)
  })
})
