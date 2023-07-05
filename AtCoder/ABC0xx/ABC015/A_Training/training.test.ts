import { training } from "./training"

describe.each([
  ["isuruu", "isleapyear", "isleapyear"],
  ["ttttiiiimmmmeeee", "time", "ttttiiiimmmmeeee"]
])("Training", (a, b, expected) => {
  test("main", () => {
    expect(training(a, b)).toBe(expected)
  })
})
