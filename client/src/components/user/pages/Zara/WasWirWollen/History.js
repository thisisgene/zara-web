import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { longText } from './history_data'
// import { oneLineAlert, trainingItems } from './training_data'

import LongText from '../../../dashboard/LongText/LongText'

class History extends Component {
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

export default withLocalize(History)
