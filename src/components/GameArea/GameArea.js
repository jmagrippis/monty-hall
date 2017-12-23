import React, { PureComponent } from 'react'

import Door from './Door/Door'
import getGameDoors from '../../utils/getGameDoors'
import getRandomIntBetween from '../../utils/getRandomIntBetween'

const amount = 3
const doors = getGameDoors(amount, getRandomIntBetween(0, amount - 1))

class GameArea extends PureComponent {
  render() {
    return (
      <div>{doors.map(({ prize }, i) => <Door key={i} label={i + 1} />)}</div>
    )
  }
}

export default GameArea
