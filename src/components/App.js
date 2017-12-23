import React, { PureComponent } from 'react'
import random from 'lodash/random'

import GameArea from './GameArea/GameArea'
import GameHost from './GameHost/GameHost'
import getGameDoors from '../utils/getGameDoors'
import getDoorToOffer from '../utils/getDoorToOffer'

class App extends PureComponent {
  state = {
    amount: 3,
    doors: getGameDoors(3, random(2)),
    step: 'select'
  }

  selectDoor = selectedDoor => {
    this.setState({ selectedDoor, step: 'confirm' })
  }

  confirmDoor = () => {
    const { doors, selectedDoor } = this.state
    const offeredDoor = getDoorToOffer(doors, selectedDoor)
    this.setState({ offeredDoor, step: 'switch' })
  }

  render() {
    const { doors, step, selectedDoor, offeredDoor } = this.state

    return (
      <div>
        <header>
          <h1>The Monty Hall Problem</h1>
        </header>
        <GameHost
          step={step}
          selected={selectedDoor + 1}
          offered={offeredDoor + 1}
        />
        <GameArea
          doors={doors}
          offered={offeredDoor}
          selected={selectedDoor}
          selectDoor={this.selectDoor}
          confirmDoor={this.confirmDoor}
        />
      </div>
    )
  }
}

export default App
