import { fullHouse } from "./fullHouse"

describe.each([
  ["1 2 1 2 1", "Yes"],
  ["2 2 1 1 1", "Yes"],
  ["10 10 12 13 11", "No"],
  ["12 12 11 1 2", "No"]
])("FullHouse", (a, expected) => {
  test("main", () => {
    expect(fullHouse(a)).toBe(expected)
  })
})
