import React, { PureComponent } from 'react'

class Door extends PureComponent {
  onClick = () => {
    const { id, onClick } = this.props
    if (!onClick) return
    onClick(id)
  }

  render() {
    const { label } = this.props
    return <div onClick={this.onClick}>{label}</div>
  }
}

export default Door
