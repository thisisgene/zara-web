import React, { Component } from 'react'

import cx from 'classnames'
import styles from './CollapsibleItem.module.sass'

export default class CollapsibleItem extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false
    }
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    const { content, lang } = this.props
    return (
      <div className={styles['collapsible-item']}>
        <div
          onClick={this.toggleCollapse}
          className={styles['collapsible-item--title']}
        >
          <div
            className={cx(styles['collapsible-item--title__icon'], {
              [styles['collapsed']]: this.state.collapsed
            })}
          />
          <h1>{content[lang].title}</h1>
        </div>
        {!this.state.collapsed && (
          <div className={styles['collapsible-item--links']}>
            {content.files[lang] &&
              content.files[lang].map(file => (
                <div>
                  <a
                    // target="blank"
                    href={`https://assets.zara.or.at/media/jahresberichte/${
                      file.value
                    }`}
                  >
                    {file.value}
                  </a>
                </div>
              ))}
          </div>
        )}
      </div>
    )
  }
}
