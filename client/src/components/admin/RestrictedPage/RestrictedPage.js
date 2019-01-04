import React, { Component } from 'react'

const style = {
  width: '100vw',
  margin: '100px 0',
  textAlign: 'center'
}

class RestrictedPage extends Component {
  render() {
    const { accessLevel } = this.props
    return (
      <div style={style}>
        <h3>Zugriff nicht erlaubt!</h3>
        <p>Benötigt andere Sicherheits-Stufe.</p>
      </div>
    )
  }
}

export default RestrictedPage
