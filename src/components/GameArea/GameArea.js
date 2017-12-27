import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Door from './Door/Door'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

class GameArea extends PureComponent {
  static defaultProps = {
    gameOver: false
  }

  getDoorOnClick(
    i,
    {
      confirmDoor,
      gameOver,
      selectDoor,
      switchDoor,
      stickToDoor,
      offered,
      selected
    }
  ) {
    if (gameOver) return
    if (typeof offered === 'undefined') {
      return i === selected ? confirmDoor : selectDoor
    }
    if (i === offered) return switchDoor
    if (i === selected) return stickToDoor
  }

  getDoorRevealed(i, { gameOver, offered, selected }) {
    return (
      gameOver ||
      (typeof offered !== 'undefined' && i !== selected && i !== offered)
    )
  }

  render() {
    const { doors, gameOver, selected } = this.props

    return (
      <Container>
        {doors.map(({ prize }, i) => (
          <Door
            key={i}
            id={i}
            label={i + 1}
            selected={i === selected}
            revealed={this.getDoorRevealed(i, this.props)}
            winner={gameOver && prize}
            onClick={this.getDoorOnClick(i, this.props)}
          />
        ))}
      </Container>
    )
  }
}

export default GameArea
