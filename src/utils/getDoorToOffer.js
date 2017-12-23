import findIndex from 'lodash/findIndex'
import range from 'lodash/range'
import sample from 'lodash/sample'

const getDoorToOffer = (doors, selected) => {
  if (!doors[selected].prize) return findIndex(doors, 'prize')
  const options = range(doors.length)
  options.splice(selected, 1)
  return sample(options)
}

export default getDoorToOffer
