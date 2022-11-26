import { _200th } from "./_200th"

describe.each([
  ["2021 4", 50531],
  ["40000 2", 1],
  ["8691 20", 84875488281]
])("_200th", (a, expected) => {
  test("main", () => {
    expect(_200th(a)).toBe(expected)
  })
})
