import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from '../News.module.sass'

export default class NewsItem extends Component {
  render() {
    const { news, lang, newsTags } = this.props
    return (
      <div className={styles['news-item']}>
        <div className={styles['news-item--image']}>
          {news.image ? (
            <img src={`/assets/img/${news.image}`} alt="" />
          ) : (
            <img src="/assets/img/news/news_placeholder.png" alt="" />
          )}
        </div>
        <div className={styles['news-item--text']}>
          <div className={styles['news-item--text__tagline']}>
            {newsTags
              .filter(tag => tag.name === news.tag)
              .map(tag => tag[lang].singular)}{' '}
            | {news[lang].date}
          </div>
          <div className={styles['news-item--text__title']}>
            {news[lang].title}
          </div>
          <div
            className={styles['news-item--text__body']}
            dangerouslySetInnerHTML={{ __html: news[lang].shortContent }}
          />

          <div className={styles['news-item--text__link']}>
            <Link
              to={`/user/${lang}/wissen/aktuelles/${news.param}/${news.id}`}
            >
              {news[lang].linkText}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
