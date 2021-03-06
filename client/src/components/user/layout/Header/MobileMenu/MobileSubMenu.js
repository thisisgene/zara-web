import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'

import {
  trainingBoxData,
  trainingItems
} from '../../../pages/Training/training_data'
import IconObject from '../../../dashboard/IconObject/IconObject'
import ContactBox from '../../../dashboard/ContactBox/ContactBox'

import cx from 'classnames'
import styles from './MobileMenu.module.sass'

class MobileSubMenu extends Component {
  render() {
    const { menuItems, subMenuContent, lang } = this.props
    return (
      <div>
        {menuItems.map(item => {
          return (
            <div key={item.id}>
              {/* {item.name !== 'Training' ? ( */}
              <div
                className={cx(styles['sub-menu-item'], {
                  [styles['visible']]: subMenuContent === item.id
                })}
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
                            {subItem.link !== null ? (
                              <NavLink
                                to={`/${lang}/${item.link}/${subItem.link}`}
                                activeClassName={styles.active}
                                onClick={this.props.onMobileNavClick}
                              >
                                <div
                                  className={styles['sub-item--title__link']}
                                >
                                  <div
                                    className={
                                      styles['sub-item--title__link--text']
                                    }
                                  >
                                    <Translate
                                      id={`menu.item${subItem.id}`}
                                    />
                                  </div>
                                  <div
                                    className={
                                      styles['sub-item--title__link--arrow']
                                    }
                                  >
                                    <IconObject image="arrowRight" />
                                  </div>
                                </div>
                              </NavLink>
                            ) : (
                                <div
                                  className={styles['sub-item--title__link']}
                                >
                                  <div
                                    className={
                                      styles['sub-item--title__link--text']
                                    }
                                  >
                                    <Translate id={`menu.item${subItem.id}`} />
                                  </div>
                                </div>
                              )}
                          </div>
                          {subItem.subMenuList &&
                            subItem.subMenuList.map(ssItem => {
                              return (
                                <div
                                  className={styles['sub-sub-item']}
                                  key={ssItem.id}
                                >
                                  <NavLink
                                    to={
                                      ssItem.redirect
                                        ? `/${lang}/${ssItem.redirectLink}`
                                        : subItem.link !== null
                                          ? `/${lang}/${item.link}/${subItem.link}/${ssItem.link}`
                                          : `/${lang}/${item.link}/${ssItem.link}`
                                    }
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
                  {item.contact && (
                    <div className={styles['contact-box--container']}>
                      <ContactBox content={item.contact} lang={lang} />
                    </div>
                  )}
                </div>
              </div>
              {/* ) : (
                <div
                  className={cx(styles['sub-menu-item'], {
                    [styles[`visible`]]: subMenuContent === item.id
                  })}
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
                    {trainingBoxData[lang].categories &&
                      trainingBoxData[lang].categories.map((cat, index) => (
                        <div className={styles['sub-item']} key={index}>
                          <div className={styles['sub-item--title']}>
                            {cat.link !== null ? (
                              <NavLink
                                to={`/${lang}/training/${cat.link}`}
                                activeClassName={styles.active}
                                onClick={this.props.onMobileNavClick}
                              >
                                <div
                                  className={styles['sub-item--title__link']}
                                >
                                  <div
                                    className={
                                      styles['sub-item--title__link--text']
                                    }
                                  >
                                    {cat.text}
                                  </div>
                                  <div
                                    className={
                                      styles['sub-item--title__link--arrow']
                                    }
                                  />
                                  <i className="fa fa-arrow-right" />
                                </div>
                              </NavLink>
                            ) : (
                              <div className={styles['sub-item--title__link']}>
                                <div
                                  className={
                                    styles['sub-item--title__link--text']
                                  }
                                >
                                  {cat.text}
                                </div>
                              </div>
                            )}
                          </div>
                          {cat.index !== '4' ? (
                            <div>
                              {trainingItems.items &&
                                trainingItems.items
                                  .filter(item => item.category === cat.index)
                                  .map((item, itemIndex) => (
                                    <div key={itemIndex}>
                                      {itemIndex <= 4 && (
                                        <div className={styles['sub-sub-item']}>
                                          <NavLink
                                            to={`/${lang}/training/detail/${
                                              item._id
                                            }`}
                                            activeClassName={styles.active}
                                            onClick={
                                              this.props.onMobileNavClick
                                            }
                                          >
                                            {item[lang].title}
                                          </NavLink>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                            </div>
                          ) : (
                            <div>
                              {cat.subMenuList &&
                                cat.subMenuList.map((ssItem, index) => (
                                  <div
                                    className={styles['sub-sub-item']}
                                    key={ssItem.id}
                                  >
                                    <NavLink
                                      to={
                                        ssItem.redirect
                                          ? `/${lang}/${ssItem.redirectLink}`
                                          : cat.link !== null
                                          ? `/${lang}/${item.link}/${
                                              cat.link
                                            }/${ssItem.link}`
                                          : `/${lang}/${item.link}/${
                                              ssItem.link
                                            }`
                                      }
                                      activeClassName={styles.active}
                                      onClick={this.props.onMobileNavClick}
                                    >
                                      {ssItem.text}
                                    </NavLink>
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                      ))}
                    {item.contact && (
                      <div className={styles['contact-box--container']}>
                        <ContactBox content={item.contact} lang={lang} />
                      </div>
                    )}
                  </div>
                </div>
              )} */}
            </div>
          )
        })}
      </div>
    )
  }
}

export default withLocalize(MobileSubMenu)
