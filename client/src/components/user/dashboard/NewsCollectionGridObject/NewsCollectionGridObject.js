import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import NewsCard from './NewsCard'

import cx from 'classnames'
import styles from './NewsCollection.module.sass'

export default class NewsCollectionGridObject extends Component {
  render() {
    const { content, lang } = this.props
    return (
      <div className={styles['news-grid-container']}>
        <h1>{lang === 'de' ? 'Aktuell' : 'News'}</h1>
        <div className={styles['news-grid']}>
          {lang &&
            content &&
            content
              .filter(item => item.onNewsBox === true)
              .map(
                (item, index) =>
                  index < 7 &&
                  (item[lang].linkText && item[lang].linkText !== '' ? (
                    <div
                      className={cx(
                        styles['news-card'],
                        styles[item.type],
                        styles[item.newsBoxSize],
                        { [styles['no-img']]: !item.image }
                      )}
                    >
                      <Link
                        to={`/${lang}/wissen/aktuelles/${item.tag}/${item.id}`}
                      >
                        <NewsCard key={index} content={item} lang={lang} />
                      </Link>
                    </div>
                  ) : (
                    <div
                      className={cx(
                        styles['news-card'],
                        styles[content.type],
                        styles[content.newsBoxSize],
                        { [styles['no-img']]: !content.image }
                      )}
                    >
                      <NewsCard key={index} content={item} lang={lang} />
                    </div>
                  ))
              )}
        </div>
      </div>
    )
  }
}
