import { alternately } from "./alternately"

describe.each([
  ["MFMFMF", "Yes"],
  ["FMFMMFMFM", "No"],
  ["F", "Yes"]
])("Alternately", (a, expected) => {
  test("main", () => {
    expect(alternately(a)).toBe(expected)
  })
})
