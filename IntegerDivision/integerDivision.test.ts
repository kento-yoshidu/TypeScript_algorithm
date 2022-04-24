import { integerDivision } from "./integerDivision"

describe.each([
  ["47", 4],
  ["-24", -3],
  ["50", 5],
  ["-30", -3],
  ["98765432198765", 9876543219876]
])("IntegerDivision", (a, expected) => {
  test("main", () => {
    expect(integerDivision(a)).toBe(expected)
  })
})
