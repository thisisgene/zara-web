import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import IconObject from '../IconObject/IconObject'

import cx from 'classnames'
import styles from './IconLinkBox.module.sass'

class IconLinkBox extends Component {
  render() {
    const { content, lang } = this.props
    return (
      <div className={styles['icon-link-box']}>
        <div className={styles['icon']}>
          <IconObject image={content[lang].icon} />
        </div>
        <div className={cx(styles['link'], styles[content[lang].color])}>
          {content[lang].linkPath !== 'external' ? (
            <Link to={`/${lang}/${content[lang].link}`}>
              {content[lang].text}
            </Link>
          ) : (
            <a href={content[lang].link}>{content[lang].text}</a>
          )}
        </div>
      </div>
    )
  }
}

export default IconLinkBox
