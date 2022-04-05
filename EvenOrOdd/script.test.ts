import { evenOrOdd } from "./script"

describe.each([
  [3, 4, "even"],
  [3, 3, "odd"]
])("evenOrOdd", (a, b, expected) => {
  test('main', () => {
    expect(evenOrOdd(a, b)).toBe(expected)
  }) 
})
