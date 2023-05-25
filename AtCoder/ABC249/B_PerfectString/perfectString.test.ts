import { perfectString } from "./perfectString"

describe.each([
  ["AtCoder", "Yes"],
  ["Aa", "Yes"],
  ["atcoder", "No"],
  ["Perfect", "No"]
])("PerfectString", (a, expected) => {
  test("main", () => {
    expect(perfectString(a)).toBe(expected)
  })
})
