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
    const { category, content } = this.props
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
        <div className={styles['item-list']}>
          {content && content.length > 0 ? (
            content.map(item => (
              <div className={styles['item-list--item']}>
                <NavLink
                  to={`/admin/dashboard/${category}/${item._id}`}
                  activeClassName={styles['active']}
                >
                  {item.de.title}
                </NavLink>
              </div>
            ))
          ) : (
            <div>Noch keine Beiträge</div>
          )}
        </div>
      </div>
    )
  }
}
