import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'

import cx from 'classnames'
import styles from './SubMenu.module.sass'

class SubMenu extends Component {
  render() {
    const { menuItems, subMenuContent, lang } = this.props
    return (
      <div>
        {menuItems.map(item => {
          return (
            <div
              className={cx(styles['sub-menu-item'], {
                [styles[`visible`]]: subMenuContent === item.id
              })}
              key={item.id}
            >
              {/* <h3>{item.name}</h3> */}
              {item.subMenuList &&
                item.subMenuList.map(subItem => {
                  return (
                    <div className={styles['sub-item']} key={subItem.id}>
                      <p className={styles['sub-item--title']}>
                        <NavLink
                          to={`/user/${lang}/${item.link}/${subItem.link}`}
                          activeClassName={styles.active}
                          onClick={this.props.onClick}
                        >
                          <Translate id={`menu.item${subItem.id}`} />
                        </NavLink>
                      </p>
                      {subItem.subMenuList &&
                        subItem.subMenuList.map(ssItem => {
                          return (
                            <div
                              className={styles['sub-sub-item']}
                              key={ssItem.id}
                            >
                              <NavLink
                                to={`/user/${lang}/${item.link}/${
                                  subItem.link
                                }/${ssItem.link}`}
                                activeClassName={styles.active}
                                onClick={this.props.onClick}
                              >
                                <Translate id={`menu.item${ssItem.id}`} />
                              </NavLink>
                            </div>
                          )
                        })}
                    </div>
                  )
                })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default withLocalize(SubMenu)
