import React, { Component } from './react'
import { Route, Switch } from './react-router-dom'

import PrivateRoute from '../../../common/PrivateRoute'

import MediaCategories from './MediaCategories'
import MediaContent from './MediaContent'

import styles from './Media.module.sass'

class Media extends Component {
  render() {
    return (
      <div className={styles['media']}>
        <MediaCategories />
        <PrivateRoute
          path="/admin/dashboard/media/:category"
          component={MediaContent}
        />
      </div>
    )
  }
}

export default Media
