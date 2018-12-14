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
        type: 'default',
        text: 'Newsletter abonnieren'
      }
    },
    iconLinkBox: {
      icon: 'LockIcon',
      text: 'Verschlüsselte Email an ZARA',
      link: '/verschlüsselte_mail'
    }
  },
  en: {
    socialMedia: {
      text: 'Follow us:'
    },
    inputButtonBox: {
      inputPlaceholder: 'E-mail Address',
      button: {
        type: 'default',
        text: 'Subscribe to newsletter'
      }
    },
    iconLinkBox: {
      icon: 'LockIcon',
      text: 'Encrypted e-mail to ZARA',
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
