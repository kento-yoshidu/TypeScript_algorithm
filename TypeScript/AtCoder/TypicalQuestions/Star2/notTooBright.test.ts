import { notTooBright } from "./notTooBright"

describe.each([
  [2, 3, 2],
  [3, 4, 4],
  [3, 6, 6]
])("NotTooBright", (h, w, expected) => {
  test("main", () => {
    expect(notTooBright(h, w)).toBe(expected)
  })
})
