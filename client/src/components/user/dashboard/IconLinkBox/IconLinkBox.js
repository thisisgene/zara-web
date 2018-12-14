import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import IconObject from '../IconObject/IconObject'

import styles from './IconLinkBox.module.sass'

class IconLinkBox extends Component {
  render() {
    const { content } = this.props
    return (
      <div className={styles['icon-link-box']}>
        <div className={styles['icon']}>
          <IconObject image={content.icon} />
        </div>
        <div className={styles['link']}>
          <Link to={content.link}>{content.text}</Link>{' '}
        </div>
      </div>
    )
  }
}

export default IconLinkBox
