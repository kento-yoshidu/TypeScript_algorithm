import { atcoderSubstr } from "./atcoderSubstr"

describe.each([
  ["3 6", "code"],
  ["4 4", "o"],
  ["1 7", "atcoder"]
])("AtcoderSubstr()", (a, expected) => {
  test("main", () => {
    expect(atcoderSubstr(a)).toBe(expected)
  })
})
