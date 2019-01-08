import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'

import IconObject from '../../dashboard/IconObject/IconObject'

import {
  trainingBoxData,
  trainingItems
} from '../../pages/Training/training_data'
import ContactBox from '../../dashboard/ContactBox/ContactBox'

import cx from 'classnames'
import styles from './SubMenu.module.sass'

class SubMenu extends Component {
  render() {
    const { menuItems, subMenuContent, lang } = this.props
    return (
      <div>
        {menuItems.map((item, index) => {
          return (
            <div key={index}>
              {item.name !== 'Training' ? (
                <div
                  className={cx(
                    styles['sub-menu-item'],
                    {
                      [styles[`visible`]]: subMenuContent === item.id
                    },
                    {
                      [styles['second-row']]: item.secondRow
                    }
                  )}
                  key={item.id}
                >
                  {/* <h3>{item.name}</h3> */}
                  {item.subMenuList &&
                    item.subMenuList.map(subItem => {
                      return (
                        <div
                          className={cx(
                            styles['sub-item'],
                            styles[subItem.gridRow]
                          )}
                          key={subItem.id}
                        >
                          <div className={styles['sub-item--title']}>
                            {subItem.link !== null ? (
                              <NavLink
                                to={`/user/${lang}/${item.link}/${
                                  subItem.link
                                }`}
                                activeClassName={styles.active}
                                onClick={this.props.onClick}
                              >
                                <Translate id={`menu.item${subItem.id}`} />
                                <IconObject image="arrowRight" />
                              </NavLink>
                            ) : (
                              <div className={styles['no-link']}>
                                <Translate id={`menu.item${subItem.id}`} />
                                {/* <IconObject image="arrowRight" /> */}
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
                                        ? `/user/${lang}/${ssItem.redirectLink}`
                                        : subItem.link !== null
                                        ? `/user/${lang}/${item.link}/${
                                            subItem.link
                                          }/${ssItem.link}`
                                        : `/user/${lang}/${item.link}/${
                                            ssItem.link
                                          }`
                                    }
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
                  {item.contact && (
                    <div className={styles['contact-box--container']}>
                      <ContactBox
                        content={item.contact}
                        contactIconLinks={item.contactIconLinks}
                        lang={lang}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className={cx(styles['sub-menu-item'], styles['training'], {
                    [styles[`visible`]]: subMenuContent === item.id
                  })}
                >
                  {trainingBoxData[lang].categories &&
                    trainingBoxData[lang].categories.map((cat, index) => (
                      <div
                        key={index}
                        className={cx(styles['sub-item'], {
                          [styles['second-row-item']]: cat.index === '4'
                        })}
                      >
                        <div className={styles['sub-item--title']}>
                          {cat.link !== null ? (
                            <NavLink
                              to={`/user/${lang}/training/${cat.link}`}
                              activeClassName={styles.active}
                              onClick={this.props.onClick}
                            >
                              {cat.text}
                              <IconObject image="arrowRight" />
                            </NavLink>
                          ) : (
                            <div className={styles['no-link']}>
                              {cat.text}
                              <IconObject image="arrowRight" />
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
                                          to={`/user/${lang}/training/detail/${
                                            item._id
                                          }`}
                                          activeClassName={styles.active}
                                          onClick={this.props.onClick}
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
                                  key={index}
                                >
                                  <NavLink
                                    to={
                                      ssItem.redirect
                                        ? `/user/${lang}/${ssItem.redirectLink}`
                                        : cat.link !== null
                                        ? `/user/${lang}/${item.link}/${
                                            cat.link
                                          }/${ssItem.link}`
                                        : `/user/${lang}/${item.link}/${
                                            ssItem.link
                                          }`
                                    }
                                    activeClassName={styles.active}
                                    onClick={this.props.onClick}
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
              )}
            </div>
          )
        })}
      </div>
    )
  }
}

export default withLocalize(SubMenu)
