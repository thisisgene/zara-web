import React, { Component } from 'react'

import OneLineContainer from '../../dashboard/OneLineContainer/OneLineContainer'
import FooterContent from './FooterContent'

import styles from './Footer.module.sass'

const oneLineContent = {
  de: {
    socialMedia: {
      text: 'Folge uns:'
    },
    inputButtonBox: {
      inputPlaceholder: 'E-Mail-Adresse',
      button: {
        type: 'cta',
        text: 'Jetzt anmelden',
        link: 'de/subscribe'
      }
    },
    iconLinkBox: {
      icon: 'LockIcon',
      text: 'Verschlüsselte Email an ZARA',
      link: '/verschlüsselte_mail'
    }
  }
}

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

            <FooterContent />
          </div>
        )}
      </div>
    )
  }
}

export default Footer
