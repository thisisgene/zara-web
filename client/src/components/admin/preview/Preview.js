import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getById } from '../../../actions/adminActions'

import HeroUnit from '../../user/dashboard/HeroUnit/HeroUnit'
import VideoItem from '../../user/dashboard/VideoBox/VideoItem'

// import OneLineAlert from '../../../../../user/dashboard/OneLineAlert/OneLineAlert'
// import CardCollectionGridObject from '../../../../../user/dashboard/CardCollectionGridObject/CardCollectionGridObject'

import styles from './Preview.module.sass'

class Preview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: 'de',
      newsId: props.match.params.newsId
    }
  }
  componentDidMount() {
    this.props.getById(this.props.match.params.newsId, 'news')
    console.log(this.props)
  }

  onClick = e => {
    this.setState({
      lang: e.target.name
    })
  }

  render() {
    const { newsItem } = this.props.news
    const { activeLanguage } = this.props
    let lang = this.state.lang
    // if (activeLanguage && activeLanguage.code) {
    //   lang = activeLanguage.code
    // }

    if (lang && newsItem) {
      if (!newsItem.titleImage || !newsItem.titleImage.originalName) {
        newsItem.titleImage = {
          originalName: 'news_placeholder.png',
          category: 'news'
        }
        // newsItem.imageAlign = 'center'
        // newsItem.imageSide = 'left'
      }
    }
    return (
      <div className={styles['preview']}>
        <div className={styles['lang-toggle']}>
          <input
            type="radio"
            id="de"
            name="de"
            checked={this.state.lang === 'de'}
            onClick={this.onClick}
          />
          <label htmlFor="de">de</label>
          <input
            type="radio"
            id="en"
            name="en"
            checked={this.state.lang === 'en'}
            onClick={this.onClick}
          />
          <label htmlFor="en">en</label>
        </div>
        <div>
          {lang && newsItem && (
            <div className={styles['news-detail']}>
              <HeroUnit data={newsItem} lang={lang} />
              <div className={styles['fakeOneLineAlert']} />
              <div
                className={styles['news-detail--text']}
                dangerouslySetInnerHTML={{ __html: newsItem[lang].description }}
              />
              {newsItem.videos &&
                newsItem.videos
                  .filter(video => video !== null)
                  .filter(video => !video.isDeleted)
                  .map(video => (
                    <div className={styles['news-detail--video']}>
                      <h2>{video[lang] && video[lang].title}</h2>
                      <div className={styles['news-detail--video__item']}>
                        <VideoItem video={{ id: video.vId }} />
                      </div>
                      <div
                        className={styles['news-detail--video__description']}
                        dangerouslySetInnerHTML={{ __html: video[lang].text }}
                      />
                    </div>
                  ))}
              {newsItem[lang].bottomText && (
                <div
                  className={styles['news-detail--bottom-text']}
                  dangerouslySetInnerHTML={{
                    __html: newsItem[lang].bottomText
                  }}
                />
              )}
              {newsItem.bottomImages && (
                <div className={styles['news-detail--bottom-images']}>
                  {newsItem.bottomImages.map(image => (
                    <img
                      src={`/assets/img/${image.image}`}
                      alt="{image.image}"
                    />
                  ))}
                </div>
              )}
              {/* <CardCollectionGridObject cardObject={cardGrid} lang={lang} /> */}
            </div>
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
  { getById }
)(Preview)
