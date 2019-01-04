import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { longText } from './impressum_data'

import LongText from '../../dashboard/LongText/LongText'

class Grundsaetze extends Component {
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
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Grundsaetze)
