import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../dashboard/LongText/LongText'

import { heroData, longText } from './rechtshilfefonds_data'

class Rechtshilfefonds extends Component {
  render() {
    const { activeLanguage } = this.props

    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        <HeroUnit data={heroData} lang={lang} />
        {lang && <LongText content={longText} lang={lang} />}
      </div>
    )
  }
}

export default withLocalize(Rechtshilfefonds)