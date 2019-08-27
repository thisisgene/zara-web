import React, { Component } from 'react'

import YouTube from 'react-youtube'

import styles from './EmbedPopUp.module.sass'

export default class VideoInfoItem extends Component {
  render() {
    const { video, newsId, onDeleteClick } = this.props

    return (
      <div className={styles['video-item']}>
        <div className={styles['video-item--title']}>
          {video.de && video.de.title}
          <button
            className={styles['delete-button']}
            onClick={() => onDeleteClick(newsId, video._id)}
          >
            Löschen
          </button>
        </div>
        <div className={styles['video-item--video']}>
          <p>VIDEO ID: {video.vId}</p>
          <YouTube videoId={video.vId} />
        </div>
        <div
          className={styles['video-item--text']}
          dangerouslySetInnerHTML={{ __html: video.de && video.de.text }}
        ></div>
      </div>
    )
  }
}
