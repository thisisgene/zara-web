import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import NewsCard from './NewsCard'

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
                    <Link
                      to={`/user/${lang}/wissen/aktuelles/${item.tag}/${
                        item.id
                      }`}
                    >
                      <NewsCard key={index} content={item} lang={lang} />
                    </Link>
                  ) : (
                    <NewsCard key={index} content={item} lang={lang} />
                  ))
              )}
        </div>
      </div>
    )
  }
}
