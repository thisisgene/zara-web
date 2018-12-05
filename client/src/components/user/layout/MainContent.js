import React, { Component } from 'react'

import styles from './MainContent.module.sass'

export default class MainContent extends Component {
  render() {
    return (
      <div className={styles['main-content']}>
        <p>Hallo</p>
      </div>
    )
  }
}
