import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Dashboard.module.sass'

class Dashboard extends Component {
  render() {
    // const { user } = this.props.auth

    return (
      <div className={styles['category-nav']}>
        <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/dashboard/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/dashboard/news"
        >
          News
        </NavLink>
        {/* <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['active']}
          to="/admin/reports"
        >
          Meldungen
        </NavLink> */}
      </div>
    )
  }
}

export default Dashboard
