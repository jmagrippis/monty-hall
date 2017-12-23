import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 6rem;
  padding: 6rem;
  min-width: 10rem;
  text-align: center;
  background-color: ${({ revealed, selected }) =>
    revealed ? 'red' : selected ? '#84FFFF' : '#FFFFFF'};
  cursor: ${({ revealed }) => (revealed ? 'inherit' : 'pointer')};
`
class Door extends PureComponent {
  static defaultProps = {
    selected: false
  }

  onClick = () => {
    const { id, onClick } = this.props
    if (!onClick) return
    onClick(id)
  }

  render() {
    const { label, revealed, selected } = this.props
    return (
      <Container revealed={revealed} selected={selected} onClick={this.onClick}>
        {label}
      </Container>
    )
  }
}

export default Door
