import React, { PureComponent } from 'react'

import GameArea from './GameArea/GameArea'

class App extends PureComponent {
  render() {
    return (
      <div>
        <header>
          <h1>The Monty Hall Problem</h1>
        </header>
        <GameArea />
      </div>
    )
  }
}

export default App
