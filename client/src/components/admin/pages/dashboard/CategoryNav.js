import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import cx from 'classnames'
import styles from './Dashboard.module.sass'

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
          to="/admin/dashboard/media"
        >
          Media
        </NavLink>
        <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/dashboard/carousel"
        >
          Karussell
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
        <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/dashboard/team"
        >
          Team
          {/* <span className={styles['coming-soon']}>coming soon!</span> */}
        </NavLink>
      </div>
    )
  }
}

export default Dashboard
