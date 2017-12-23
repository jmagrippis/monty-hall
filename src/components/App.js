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

  endGame = switched => {
    const { doors, offeredDoor, selectedDoor } = this.state
    const finalDoor = doors[switched ? offeredDoor : selectedDoor]

    this.setState({
      step: `${finalDoor.prize ? 'won' : 'lost'}-${
        switched ? 'with' : 'without'
      }-switch`
    })
  }

  stickToDoor = this.endGame.bind(undefined, false)
  switchDoor = this.endGame.bind(undefined, true)

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
          confirmDoor={this.confirmDoor}
          switchDoor={this.switchDoor}
          stickToDoor={this.stickToDoor}
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
