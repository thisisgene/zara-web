import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import cx from 'classnames'
import styles from './LongText.module.sass'
import IconObject from '../IconObject/IconObject'

export default class LongText extends Component {
  render() {
    const { content, lang } = this.props
    return (
      <div
        className={cx(styles['long-text'], {
          [styles[content.type]]: content.type
        })}
      >
        {content[lang].title && (
          <div className={styles['long-text--title']}>
            {content[lang].title}
          </div>
        )}
        <div
          className={styles['long-text--text']}
          dangerouslySetInnerHTML={{ __html: content[lang].text }}
        />
        {content[lang].link && (
          <div className={styles['long-text--link']}>
            <IconObject image="arrowRight" />
            <Link to={`/user/${lang}/${content[lang].link}`}>
              {content[lang].linkText}
            </Link>
          </div>
        )}
      </div>
    )
  }
}
