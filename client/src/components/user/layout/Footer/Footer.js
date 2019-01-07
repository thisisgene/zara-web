import React, { Component } from 'react'

import OneLineContainer from '../../dashboard/OneLineContainer/OneLineContainer'
import FooterContent from './FooterContent'

import { oneLineContent, footerContent } from './footer_data'

import styles from './Footer.module.sass'

class Footer extends Component {
  render() {
    const { lang, type } = this.props
    return (
      <div>
        {lang && (
          <div className={styles['footer']}>
            {oneLineContent && !type && type !== 'small' && (
              <OneLineContainer contentObj={oneLineContent} lang={lang} />
            )}

            <FooterContent
              type={type}
              content={footerContent[lang]}
              lang={lang}
            />
          </div>
        )}
      </div>
    )
  }
}

export default Footer
