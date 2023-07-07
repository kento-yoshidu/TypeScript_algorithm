import { agentTakahashi } from "./agentTakahashi"

describe.each([
  [1, 1],
  [981506241, 177],
  [390625, 25]
])("AgentTakahashi", (a, expected) => {
  test("main", () => {
    expect(agentTakahashi(a)).toBe(expected)
  })
})
