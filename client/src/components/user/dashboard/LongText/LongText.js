import React, { Component } from 'react'

import cx from 'classnames'
import styles from './LongText.module.sass'

export default class LongText extends Component {
  render() {
    const { content, lang } = this.props
    return (
      <div className={cx(styles['long-text'], styles[content.type])}>
        {content[lang].title && (
          <div className={styles['long-text--title']}>
            {content[lang].title}
          </div>
        )}
        <div
          className={styles['long-text--text']}
          dangerouslySetInnerHTML={{ __html: content[lang].text }}
        />
      </div>
    )
  }
}
