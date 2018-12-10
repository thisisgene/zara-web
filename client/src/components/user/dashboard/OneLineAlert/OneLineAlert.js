import React, { Component } from 'react'

import ButtonObject from '../ButtonObject/ButtonObject'

import styles from './OneLineAlert.module.sass'
import AlertIcon from './img/alert_icon.png'

const button = {
  text: 'Jetzt melden',
  type: 'alert',
  link: 'de/melden'
}

class OneLineAlert extends Component {
  render() {
    const { content } = this.props
    return (
      <div className={styles['alert']}>
        <div className={styles['alert-wrapper']}>
          <div className={styles['alert--left']}>
            <img src={AlertIcon} alt="" />
            <div className={styles['alert-text']}>{content.text}</div>
          </div>
          <div className={styles['alert--right']}>
            <ButtonObject button={button} />
          </div>
        </div>
      </div>
    )
  }
}

export default OneLineAlert
