import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Moment from 'react-moment'
import moment from 'moment'

import styles from './MonthPicker.module.sass'

export default class MonthPicker extends Component {
  render() {
    return (
      <div className={styles['month-picker']}>
        <NavLink
          to={`#${moment(this.props.date)
            .subtract(1, 'M')
            .format('YYYY-MM')}`}
        >
          <button onClick={this.props.decreaseMonth}>
            <i className={'fa fa-chevron-left'} />
          </button>
        </NavLink>
        <Moment format={'MMMM YYYY'} lang={'de'}>
          {this.props.date}
        </Moment>
        <NavLink
          to={`#${moment(this.props.date)
            .add(1, 'M')
            .format('YYYY-MM')}`}
        >
          <button onClick={this.props.increaseMonth}>
            <i className={'fa fa-chevron-right'} />
          </button>
        </NavLink>
      </div>
    )
  }
}
