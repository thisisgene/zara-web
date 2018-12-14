import React, { Component } from 'react'

import IconObject from '../IconObject/IconObject'

import styles from './SocialMediaFollowBox.module.sass'

class SocialMediaFollowBox extends Component {
  render() {
    const { content } = this.props
    return (
      <div>
        {content && (
          <div className={styles['social-media-box']}>
            <p>{content.text}</p>
            <div className={styles['icon-box']}>
              <a target="blank" href="http://facebook.com">
                <IconObject image="fbLogo" />
              </a>
              <a target="blank" href="http://twitter.com">
                <IconObject image="twitterLogo" />
              </a>
              <a target="blank" href="http://instagram.com">
                <IconObject image="instaLogo" />
              </a>
              <a target="blank" href="http://youtube.com">
                <IconObject image="ytLogo" />
              </a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default SocialMediaFollowBox
