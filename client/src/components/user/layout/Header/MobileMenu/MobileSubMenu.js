import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'

import cx from 'classnames'
import styles from './MobileMenu.module.sass'

class MobileSubMenu extends Component {
  render() {
    const { menuItems, subMenuContent, lang } = this.props
    return (
      <div>
        {menuItems.map(item => {
          return (
            <div
              className={cx(styles['sub-menu-item'], {
                [styles['visible']]: subMenuContent === item.id
              })}
              key={item.id}
            >
              {subMenuContent === item.id && (
                <div className={styles['sub-menu-head']}>
                  <div
                    className={styles['sub-menu-head__arrow']}
                    onClick={this.props.onSubLinkClick}
                  >
                    <i className="fa fa-angle-left" />
                  </div>
                  {item.name}
                  <div />
                </div>
              )}
              <div className={styles['sub-item-container']}>
                {item.subMenuList &&
                  item.subMenuList.map(subItem => {
                    return (
                      <div className={styles['sub-item']} key={subItem.id}>
                        <div className={styles['sub-item--title']}>
                          <NavLink
                            to={`/user/${lang}/${item.link}/${subItem.link}`}
                            activeClassName={styles.active}
                            onClick={this.props.onMobileNavClick}
                          >
                            <div className={styles['sub-item--title__link']}>
                              <div
                                className={
                                  styles['sub-item--title__link--text']
                                }
                              >
                                <Translate id={`menu.item${subItem.id}`} />
                              </div>
                              <div
                                className={
                                  styles['sub-item--title__link--arrow']
                                }
                              />
                              <i className="fa fa-arrow-right" />
                            </div>
                          </NavLink>
                        </div>
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
                                  onClick={this.props.onMobileNavClick}
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
            </div>
          )
        })}
      </div>
    )
  }
}

export default withLocalize(MobileSubMenu)
