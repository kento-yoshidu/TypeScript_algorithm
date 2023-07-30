import { aPlusBProblem } from "./B01_APlusBProblem"

describe.each([
  [1, 2, 3],
  [77, 23, 100],
  [100, 100, 200]
])("APlusBProblem", (a, b, expected) => {
  test("main", () => {
    expect(aPlusBProblem(a, b)).toBe(expected)
  })
})
