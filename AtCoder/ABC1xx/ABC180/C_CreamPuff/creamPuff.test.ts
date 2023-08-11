import { creamPuff } from "./creamPuff"

describe.each([
  [6, [1, 2, 3, 6]],
  [720, [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 30, 36, 40, 45, 48, 60, 72, 80, 90, 120, 144, 180, 240, 360, 720]],
  [1000000007, [1, 1000000007]]
])("CreamPuff", (a, expected) => {
  test("main", () => {
    expect(creamPuff(a)).toStrictEqual(expected)
  })
})
