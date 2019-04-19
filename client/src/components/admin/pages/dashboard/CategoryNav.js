import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import cx from 'classnames'
import styles from './Dashboard.module.sass'

class Dashboard extends Component {
  render() {
    // const { user } = this.props.auth

    return (
      <div className={styles['category-nav']}>
        {/* <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/dashboard/projects"
        >
          Projects
        </NavLink> */}
        <NavLink
          className={cx(
            styles['category-nav--link'],
            styles['category-nav--link__media']
          )}
          activeClassName={styles['cat-active']}
          to="/admin/dashboard/media"
        >
          Media
        </NavLink>
        <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/dashboard/news"
        >
          News
        </NavLink>
        <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/dashboard/jahresberichte"
        >
          Berichte, Pressespiegel ...
        </NavLink>
        <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/dashboard/faqs"
        >
          FAQs
        </NavLink>
      </div>
    )
  }
}

export default Dashboard
