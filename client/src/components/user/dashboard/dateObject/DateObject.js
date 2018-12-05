import React, { Component } from 'react'

import styles from './DateObject.module.sass'

const dataObj = {
  month: 'Oktober',
  day: 20,
  time: {
    startTime: 10,
    endTime: 17
  }
}

class DateObject extends Component {
  render() {
    let timeLang
    if (this.props.lang == 'de') {
      timeLang = ' Uhr'
    } else {
      if (dataObj.time.endTime >= 12) {
        timeLang = 'pm'
      } else {
        timeLang = 'am'
      }
    }
    return (
      <div className={styles['date-object']}>
        <div className={styles['date-object--month']}>{dataObj.month}</div>
        <div className={styles['date-object--day']}>{dataObj.day}</div>
        <div className={styles['date-object--time']}>
          {`${dataObj.time.startTime}-${dataObj.time.endTime}${timeLang}`}
        </div>
      </div>
    )
  }
}

export default DateObject
