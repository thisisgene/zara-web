import React, { Component } from 'react'
import YouTube from 'react-youtube'

import styles from './VideoBox.module.sass'

class VideoItem extends Component {
  render() {
    const { video } = this.props
    const opts = {
      // height: '390',
      // width: '640'
    }
    return (
      <div className={styles['video-item']}>
        <div className={styles['video-item--title']}>{video.title}</div>
        <div className={styles['video-item--video']}>
          <YouTube videoId={video.id} opts={opts} onReady={this._onReady} />
        </div>
      </div>
    )
  }
}
export default VideoItem
