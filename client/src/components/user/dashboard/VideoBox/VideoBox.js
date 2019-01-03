import React, { Component } from 'react'

import VideoItem from './VideoItem'

import styles from './VideoBox.module.sass'

export default class VideoBox extends Component {
  render() {
    const { content, lang } = this.props
    return (
      <div className={styles['video-box']}>
        <div className={styles['video-box--title']}>{content[lang].title}</div>
        <div className={styles['video-box--content']}>
          {content[lang].videos &&
            content[lang].videos.map((video, index) => (
              <VideoItem key={index} video={video} />
            ))}
        </div>
      </div>
    )
  }
}
