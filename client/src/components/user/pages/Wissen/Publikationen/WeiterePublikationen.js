import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { weitereHeroData, weitereLongText } from './publikationen_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import NewsletterOneLineObject from '../../../dashboard/NewsletterOneLineObject/NewsletterOneLineObject'
import LongText from '../../../dashboard/LongText/LongText'

class WeiterePublikationen extends Component {
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
            <HeroUnit data={weitereHeroData} lang={lang} />
            <NewsletterOneLineObject lang={lang} />
            <LongText content={weitereLongText} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(WeiterePublikationen)
