import React, { Component } from 'react'

import styles from './LongText.module.sass'

export default class LongText extends Component {
  render() {
    const { content, lang } = this.props
    return (
      <div className={styles['long-text']}>
        <div className={styles['long-text--title']}>{content[lang].title}</div>
        <div
          className={styles['long-text--text']}
          dangerouslySetInnerHTML={{ __html: content[lang].text }}
        />
      </div>
    )
  }
}
