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
              <a target="blank" href="https://www.facebook.com/zara.or.at/">
                <IconObject image="fbLogo" />
              </a>
              <a target="blank" href="https://twitter.com/counteract_hass">
                <IconObject image="twitterLogo" />
              </a>
              <a
                target="blank"
                href="https://www.instagram.com/zara.zivilcourage/"
              >
                <IconObject image="instaLogo" />
              </a>
              <a target="blank" href="https://www.youtube.com/user/VereinZara">
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
