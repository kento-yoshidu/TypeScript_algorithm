import { euclideanAlgorithm } from "./euclideanAlgorithm"

describe.each([
  [[10, 5], 5],
  [[36, 18], 18],
  [[18, 36], 18]
])("euclideanAlgorithm", (a, expected) => {
  test("main", () => {
    expect(euclideanAlgorithm(a)).toBe(expected)
  })
})
