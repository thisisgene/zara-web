import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withLocalize } from 'react-localize-redux'

import { heroData, longText } from './kolumne_data'
import { newsTags } from '../news_data'
// import { oneLineAlert, trainingItems } from './training_data'

import NewsItem from '../NewsBox/NewsItem'

import HeroUnit from '../../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../../dashboard/LongText/LongText'

import { getByProperty } from '../../../../../../actions/adminActions'

import styles from '../News.module.sass'

class Kolumne extends Component {
  componentDidMount = () => {
    this.props.getByProperty('news', 'tag', 'kolumne')
  }
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    const content = this.props.news.news
    return (
      <div className={styles['news-box']}>
        {lang && (
          <div className={styles['news-item-container']}>
            <HeroUnit data={heroData} lang={lang} />
            <LongText content={longText} lang={lang} />
            <hr />
            <div>
              {content && content.length > 0 ? (
                content.map((news, index) => (
                  <NewsItem
                    key={index}
                    news={news}
                    newsTags={newsTags}
                    lang={lang}
                  />
                ))
              ) : (
                  <div className={styles['no-entries']}>
                    {lang === 'de'
                      ? 'Zur Zeit keine Einträge'
                      : 'No entries at the moment'}
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news,
  errors: state.errors
})

export default withLocalize(
  connect(
    mapStateToProps,
    { getByProperty }
  )(Kolumne)
)
