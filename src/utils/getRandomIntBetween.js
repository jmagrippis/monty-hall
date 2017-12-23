function getRandomIntBetween(min = 0, max = 1) {
  if (max < min)
    throw new Error(`Given min (${min}) is bigger than given max (${max})`)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default getRandomIntBetween
