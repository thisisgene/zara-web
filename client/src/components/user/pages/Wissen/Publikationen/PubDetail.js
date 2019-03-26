import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { oneLineAlert, cardGrid } from './pubdetail_data'
import { pubData } from './zara_pub_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../../dashboard/OneLineAlert/OneLineAlert'
import NewsletterOneLineObject from '../../../dashboard/NewsletterOneLineObject/NewsletterOneLineObject'
import CardCollectionGridObject from '../../../dashboard/CardCollectionGridObject/CardCollectionGridObject'
import VideoItem from '../../../dashboard/VideoBox/VideoItem'
import LongText from '../../../dashboard/LongText/LongText'

import cx from 'classnames'
import styles from './PubDetail.module.sass'

class PubDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pubId: props.match.params.pubId
    }
  }
  componentDidMount() {
    let docTitle = 'ZARA | ' + this.state.pubId
    docTitle = docTitle.replace(/_/g, ' ')
    document.title = docTitle
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match &&
      this.props.match &&
      prevProps.match.params.pubId !== this.props.match.params.pubId
    ) {
      this.setState({
        pubId: this.props.match.params.pubId
      })
      let docTitle = 'ZARA | ' + this.state.pubId
      docTitle = docTitle.replace(/_/g, ' ')
      document.title = docTitle
    }
  }
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    const pubArray = pubData.filter(item => item.id === this.state.pubId)
    let pub
    if (lang) {
      pub = pubArray[0]
      if (!pub.image) {
        pub.imageSide = 'left'
        pub.imageAlign = 'center'
        pub.image = 'pub/pub_placeholder.png'
      }
    }
    return (
      <div>
        {lang && (
          <div className={styles['pub-detail']}>
            <HeroUnit data={pub} lang={lang} />
            <NewsletterOneLineObject lang={lang} />
            {/* <OneLineAlert content={oneLineAlert} lang={lang} /> */}
            <div
              className={styles['pub-detail--text']}
              dangerouslySetInnerHTML={{ __html: pub[lang].content }}
            />
            {pub[lang].videos &&
              pub[lang].videos.map(video => (
                <div className={styles['pub-detail--video']}>
                  <h2>{video.vTitle}</h2>
                  <div className={styles['pub-detail--video__item']}>
                    <VideoItem video={video} />
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: video.text }} />
                </div>
              ))}
            {pub[lang].download && (
              <div className={styles['pub-detail--download']}>
                {pub[lang].download.map(download => (
                  <div>
                    <a
                      className={styles['pub-detail--download__item']}
                      href={`https://assets.zara.or.at/download/${
                        download.fileLocation
                      }`}
                      target="blank"
                    >
                      <i
                        className={cx(
                          'fas fa-file-download',
                          styles['pub-detail--download__item-icon']
                        )}
                      />
                      <div className={styles['download-info']}>
                        <span className={styles['file-name']}>
                          {download.fileName}
                        </span>
                        <span className={styles['file-size']}>
                          {download.fileSize}
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )}
            {pub[lang].bottomText && (
              <div
                className={styles['pub-detail--bottom-text']}
                dangerouslySetInnerHTML={{ __html: pub[lang].bottomText }}
              />
            )}
            {pub.bottomImages && (
              <div className={styles['pub-detail--bottom-images']}>
                {pub.bottomImages.map(image => (
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

export default withLocalize(PubDetail)
