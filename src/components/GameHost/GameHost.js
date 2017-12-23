import React, { PureComponent } from 'react'

class GameHost extends PureComponent {
  render() {
    const {
      confirmDoor,
      switchDoor,
      stickToDoor,
      offered,
      step,
      selected
    } = this.props
    switch (step) {
      case 'select':
        return <div>Pick a door, any door!</div>
      case 'confirm':
        return (
          <div>
            You have selected door <strong>{selected}</strong>!{' '}
            <strong onClick={confirmDoor}>Confirm</strong>?
          </div>
        )
      case 'switch':
        return (
          <div>
            <div>As you can see, there was no prize behind those doors.</div>
            <div>
              Would you like to{' '}
              <strong onClick={switchDoor}>switch to {offered}</strong>?
            </div>
            <div>
              Or will you{' '}
              <strong onClick={stickToDoor}>stick to {selected}</strong>?
            </div>
          </div>
        )
      case 'won-with-switch':
        return (
          <div>
            You switched and <strong>won</strong>! The prize was behind{' '}
            <strong>{offered}</strong> all along!
          </div>
        )
      case 'won-without-switch':
        return (
          <div>
            You <strong>won</strong>! The prize was behind your original{' '}
            <strong>{selected}</strong>!
          </div>
        )
      case 'lost-with-switch':
        return (
          <div>
            You switched and <strong>lost</strong>! The prize was behind{' '}
            <strong>{selected}</strong> after all!
          </div>
        )
      case 'lost-without-switch':
        return (
          <div>
            You <strong>lost</strong>! The prize was behind the offered{' '}
            <strong>{offered}</strong>!
          </div>
        )
      default:
        return <div>You somehow ended up in a broken state!</div>
    }
  }
}

export default GameHost
