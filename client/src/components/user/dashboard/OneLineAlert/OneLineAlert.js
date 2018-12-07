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
    return (
      <div className={styles['alert']}>
        <div className={styles['alert-wrapper']}>
          <div className={styles['alert--left']}>
            <img src={AlertIcon} alt="" />
            <div className={styles['alert-text']}>
              Ich bin Opfer oder Zeug*In eines rassistischen Vorfalls geworden
            </div>
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
