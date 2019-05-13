import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import PrivateRoute from '../../../common/PrivateRoute'

import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import TrainingDetail from './TrainingDetail/TrainingDetail'

import { getAll } from '../../../../../actions/adminActions'

import 'react-big-calendar/lib/css/react-big-calendar.css'
// import './Calendar.sass'
import styles from './Calendar.module.sass'

const localizer = BigCalendar.momentLocalizer(moment)

const Events = [
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    content: 'Hallo das war jetzt aber nicht ausgemacht.'
  },
  {
    id: 15,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 8)),
    end: new Date(new Date().setHours(new Date().getHours() - 3))
  }
]
// let components = {
//   event: TrainingDetail
// }
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

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    this.props.getAll('trainings')
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      let events = []
      this.props.training.trainings &&
        this.props.training.trainings.map(training => {
          console.log(moment(training.date).year())
          let startDate = new Date(
            moment(training.date).format('YYYY'),
            moment(training.date).format('MM') - 1,
            moment(training.date).format('DD'),
            training.timeFrom
              ? parseInt(training.timeFrom.substring(0, 2))
              : parseInt('12'),
            training.timeFrom
              ? parseInt(training.timeFrom.slice(-2))
              : parseInt('00'),
            parseInt('0')
          )
          let endDate = new Date(
            moment(training.date).format('YYYY'),
            moment(training.date).format('MM') - 1,
            moment(training.date).format('DD'),
            training.timeUntil
              ? parseInt(training.timeUntil.substring(0, 2))
              : parseInt('18'),
            training.timeUntil
              ? parseInt(training.timeUntil.slice(-2))
              : parseInt('00'),
            parseInt('0')
          )

          events.push({
            id: training._id,
            title: training.title,
            start: startDate,
            end: endDate,
            desc: training.privContentMarked
          })
        })
      this.setState({ events })
    }
  }

  onClick = event => {
    this.props.history.push(`/admin/training/calendar/event/${event.id}`)
  }

  closeTrainingDetail = () => {
    this.props.history.push(`/admin/training/calendar`)
  }

  render() {
    const { events } = this.state

    if (events) console.log('this.state: ', events)
    return (
      <div className={styles['training-calendar-container']}>
        {events && (
          <div className={styles['training-calendar']}>
            <BigCalendar
              localizer={localizer}
              messages={messages}
              events={events}
              views={allViews}
              step={60}
              showMultiDayTimes
              startAccessor="start"
              endAccessor="end"
              // components={components}
              onSelectEvent={event => this.onClick(event)}
            />
            <Route
              path="/admin/training/calendar/event/:trainingId"
              render={props => (
                <TrainingDetail
                  {...props}
                  trainings={this.props.training.trainings}
                  closeTrainingDetail={this.closeTrainingDetail}
                />
              )}
            />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  training: state.training
})

export default withRouter(
  connect(
    mapStateToProps,
    { getAll }
  )(Calendar)
)
