import React, { Component } from 'react'
import PrivateRoute from '../../common/PrivateRoute'

import TrainingCategoryNav from './TrainingCategoryNav'

import TrainingTeam from './TrainingTeam/TrainingTeam'
import Trainings from './Trainings/Trainings'
import Calendar from './Calendar/Calendar'
import Fees from './Fees/Fees'

import styles from './Training.module.sass'

export default class Training extends Component {
  render() {
    return (
      <div className={styles['training']}>
        <TrainingCategoryNav />

        <div className={styles['training-content']}>
          <PrivateRoute path="/admin/training/team" component={TrainingTeam} />
          <PrivateRoute
            path="/admin/training/trainings"
            component={Trainings}
          />
          <PrivateRoute path="/admin/training/calendar" component={Calendar} />
          <PrivateRoute path="/admin/training/fees" component={Fees} />
        </div>
      </div>
    )
  }
}
