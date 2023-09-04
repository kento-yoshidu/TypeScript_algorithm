import { theMiddleDay } from "./theMiddleDay"

describe.each([
  [12, [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], [7, 2]],
  [1, [1], [1, 1]],
  [6, [3, 1, 4, 1, 5, 9], [5, 3]]
])("TheMiddleDay", (a, b, expected) => {
  test("main", () => {
    expect(theMiddleDay(a, b)).toStrictEqual(expected)
  })
})
