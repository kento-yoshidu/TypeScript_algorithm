import { weLoveGolf } from "./weLoveGolf"

describe.each([
  ["7 500 600", "OK"],
  ["4 5 7", "NG"],
  ["1 11 11", "OK"]
])("WeLoveGolf", (a, expected) => {
  test("main", () => {
    expect(weLoveGolf(a)).toBe(expected)
  })
})
