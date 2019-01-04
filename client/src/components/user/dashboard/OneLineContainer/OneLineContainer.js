import React, { Component } from 'react'

import SocialMediaFollowBox from '../SocialMediaFollowBox/SocialMediaFollowBox'
import InputButtonBox from '../InputButtonBox/InputButtonBox'
import IconLinkBox from '../IconLinkBox/IconLinkBox'

import styles from './OneLineContainer.module.sass'

export default class OneLineContainer extends Component {
  render() {
    const { contentObj, newsletterInputId, lang } = this.props
    return (
      <div className={styles['one-line-container']}>
        {contentObj && (
          <div className={styles['one-line-wrapper']}>
            <div className={styles['one-line-item']}>
              <SocialMediaFollowBox content={contentObj.socialMedia[lang]} />
            </div>
            <div className={styles['one-line-item']}>
              <InputButtonBox
                content={contentObj.inputButtonBox[lang]}
                id={newsletterInputId}
              />
            </div>
            <div className={styles['one-line-item']}>
              <IconLinkBox content={contentObj.iconLinkBox} lang={lang} />
            </div>
          </div>
        )}
      </div>
    )
  }
}
