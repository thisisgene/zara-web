import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Image from '../../common/img/klagsverband.jpg'

import cx from 'classnames'
import styles from './CompactInfoCardObject.module.sass'

class CompactInfoCardObject extends Component {
  render() {
    const { card } = this.props
    return (
      <div className={cx(styles['compact-card'], styles[card.type])}>
        <Link to={card.link}>
          {card.type === 'imageCard' && (
            <div className={styles['compact-card--image']}>
              <img src={Image} alt="" />
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
