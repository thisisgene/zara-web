import React, { Component } from 'react'

import NewVideo from './NewVideo'

import styles from './EmbedPopUp.module.sass'

export default class EmbedPopUp extends Component {
  render() {
    return (
      <div className={styles['embed-popup']}>
        <NewVideo></NewVideo>
      </div>
    )
  }
}
