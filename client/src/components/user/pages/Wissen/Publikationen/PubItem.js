import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './PubItem.module.sass'

export default class PubItem extends Component {
  render() {
    const { content, lang } = this.props
    return (
      <div>
        <div className={styles['pub-item']}>
          <div className={styles['pub-item--image']}>
            {content.image ? (
              <img src={`/assets/img/${content.image}`} alt="" />
            ) : (
              <img src="/assets/img/news/news_placeholder.png" alt="" />
            )}
          </div>
          <div className={styles['pub-item--text']}>
            <div
              className={styles['pub-item--text__title']}
              dangerouslySetInnerHTML={{ __html: content[lang].title }}
            />
            <div
              className={styles['pub-item--text__body']}
              dangerouslySetInnerHTML={{
                __html: content[lang].shortDescription
              }}
            />

            <div className={styles['pub-item--text__link']}>
              <Link to={`/${lang}/wissen/publikationen/zara/${content.id}`}>
                {content[lang].linkText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
