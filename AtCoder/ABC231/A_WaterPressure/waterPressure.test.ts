import { waterPressure } from "./waterPressure"

describe.each([
  ["1000", 10],
  ["50", 0.5],
  ["3141", 31.41]
])("WaterPressure", (a, expected) => {
  test("main", () => {
    expect(waterPressure(a)).toBe(expected)
  })
})
