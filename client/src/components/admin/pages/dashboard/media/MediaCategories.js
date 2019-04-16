import React, { Component } from './react'
import { NavLink } from './react-router-dom'

import styles from './Media.module.sass'

export default class MediaCategories extends Component {
  render() {
    return (
      <div className={styles['media--menu']}>
        <ul>
          <li>
            <NavLink
              to="/admin/dashboard/media/news"
              activeClassName={styles['active']}
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/dashboard/media/jahresberichte"
              activeClassName={styles['active']}
            >
              Jahresberichte
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/dashboard/media/pressespiegel"
              activeClassName={styles['active']}
            >
              Pressespiegel
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
