import { savings } from "./savings"

describe.each([
  [12, 5],
  [100128, 447]
])("Savings", (a, expected) => {
  test("main", () => {
    expect(savings(a)).toBe(expected)
  })
})
