import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import cx from 'classnames'
import styles from './CompactInfoCardObject.module.sass'

class CompactInfoCardObject extends Component {
  render() {
    const { card, lang } = this.props
    return (
      <div
        className={cx(
          styles['compact-card'],
          styles[card.type],
          styles[card.size]
        )}
      >
        <Link to={`/user/${lang}/${card.link}`}>
          {card.type === 'imageCard' && (
            <div className={styles['compact-card--image']}>
              <img
                src={`/assets/img/info_cards/${card.image}`}
                alt={card.image}
              />
            </div>
          )}
          <div className={styles['compact-card--body']}>
            {card.type === 'newsCard' && (
              <div className={styles['compact-card--news-head']}>
                <div className={styles['compact-card--news-head__category']}>
                  {card.category}
                </div>
                <span>|</span>
                <div className={styles['compact-card--news-head__date']}>
                  {card.date}
                </div>
              </div>
            )}
            {card.title && (
              <div className={styles['compact-card--body__title']}>
                {card.title}
              </div>
            )}
            {card.text && (
              <div className={styles['compact-card--body__text']}>
                {card.text}
              </div>
            )}
          </div>
        </Link>
      </div>
    )
  }
}

export default CompactInfoCardObject
