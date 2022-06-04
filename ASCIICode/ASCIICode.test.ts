import { asciiCode } from "./ASCIICode"

describe.each([
  ["97", "a"],
  ["122", "z"]
])("ASCIICode", (a, expected) => {
  test("main", () => {
    expect(asciiCode(a)).toBe(expected)
  })
})
