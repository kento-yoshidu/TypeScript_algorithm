import { horizon } from "./horizon"

describe.each([
  ["333", 65287.907678222],
  ["634", 90086.635834623]
])("horizon", (a, expected) => {
  test("main", () => {
    expect(horizon(a)).toBeCloseTo(expected)
  })
})
