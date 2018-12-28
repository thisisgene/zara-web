import React, { Component } from 'react'

import OneLineContainer from '../../dashboard/OneLineContainer/OneLineContainer'
import FooterContent from './FooterContent'

import { oneLineContent, footerContent } from './footer_data'

import styles from './Footer.module.sass'

class Footer extends Component {
  render() {
    const { lang } = this.props
    return (
      <div>
        {lang && (
          <div className={styles['footer']}>
            {oneLineContent && (
              <OneLineContainer contentObj={oneLineContent[lang]} />
            )}

            <FooterContent content={footerContent[lang]} />
          </div>
        )}
      </div>
    )
  }
}

export default Footer
