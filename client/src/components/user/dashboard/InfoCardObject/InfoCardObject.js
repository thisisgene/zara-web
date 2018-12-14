import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import IconObject from '../IconObject/IconObject'

import cx from 'classnames'
import styles from './InfoCardObject.module.sass'
import ButtonObject from '../ButtonObject/ButtonObject'

class InfoCardObject extends Component {
  render() {
    const { card } = this.props
    return (
      <div
        className={cx(styles['info-card'], {
          [styles[card.color]]: card.color
        })}
      >
        <div>
          <div className={styles['info-card--title-box']}>
            {card.image && <IconObject image={card.image} />}
            <h2>{card.title}</h2>
          </div>
          <div className={styles['info-card--body']}>
            <div className={styles['info-card--body__text']}>{card.text}</div>
            {card.listItems && (
              <ul className={styles['info-card--body__list']}>
                {card.listItems.map((item, index) => (
                  <li key={index}>
                    <IconObject image="listArrow" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {card.linkType && card.linkType === 'button' && card.button ? (
          <div className={styles['info-card--button']}>
            <ButtonObject button={card.button} />
          </div>
        ) : (
          <div className={styles['info-card--link']}>
            <NavLink to={card.link}>{card.linkText}</NavLink>
          </div>
        )}
      </div>
    )
  }
}

export default InfoCardObject
