import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import cx from 'classnames'
import styles from '../dashboard/Dashboard.module.sass'

class Dashboard extends Component {
  render() {
    // const { user } = this.props.auth

    return (
      <div className={styles['category-nav']}>
        <NavLink
          className={cx(
            styles['category-nav--link'],
            styles['category-nav--link__media']
          )}
          activeClassName={styles['cat-active']}
          to="/admin/training/media"
        >
          Bilder
        </NavLink>
        <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/training/team"
        >
          Trainer*innen
        </NavLink>
        <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/training/trainings"
        >
          Trainings
        </NavLink>
        <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/training/calendar"
        >
          Kalender
        </NavLink>
      </div>
    )
  }
}

export default Dashboard
