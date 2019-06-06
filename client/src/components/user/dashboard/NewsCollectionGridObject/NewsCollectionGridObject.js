import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAll } from '../../../../actions/adminActions'

import NewsCard from './NewsCard'

import cx from 'classnames'
import styles from './NewsCollection.module.sass'

class NewsCollectionGridObject extends Component {
  componentDidMount() {
    this.props.getAll('news')
  }

  render() {
    const { content, lang, news } = this.props
    return (
      <div className={styles['news-grid-container']}>
        <h1>{lang === 'de' ? 'Aktuell' : 'News'}</h1>
        <div className={styles['news-grid']}>
          {lang &&
            news &&
            news.news &&
            news.news
              .filter(item => item.isOnline)
              .filter(item => item.onNewsBox)
              .filter(item => item.firstOnNewsBox)
              .splice(0, 1)
              .map((item, index) => (
                <div
                  className={cx(styles['news-card'], styles['wide'], {
                    [styles['no-img']]: !item.titleImage.originalName
                  })}
                >
                  <Link
                    to={`/${lang}/wissen/aktuelles/n/${item.tag}/${item._id}/${
                      item.handle
                    }`}
                  >
                    <NewsCard key={index} content={item} lang={lang} />
                  </Link>
                </div>
              ))}
          {lang &&
            news &&
            news.news &&
            news.news
              .filter(item => item.isOnline)
              .filter(item => item.onNewsBox)
              .filter(item => !item.firstOnNewsBox)
              .map(
                (item, index) =>
                  index < 7 && (
                    <div
                      className={cx(
                        styles['news-card'],
                        styles[item.type],
                        styles[item.newsBoxSize],
                        {
                          [styles['no-img']]:
                            item.titleImage.originalName === ''
                        }
                      )}
                    >
                      <Link
                        to={`/${lang}/wissen/aktuelles/n/${item.tag}/${
                          item._id
                        }/${item.handle}`}
                      >
                        <NewsCard key={index} content={item} lang={lang} />
                      </Link>
                    </div>
                  )
              )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news
})

export default connect(
  mapStateToProps,
  { getAll }
)(NewsCollectionGridObject)
