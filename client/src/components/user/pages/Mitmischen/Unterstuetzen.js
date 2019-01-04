import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { heroData, longText } from './unterstuetzen_data'
// import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../dashboard/LongText/LongText'

class Unterstuetzen extends Component {
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
            <HeroUnit data={heroData} lang={lang} />
            <LongText content={longText} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Unterstuetzen)
