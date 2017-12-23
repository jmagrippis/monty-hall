import React, { PureComponent } from 'react'

import Door from './Door/Door'

class GameArea extends PureComponent {
  getDoorOnClick(i, { confirmDoor, selectDoor, offered, selected }) {
    if (i === selected) return confirmDoor
    if (!offered || i === offered) return selectDoor
  }
  render() {
    const { doors } = this.props

    return (
      <div>
        {doors.map(({ prize }, i) => {
          return (
            <Door
              key={i}
              id={i}
              label={i + 1}
              onClick={this.getDoorOnClick(i, this.props)}
            />
          )
        })}
      </div>
    )
  }
}

export default GameArea
