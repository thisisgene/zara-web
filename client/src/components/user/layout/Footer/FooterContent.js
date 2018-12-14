import React, { Component } from 'react'

import styles from './Footer.module.sass'

export default class FooterContent extends Component {
  render() {
    return (
      <div className={styles['footer-content']}>
        <p>Footer Content</p>
      </div>
    )
  }
}
