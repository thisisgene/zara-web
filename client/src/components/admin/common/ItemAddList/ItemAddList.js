import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import styles from './ItemAddList.module.sass'

export default class ItemAddList extends Component {
  constructor() {
    super()
  }
  onButtonClick = () => {
    console.log('hoee')
  }

  render() {
    const { category, news } = this.props
    return (
      <div className={styles['item-add-list']}>
        <div>
          <Link
            className={styles['add-button']}
            to={`/admin/dashboard/${category}/neu`}
          >
            Neuer Beitrag
            <div className={styles['plus-icon']}>
              <i className="fa fa-plus" />
            </div>
          </Link>
        </div>
        <div>
          {news &&
            news.map(item => (
              <div>
                <NavLink to={`/admin/dashboard/news/${item._id}`}>
                  {item.titleDE}
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    )
  }
}
