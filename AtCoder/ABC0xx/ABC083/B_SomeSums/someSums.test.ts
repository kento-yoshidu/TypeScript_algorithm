import { someSums } from "./someSums"

describe.each([
  ["20 2 5", 84],
  ["10 1 2", 13],
  ["100 4 16", 4554]
])("SomeSums", (a, expected) => {
  test("main", () => {
    expect(someSums(a)).toBe(expected)
  })
})
