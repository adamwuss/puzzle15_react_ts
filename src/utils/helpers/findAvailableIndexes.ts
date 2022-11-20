const findAvailableIndexes = (indexZero: number) => {
  if (indexZero === 0) {
    return [indexZero + 1, indexZero + 4];
  }
  if (indexZero === 3) {
    return [indexZero - 1, indexZero + 4];
  }
  if (indexZero === 12) {
    return [indexZero + 1, indexZero - 4];
  }
  if (indexZero === 15) {
    return [indexZero - 1, indexZero - 4];
  }
  if (indexZero < 3) {
    return [indexZero - 1, indexZero + 1, indexZero + 4];
  }
  if (indexZero > 12) {
    return [indexZero - 1, indexZero + 1, indexZero - 4];
  }
  if ([7, 11].includes(indexZero)) {
    return [indexZero - 1, indexZero - 4, indexZero + 4];
  }
  if ([4, 8].includes(indexZero)) {
    return [indexZero + 1, indexZero - 4, indexZero + 4];
  }
  return [indexZero + 1, indexZero - 1, indexZero - 4, indexZero + 4];
}

export default findAvailableIndexes;
