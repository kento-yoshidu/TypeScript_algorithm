import { supermarket1 } from "./B03_Supermarket1"

describe.each([
  [5, [100, 250, 350, 400, 600], "Yes"],
  [10, [50, 150, 250, 350, 450, 550, 650, 750, 850, 950], "No"]
])("Supermarket1", (a, b, expected) => {
  test("main", () => {
    expect(supermarket1(a, b)).toBe(expected)
  })
})
