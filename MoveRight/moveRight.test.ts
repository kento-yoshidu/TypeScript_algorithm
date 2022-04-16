import { moveRight } from "./moveRight"

describe.each([
  ["1011", "0101"]
])("moveRight", (a, expected) => {
  test("main", () => {
    expect(moveRight(a)).toBe(expected)
  })
})
