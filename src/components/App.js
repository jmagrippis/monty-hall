import React, { PureComponent } from 'react'
import random from 'lodash/random'
import styled from 'styled-components'

import GameArea from './GameArea/GameArea'
import GameHost from './GameHost/GameHost'
import Preface from './Preface/Preface'
import getGameDoors from '../utils/getGameDoors'
import getDoorToOffer from '../utils/getDoorToOffer'
import Options from './Options/Options'

const Header = styled.header`
  font-size: 3rem;
  padding: 1rem 0;
`
class App extends PureComponent {
  static getStartingState = amount => ({
    amount,
    doors: getGameDoors(amount, random(amount - 1)),
    step: 'select',
    selectedDoor: undefined,
    offeredDoor: undefined
  })

  state = App.getStartingState(3)

  setAmount = amount => {
    this.setState(App.getStartingState(amount))
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
    const { amount, doors, step, selectedDoor, offeredDoor } = this.state

    return (
      <div>
        <Header>
          <h1>The Monty Hall Problem</h1>
        </Header>
        <Preface />
        <Options amount={amount} setAmount={this.setAmount} />
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
