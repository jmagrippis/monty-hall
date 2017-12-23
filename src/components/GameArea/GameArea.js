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
  getDoorOnClick(i, { confirmDoor, selectDoor, offered, selected }) {
    if (i === selected) return confirmDoor
    if (!offered || i === offered) return selectDoor
  }
  render() {
    const { doors, offered, selected } = this.props

    return (
      <Container>
        {doors.map(({ prize }, i) => {
          return (
            <Door
              key={i}
              id={i}
              label={i + 1}
              selected={i === selected}
              revealed={offered && i !== selected && i !== offered}
              onClick={this.getDoorOnClick(i, this.props)}
            />
          )
        })}
      </Container>
    )
  }
}

export default GameArea
