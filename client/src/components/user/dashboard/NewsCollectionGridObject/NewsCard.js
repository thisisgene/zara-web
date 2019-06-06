import React from 'react'
import { Link } from 'react-router-dom'

import cx from 'classnames'
import styles from './NewsCollection.module.sass'

export default function NewsCard({ content, lang }) {
  const shortText =
    content.newsBoxSize === 'wide'
      ? content[lang].shortDescription
      : content[lang].shortDescription.substr(0, 150) + '\u2026'
  return (
    <div>
      <div className={styles['news-card--image']}>
        {content.image && (
          <img src={`/assets/img/${content.image}`} alt={content.image} />
        )}
      </div>

      <div className={styles['news-card--body']}>
        <div className={styles['news-card--news-head']}>
          {/* <div className={styles['news-card--news-head__category']}>
              {content[lang].category}
            </div>
            <span>|</span> */}
          <div className={styles['news-card--body__date']}>
            {content[lang].date}
          </div>
        </div>

        {content[lang].title && (
          <div className={styles['news-card--body__title']}>
            {content[lang].title}
          </div>
        )}
        {/* {content[lang].shortDescription && (
          <div
            className={styles['news-card--body__text']}
            dangerouslySetInnerHTML={{ __html: shortText }}
          />
        )} */}
      </div>
    </div>
  )
}
