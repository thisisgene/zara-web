import React, { Component } from 'react'

import styles from './ImageBox.module.sass'

export default class ImageBox extends Component {
  render() {
    const { images } = this.props
    return (
      <div>
        {images && (
          <div className={styles['image-box']}>
            {images.map(image => (
              <div className={styles['image-box--item']}>
                <img
                  src={`/assets/media/${image.category}/${image.originalName}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}
