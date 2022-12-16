import { inversePrefixSum } from "./inversePrefixSum"

describe.each([
  ["3 4 8", "3 1 4"],
  ["314159265 358979323 846264338 -327950288 419716939 -937510582 97494459 230781640 628620899 -862803482", "314159265 44820058 487285015 -1174214626 747667227 -1357227521 1035005041 133287181 397839259 -1491424381"]
])("InversePrefixSum", (a, expected) => {
  test("main", () => {
    expect(inversePrefixSum(a)).toBe(expected)
  })
})
