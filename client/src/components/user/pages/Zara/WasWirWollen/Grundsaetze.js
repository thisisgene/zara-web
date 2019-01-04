import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { infoData, infoData2, infoData3 } from './grundsaetze_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../dashboard/LongText/LongText'
import BigImage from '../../../dashboard/BigImage/BigImage'
import InfoBoxObject from '../../../dashboard/InfoBoxObject/InfoBoxObject'

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
            <InfoBoxObject infoBox={infoData} lang={lang} />
            <InfoBoxObject infoBox={infoData2} lang={lang} />
            <InfoBoxObject infoBox={infoData3} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Grundsaetze)
