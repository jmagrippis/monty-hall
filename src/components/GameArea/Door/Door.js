import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 6rem;
  padding: 6rem;
  min-width: 10rem;
  text-align: center;
  user-select: none;
  background-color: ${({ winner, revealed, selected }) =>
    revealed
      ? winner ? '#B9F6CA' : '#FF8A80'
      : selected ? '#84FFFF' : '#FFFFFF'};
  cursor: ${({ revealed }) => (revealed ? 'inherit' : 'pointer')};
`
class Door extends PureComponent {
  static defaultProps = {
    revealed: false,
    selected: false
  }

  onClick = () => {
    const { id, onClick } = this.props
    if (!onClick) return
    onClick(id)
  }

  render() {
    const { label, winner, revealed, selected } = this.props
    return (
      <Container
        winner={winner}
        revealed={revealed}
        selected={selected}
        onClick={this.onClick}
      >
        {label}
      </Container>
    )
  }
}

export default Door
