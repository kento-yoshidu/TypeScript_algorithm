import { tcdr } from "./a_tcdr"

describe.each([
  ["atcoder", "tcdr"],
  ["xyz", "xyz"],
  ["aaaabbbbcccc", "bbbbcccc"]
])("tcdr", (a, expected) => {
  test("main", () => {
    expect(tcdr(a)).toBe(expected)
  })
})
