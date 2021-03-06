import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import PrivateRoute from '../../../common/PrivateRoute'

import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import TrainingDetail from './TrainingDetail/TrainingDetail'

import {
  getAll,
  setInterestedTrainer
} from '../../../../../actions/adminActions'

import 'react-big-calendar/lib/css/react-big-calendar.css'
// import './Calendar.sass'
import styles from './Calendar.module.sass'

const localizer = BigCalendar.momentLocalizer(moment)

class EventComponent extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className={styles['event-title']}>{this.props.event.title}</div>
        <div className={styles['event-trainers']}>
          <div>
            <i className={'fa fa-user'} /> {this.props.event.trainer1}
          </div>
          <div>
            <i className={'fa fa-user'} /> {this.props.event.trainer2}
          </div>
        </div>
      </div>
    )
  }
}

let components = {
  event: EventComponent
}
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
        this.props.training.trainings
          .filter(training => training.isOnline)
          .map(training => {
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

            let labelBackColor = '#DAD9DA'
            let labelColor = '#999999'
            let trainer1 = training.assignedTrainer1.id
              ? training.assignedTrainer1.name
              : null
            let trainer2 = training.assignedTrainer2.id
              ? training.assignedTrainer2.name
              : null
            if (
              training.assignedTrainer1.id == undefined ||
              training.assignedTrainer1.id == 'none' ||
              training.assignedTrainer2.id == undefined ||
              training.assignedTrainer2.id == 'none'
            ) {
              labelBackColor = training.label ? training.label.color : '#3174AD'
              labelColor = '#fff'
            }
            events.push({
              id: training._id,
              trainer1: trainer1,
              trainer2: trainer2,
              backColor: labelBackColor,
              color: labelColor,
              title: training.title,
              start: startDate,
              end: endDate
            })
          })
      this.setState({ events })
    }
  }

  onClick = event => {
    this.props.history.push(`/admin/training/calendar/event/${event.id}`)
  }

  onInterestClick = (userId, trainingId, trainingTitle, interestedArray) => {
    let interestedTrainers = new Array()
    interestedTrainers = interestedArray ///////////// FIXME: interested Array no working!
    // console.log(userId, trainingId, interestedTrainers)
    interestedTrainers.push(userId)
    console.log(interestedTrainers)
    const saveData = {
      category: 'trainings',
      title: trainingTitle,
      id: trainingId,
      interestedTrainers: interestedTrainers
    }
    this.props.setInterestedTrainer(saveData)
  }

  closeTrainingDetail = () => {
    this.props.history.push(`/admin/training/calendar`)
  }

  eventStyleGetter = event => {
    var style = {
      backgroundColor: event.backColor,
      // borderRadius: '0px',
      // opacity: 0.8,
      color: event.color
      // border: '0px',
      // display: 'block'
    }
    return {
      style: style
    }
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
              // views={{
              //   month: true,
              //   week: EventComponent
              //   // myweek: false
              // }}
              components={{
                week: {
                  event: EventComponent
                },
                day: {
                  event: EventComponent
                },
                agenda: {
                  event: EventComponent
                }
              }}
              step={60}
              showMultiDayTimes
              startAccessor="start"
              endAccessor="end"
              eventPropGetter={event => this.eventStyleGetter(event)}
              onSelectEvent={event => this.onClick(event)}
            />
            <Route
              path="/admin/training/calendar/event/:trainingId"
              render={props => (
                <TrainingDetail
                  {...props}
                  user={this.props.auth.user}
                  trainings={this.props.training.trainings}
                  closeTrainingDetail={this.closeTrainingDetail}
                  onInterestClick={this.onInterestClick}
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
  training: state.training,
  auth: state.auth
})

export default withRouter(
  connect(
    mapStateToProps,
    { getAll, setInterestedTrainer }
  )(Calendar)
)
