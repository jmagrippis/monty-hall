const getGameDoors = (amount = 3, winningIndex = 0) =>
  [...Array(amount).keys()].map(i => ({ prize: winningIndex === i }))

export default getGameDoors
