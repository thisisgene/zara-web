import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from '../News.module.sass'

export default class NewsItem extends Component {
  render() {
    const { news, lang } = this.props
    return (
      <div className={styles['news-item']}>
        <div className={styles['news-item--image']}>
          {news.image ? (
            <img src={`/assets/img/news/${news.image}`} alt="" />
          ) : (
            <img src="/assets/img/news/news_placeholder.png" alt="" />
          )}
        </div>
        <div className={styles['news-item--text']}>
          <div className={styles['news-item--text__title']}>
            {news[lang].title}
          </div>
          <div className={styles['news-item--text__body']}>
            {news[lang].shortContent}
          </div>

          <div className={styles['news-item--text__link']}>
            <Link to={news.link}>{news[lang].linkText}</Link>
          </div>
        </div>
      </div>
    )
  }
}
