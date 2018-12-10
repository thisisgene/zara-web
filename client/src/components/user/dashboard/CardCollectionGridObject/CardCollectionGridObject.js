import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CompactInfoCardObject from '../CompactInfoCardObject/CompactInfoCardObject'

import cx from 'classnames'
import styles from './CardCollectionGridObject.module.sass'

export default class CardCollectionGridObject extends Component {
  render() {
    const { cardObject } = this.props

    return (
      <div className={styles['card-grid-container']}>
        <div className={styles['card-grid-title']}>{cardObject.title}</div>
        <div className={styles['card-grid']}>
          {cardObject.cards &&
            cardObject.cards.map((card, index) => (
              <div
                key={index}
                className={cx(styles['grid-item'], {
                  [styles[card.size]]: card.size
                })}
              >
                <CompactInfoCardObject card={card} />
              </div>
            ))}
        </div>
        {cardObject.link && (
          <div className={styles['card-grid-link']}>
            <Link to={cardObject.link}>{cardObject.linkText}</Link>
          </div>
        )}
      </div>
    )
  }
}
