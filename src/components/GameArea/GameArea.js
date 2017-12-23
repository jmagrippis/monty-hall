import React, { PureComponent } from 'react'

import Door from './Door/Door'

class GameArea extends PureComponent {
  render() {
    const { confirmDoor, doors, selectDoor, offered, selected } = this.props

    return (
      <div>
        {doors.map(({ prize }, i) => {
          const revealed = offered && i !== offered && i !== selected
          return (
            <Door
              key={i}
              id={i}
              label={i + 1}
              revealed={revealed}
              onClick={
                revealed ? undefined : i === selected ? confirmDoor : selectDoor
              }
            />
          )
        })}
      </div>
    )
  }
}

export default GameArea
