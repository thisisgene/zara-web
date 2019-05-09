import React, { Component } from 'react'
import Moment from 'react-moment'
import moment from 'moment'

import styles from './MonthPicker.module.sass'

export default class MonthPicker extends Component {
  render() {
    return (
      <div className={styles['month-picker']}>
        <button onClick={this.props.decreaseMonth}>-</button>
        <Moment format={'MM YYYY'}>{this.props.date}</Moment>
        <button onClick={this.props.increaseMonth}>+</button>
      </div>
    )
  }
}
