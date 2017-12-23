import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 4rem;
`
class Door extends PureComponent {
  onClick = () => {
    const { id, onClick } = this.props
    if (!onClick) return
    onClick(id)
  }

  render() {
    const { label } = this.props
    return <Container onClick={this.onClick}>{label}</Container>
  }
}

export default Door
