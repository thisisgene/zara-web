import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { oneLineAlert, cardGrid } from './newsdetail_data'
import { newsData } from '../news_data'

import HeroUnit from '../../../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../../../dashboard/OneLineAlert/OneLineAlert'
import CardCollectionGridObject from '../../../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

import styles from './NewsDetail.module.sass'

class NewsDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newsId: props.match.params.newsId
    }
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match &&
      this.props.match &&
      prevProps.match.params.newsId !== this.props.match.params.newsId
    ) {
      this.setState({
        newsId: this.props.match.params.newsId
      })
    }
  }
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    const newsArray = newsData.filter(item => item.id === this.state.newsId)
    let news
    if (lang) {
      news = newsArray[0]
      if (!news.image) {
        news.imageSide = 'left'
        news.imageAlign = 'center'
        news.image = 'news/news_placeholder.png'
      }
    }
    return (
      <div>
        {lang && (
          <div className={styles['news-detail']}>
            <HeroUnit data={news} lang={lang} />
            <OneLineAlert content={oneLineAlert} lang={lang} />
            <div
              className={styles['news-detail--text']}
              dangerouslySetInnerHTML={{ __html: news[lang].content }}
            />
            {news.bottomImages && (
              <div className={styles['news-detail--bottom-images']}>
                {news.bottomImages.map(image => (
                  <img src={`/assets/img/${image.image}`} alt="{image.image}" />
                ))}
              </div>
            )}
            <CardCollectionGridObject cardObject={cardGrid} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(NewsDetail)
