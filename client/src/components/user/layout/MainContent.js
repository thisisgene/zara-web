import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withLocalize, Translate } from 'react-localize-redux'

import styles from './MainContent.module.sass'

class MainContent extends Component {
  render() {
    return <div />
  }
}

export default withLocalize(MainContent)
// export default MainContent
