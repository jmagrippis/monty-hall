import React, { PureComponent } from 'react'

class Preface extends PureComponent {
  render() {
    return (
      <div>
        <div>
          <a href="https://en.wikipedia.org/wiki/Monty_Hall_problem">
            The Monty Hall problem
          </a>{' '}
          is a fun probability puzzle that is quite hard to wrap your head
          around. Humans, with their emotions and their falacies, have trouble
          understanding optimal strategies when the sample size seems so small,
          or when the strategy still has a significant failure rate.
        </div>
        <div>
          This app tries to remedy both of those things, by allowing you to
          repeat the strategy as often as you'd like <em>and</em> exaggerate its
          benefit by increasing the number of possible "doors" to select from.
        </div>
      </div>
    )
  }
}

export default Preface
