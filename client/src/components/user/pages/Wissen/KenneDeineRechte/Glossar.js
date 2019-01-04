import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { heroData, glossarData } from './glossar_data'
// import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../dashboard/LongText/LongText'

class Glossar extends Component {
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
            <div>
              {glossarData &&
                glossarData.map(item => (
                  <LongText content={item} lang={lang} />
                ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Glossar)
