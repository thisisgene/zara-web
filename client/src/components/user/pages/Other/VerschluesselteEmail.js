import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withLocalize } from 'react-localize-redux'

import { longText } from './verschluesselteemail_data'

import LongText from '../../dashboard/LongText/LongText'

class VerschluesselteEmail extends Component {
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && (
          <div>
            <div style={{ height: '3rem' }} />
            <LongText content={longText} lang={lang} />
            <div style={{ textAlign: 'center', margin: '-3rem auto 5rem' }}>
              <a
                style={{ color: '#050505' }}
                href="https://assets.zara.or.at/pgp/public_key.txt"
              >
                ZARA-BERATUNG Public Key
              </a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(VerschluesselteEmail)
