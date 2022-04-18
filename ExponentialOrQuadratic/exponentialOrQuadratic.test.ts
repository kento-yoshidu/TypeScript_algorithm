import { exponentialOrQuadratic } from "./exponentialOrQuadratic"

describe.each([
  ["5", "Yes"],
  ["2", "No"],
  ["623947744", "Yes"]
])("exponentialOrQuadratic", (a, expected) => {
  test("main", () => {
    expect(exponentialOrQuadratic(a)).toBe(expected)
  })
})
