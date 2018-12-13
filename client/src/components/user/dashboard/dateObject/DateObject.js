import React, { Component } from 'react'

import styles from './DateObject.module.sass'

class DateObject extends Component {
  render() {
    const { dateObj, lang } = this.props

    let timeLang
    let startTime
    let endTime
    if (dateObj && lang) {
      startTime = dateObj.time.startTime
      endTime = dateObj.time.endTime
      if (lang === 'de') {
        timeLang = 'Uhr'
      } else {
        if (dateObj.time.endTime >= 12) {
          startTime > 12 && (startTime -= 12)
          endTime > 12 && (endTime -= 12)
          timeLang = 'pm'
        } else {
          timeLang = 'am'
        }
      }
    }

    return (
      <div className={styles['date-object']}>
        <div className={styles['date-object--month']}>{dateObj.month}</div>
        <div className={styles['date-object--day']}>{dateObj.day}</div>
        <div className={styles['date-object--time']}>
          {`${startTime}-${endTime} ${timeLang}`}
        </div>
      </div>
    )
  }
}

export default DateObject
