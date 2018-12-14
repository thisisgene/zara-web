import React, { Component } from 'react'

import OneLineContainer from '../../dashboard/OneLineContainer/OneLineContainer'

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
      icon: 'lock',
      text: 'Verschlüsselte Email an ZARA'
    }
  }
}

class Footer extends Component {
  render() {
    const { lang } = this.props
    return (
      <div>
        {lang && <OneLineContainer contentObj={oneLineContent[lang]} />}
      </div>
    )
  }
}

export default Footer
