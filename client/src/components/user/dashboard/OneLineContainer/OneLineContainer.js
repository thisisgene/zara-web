import React, { Component } from 'react'

import SocialMediaFollowBox from '../SocialMediaFollowBox/SocialMediaFollowBox'
import InputButtonBox from '../InputButtonBox/InputButtonBox'

import styles from './OneLineContainer.module.sass'

export default class OneLineContainer extends Component {
  render() {
    const { contentObj } = this.props
    console.log(contentObj.socialMedia)
    return (
      <div>
        {contentObj && (
          <div className={styles['one-line-container']}>
            <div className={styles['one-line-item']}>
              <SocialMediaFollowBox content={contentObj.socialMedia} />
            </div>
            <div className={styles['one-line-item']}>
              <InputButtonBox content={contentObj.inputButtonBox} />
            </div>
            {/* <IconWithLinkBox /> */}
          </div>
        )}
      </div>
    )
  }
}
