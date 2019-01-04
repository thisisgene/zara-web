import React, { Component } from 'react'

import styles from './BigImage.module.sass'

export default class BigImage extends Component {
  render() {
    const { image } = this.props
    return (
      <div className={styles['big-image']}>
        <img src={`/assets/img/${image.src}`} alt="" />
      </div>
    )
  }
}
