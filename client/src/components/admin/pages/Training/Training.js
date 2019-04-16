import React, { Component } from 'react'
import PrivateRoute from '../../common/PrivateRoute'

import TrainingCategoryNav from './TrainingCategoryNav'

import TrainingTeam from './TrainingTeam/TrainingTeam'

import styles from './Training.module.sass'

export default class Training extends Component {
  render() {
    return (
      <div className={styles['training']}>
        <TrainingCategoryNav />

        <div className={styles['training-content']}>
          <PrivateRoute path="/admin/training/team" component={TrainingTeam} />
          {/* <PrivateRoute path="/admin/training/media" component={Media} />
          <PrivateRoute path="/admin/training/news" component={News} />
          <PrivateRoute
            path="/admin/training/jahresberichte"
            component={Jahresberichte}
          /> */}
        </div>
      </div>
    )
  }
}
