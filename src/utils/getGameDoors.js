import range from 'lodash/range'

const getGameDoors = (amount = 3, winningIndex = 0) =>
  range(amount).map(i => ({ prize: winningIndex === i }))

export default getGameDoors
