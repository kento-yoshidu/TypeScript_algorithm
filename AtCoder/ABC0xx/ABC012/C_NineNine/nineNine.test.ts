import { nineNine } from "./nineNine"

describe.each([
  [2013, ["2 * 6", "3 * 4", "4 * 3", "6 * 2"]],
  [2024, ["1 * 1"]]
])("NineNine", (a, expected) => {
  test("main", () => {
    expect(nineNine(a)).toStrictEqual(expected)
  })
})
