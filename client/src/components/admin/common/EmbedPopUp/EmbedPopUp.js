import React, { Component } from 'react'

import NewVideo from './NewVideo'
import VideoInfoItem from './VideoInfoItem'

import styles from './EmbedPopUp.module.sass'

export default class EmbedPopUp extends Component {
  render() {
    const { newsId, videos, onDeleteClick } = this.props
    return (
      <div className={styles['embed-popup']}>
        <h2>Video Embed</h2>
        {videos && (
          <div className={styles['video-list']}>
            {videos
              .filter(video => video !== null)
              .filter(video => !video.isDeleted)
              .map(video => (
                <div>
                  <VideoInfoItem
                    video={video}
                    newsId={newsId}
                    onDeleteClick={onDeleteClick}
                  ></VideoInfoItem>
                </div>
              ))}
          </div>
        )}
        <NewVideo newsId={newsId}></NewVideo>
      </div>
    )
  }
}
