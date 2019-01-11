import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './BigNewsObject.module.sass'

export default class BigNewsObject extends Component {
  render() {
    const { content, lang } = this.props
    return (
      <div className={styles['big-news']}>
        <div className={styles['big-news--text']}>{content.text}</div>
        <div className={styles['big-news--link']}>
          <Link to={`/${lang}/${content.link}`}>{content.linkText}</Link>
        </div>
      </div>
    )
  }
}
