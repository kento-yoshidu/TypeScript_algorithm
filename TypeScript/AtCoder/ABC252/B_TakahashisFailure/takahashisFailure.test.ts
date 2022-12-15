import { takahashisFailure } from "./takahashisFailure"

const a = `5 3
6 8 10 7 10
2 3 4`

const b = `5 2
100 100 100 1 1
5 4`

const c = `2 1
100 1
2`

describe.each([
  [a, "Yes"],
  [b, "No"],
  [c, "No"]
])("TakahashisFailure", (a, expected) => {
  test("main", () => {
    expect(takahashisFailure(a)).toBe(expected)
  })
})
