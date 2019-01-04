import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CompactInfoCardObject from '../CompactInfoCardObject/CompactInfoCardObject'

import cx from 'classnames'
import styles from './CardCollectionGridObject.module.sass'

export default class CardCollectionGridObject extends Component {
  render() {
    const { cardObject, lang } = this.props

    return (
      <div>
        {cardObject && lang && (
          <div className={styles['card-grid-container']}>
            <div className={styles['card-grid-title']}>
              {cardObject[lang].title}
            </div>
            <div
              className={cx(styles['card-grid'], {
                [styles[cardObject.count]]: cardObject.count
              })}
            >
              {cardObject[lang].cards &&
                cardObject[lang].cards.map((card, index) => (
                  <div
                    key={index}
                    className={cx(styles['grid-item'], {
                      [styles[card.size]]: card.size
                    })}
                  >
                    <CompactInfoCardObject card={card} lang={lang} />
                  </div>
                ))}
            </div>
            {cardObject[lang].link && (
              <div className={styles['card-grid-link']}>
                <Link to={cardObject[lang].link}>
                  {cardObject[lang].linkText}
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}
