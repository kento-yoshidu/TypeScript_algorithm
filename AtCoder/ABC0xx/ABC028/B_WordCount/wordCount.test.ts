import { wordCount } from "./wordCount"

describe.each([
  ["BEAF", [1, 1, 0, 0, 1, 1]],
  ["DECADE", [1, 0, 1, 2, 2, 0]],
  ["ABBCCCDDDDEEEEEFFFFFF", [1, 2, 3, 4, 5, 6]]
])("WordCount", (a, expected) => {
  test("main", () => {
    expect(wordCount(a)).toStrictEqual(expected)
  })
})
