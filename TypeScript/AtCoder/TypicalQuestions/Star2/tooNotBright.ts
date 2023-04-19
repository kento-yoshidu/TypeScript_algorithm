export const tooNotBright = (h: number, w: number) => {
  if (h === 1 || w === 1) {
    return h * w
  }

  const h_count = Math.ceil(h / 2)

  const w_count = Math.ceil(w / 2)

  return h_count * w_count
}
