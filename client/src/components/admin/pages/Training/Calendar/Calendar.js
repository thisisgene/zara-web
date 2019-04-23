import React, { Component } from 'react'

import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'
// import './Calendar.sass'
import styles from './Calendar.module.sass'

const localizer = BigCalendar.momentLocalizer(moment)

const Event = [
  {
    title: 'Test',
    start: new Date().now,
    // end: new Date(),
    allDay: true
    // resource?: any,
  }
]

const messages = {
  allDay: 'Ganztägig',
  previous: 'Vorige',
  next: 'Nächste',
  today: 'Heute',
  month: 'Monat',
  week: 'Woche',
  day: 'Tag',
  agenda: 'Agenda',
  date: 'Datum',
  time: 'Zeit',
  workweek: 'Arbeitswoche',
  event: 'Training', // Or anything you want
  showMore: total => `+ ${total} zusätzliche Trainings`
}

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

export default class Calendar extends Component {
  render() {
    return (
      <div className={styles['training-calendar']}>
        <BigCalendar
          localizer={localizer}
          messages={messages}
          events={Event}
          views={allViews}
          step={60}
          showMultiDayTimes
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    )
  }
}
