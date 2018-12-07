import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import IconObject from '../IconObject/IconObject'
import ActIcon from '../../common/img/act.png'

import cx from 'classnames'
import styles from './InfoCardObject.module.sass'

class InfoCardObject extends Component {
  render() {
    const { card } = this.props
    return (
      <div
        className={cx(styles['info-card'], {
          [styles[card.color]]: card.color
        })}
      >
        <div className={styles['info-card--title-box']}>
          {card.image && <IconObject image={card.image} />}
          <h2>{card.title}</h2>
        </div>
        <div className={styles['info-card--body']}>
          <div className={styles['info-card--body__text']}>{card.text}</div>
          <div className={styles['info-card--body__link']}>
            <NavLink to={card.link}>{card.linkText}</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default InfoCardObject
