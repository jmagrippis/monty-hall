import React, { PureComponent } from 'react'

class GameHost extends PureComponent {
  render() {
    const { offered, step, selected } = this.props
    switch (step) {
      case 'select':
        return <div>Pick a door, any door!</div>
      case 'confirm':
        return (
          <div>
            You have selected door <strong>{selected}</strong>!
          </div>
        )
      case 'switch':
        return (
          <div>
            <div>As you can see, there was no prize behind those doors.</div>
            <div>
              Would you like to <strong>switch to {offered}</strong>?
            </div>
            <div>
              Or will you <strong>stick to {selected}</strong>?
            </div>
          </div>
        )
      default:
        return <div>You somehow ended up in a broken state!</div>
    }
  }
}

export default GameHost
