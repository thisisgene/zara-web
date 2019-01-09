import React, { Component } from 'react'
import spinner from '../../common/assets/img/spinner.gif'

import cx from 'classnames'
import styles from './Spinner.module.sass'

export default class Spinner extends Component {
  render() {
    const { nowActive } = this.props
    return (
      <div>
        <div
          className={cx(styles['saving-screen'], {
            [styles['visible']]: nowActive
          })}
        >
          <img src={spinner} alt={spinner} />
        </div>
      </div>
    )
  }
}
