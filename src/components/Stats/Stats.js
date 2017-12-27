import React, { PureComponent } from 'react'

import { db } from '../../firebase'

const getPercentage = (times, outOf) =>
  (outOf === 0 ? 0 : times / outOf * 100).toFixed(2)

class Stats extends PureComponent {
  state = {}

  unsubscribe

  subscribe({ game }) {
    return db
      .collection('doors')
      .doc(game)
      .onSnapshot(doc => {
        if (!doc.exists) return
        this.setState({ [doc.id]: { ...doc.data() } })
      })
  }

  componentDidMount() {
    this.subscribe(this.props)
  }

  componentWillUpdate(nextProps) {
    const { game } = this.props
    if (game === nextProps.game) return
    this.unsubscribe && this.unsubscribe()
    this.unsubscribe = this.subscribe(nextProps)
  }

  renderStats = (game, stats) => {
    const {
      gamesCount,
      winsWithSwitch,
      lossesWithSwitch,
      winsWithoutSwitch,
      lossesWithoutSwitch
    } = stats
    return (
      <div>
        <div>
          <strong>{gamesCount}</strong> games have been played with{' '}
          <strong>{game}</strong> doors.
        </div>
        <div>
          <strong>
            {getPercentage(winsWithSwitch + lossesWithSwitch, gamesCount)}%
          </strong>{' '}
          of players have switched doors.{' '}
          <strong>
            {getPercentage(winsWithSwitch, winsWithSwitch + lossesWithSwitch)}%
          </strong>{' '}
          of them won.
        </div>
        <div>
          <strong>
            {getPercentage(winsWithoutSwitch + lossesWithoutSwitch, gamesCount)}%
          </strong>{' '}
          of players kept their original choice.{' '}
          <strong>
            {getPercentage(
              winsWithoutSwitch,
              winsWithoutSwitch + lossesWithoutSwitch
            )}%
          </strong>{' '}
          of them won.
        </div>
      </div>
    )
  }

  render() {
    const { game } = this.props
    const stats = this.state[game]
    return stats ? this.renderStats(game, stats) : null
  }
}

export default Stats
