export const notTooBright = (h: number, w: number) => {
  if (h === 1 || w === 1) {
    return h * w
  }

  const hCount = Math.ceil(h / 2)

  const wCount = Math.ceil(w / 2)

  return hCount * wCount
}
