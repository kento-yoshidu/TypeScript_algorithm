export const perfectString = (input: string) => {
  // 大文字と小文字の両方が含まれるかどうか
  const isUpperAndLower = /^(?=.*?[A-Z])(?=.*?[a-z])/.test(input)

  // 文字が重複していないか
  // new Setで重複をなくした配列にし、元の文字列と長さを比べる
  const isNotDuplicate = input.length === [...new Set(input)].length

  return isUpperAndLower && isNotDuplicate ? "Yes" : "No"
}
