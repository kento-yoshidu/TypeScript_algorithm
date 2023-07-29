import { theFirstBook } from "./A01_TheFirstProblem"

describe.each([
  [2, 4],
  [8, 64],
  [100, 10000]
])("TheFirstProblem", (a, expected) => {
  test("main", () => {
    expect(theFirstBook(a)).toBe(expected)
  })
})
