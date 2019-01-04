import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { heroData, longText, teamImage } from './waswirwollen_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../dashboard/LongText/LongText'
import BigImage from '../../../dashboard/BigImage/BigImage'

class WasWirWollen extends Component {
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
            <BigImage image={teamImage} alt={teamImage} />
            <div style={{ height: '4rem' }} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(WasWirWollen)
