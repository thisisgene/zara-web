import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withLocalize } from 'react-localize-redux'

import MetaTags from 'react-meta-tags'

import { getById } from '../../../../../../actions/adminActions'

import HeroUnit from '../../../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../../../dashboard/OneLineAlert/OneLineAlert'
import CardCollectionGridObject from '../../../../dashboard/CardCollectionGridObject/CardCollectionGridObject'
import VideoItem from '../../../../dashboard/VideoBox/VideoItem'

import { oneLineAlert, cardGrid } from './newsdetail_data'

import styles from './NewsDetail.module.sass'

class Preview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newsId: props.match.params.newsId,
      hasIframe: false,
      newDescription: ''
    }
  }
  componentDidMount() {
    this.props.getById(this.props.match.params.newsId, 'news')
  }

  componentDidUpdate(prevProps) {
    if (prevProps.news != this.props.news && this.props.news.newsItem) {
      let description = this.props.news.newsItem[this.props.activeLanguage.code]
        .description
      if (description.includes(`&lt;iframe`)) {
        let iframeContent = description.substring(
          description.lastIndexOf('&lt;iframe'),
          description.lastIndexOf('iframe&gt;') + 10
        )
        let iframe = document.createElement('div')
        iframe.innerHTML = iframeContent
        let start = description.indexOf('&lt;iframe')
        let end = description.indexOf('iframe&gt;') + 'iframe&gt;'.length
        let newDescription = description.replace(
          description.substring(start, end),
          '<div style="width:100%;text-align:center">' +
          iframe.textContent +
          '</div>'
        )

        this.setState(
          {
            hasIframe: true,
            newDescription: newDescription
          },
        )
      }
    }
  }

  onClick = e => {
    this.setState({
      lang: e.target.name
    })
  }

  render() {
    const { newsItem } = this.props.news
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }

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
      <div>
        {lang && newsItem && (
          <div>
            <MetaTags>
              <title>ZARA | {newsItem[lang].title}</title>
              <meta
                name="description"
                content={newsItem[lang].shortDescription}
              />
              <meta
                property="og:title"
                content={`ZARA | ${newsItem[lang].title}`}
              />
              <meta
                property="og:image"
                content={`/assets/media/${newsItem.titleImage.category}/${newsItem.titleImage.originalName}`}
              />
            </MetaTags>
            <div className={styles['news-detail']}>
              <div className={styles['news-detail']}>
                <HeroUnit data={newsItem} lang={lang} />
                <OneLineAlert content={oneLineAlert} lang={lang} />

                {this.state.hasIframe ? (
                  <div
                    className={styles['news-detail--text']}
                    dangerouslySetInnerHTML={{
                      __html: this.state.newDescription
                    }}
                  />
                ) : (
                    <div
                      className={styles['news-detail--text']}
                      dangerouslySetInnerHTML={{
                        __html: newsItem[lang].description
                      }}
                    />
                  )}
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
                <CardCollectionGridObject cardObject={cardGrid} lang={lang} />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news
})

export default withLocalize(connect(mapStateToProps, { getById })(Preview))
