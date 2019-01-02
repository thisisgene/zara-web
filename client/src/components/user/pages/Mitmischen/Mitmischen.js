import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  heroData,
  oneLineAlert,
  infoObj,
  quote,
  cardGridObject
} from './mitmischen_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import InfoBoxObject from '../../dashboard/InfoBoxObject/InfoBoxObject'
import QuoteBox from '../../dashboard/QuoteBox/QuoteBox'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

class Mitmischen extends Component {
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
            <OneLineAlert content={oneLineAlert} lang={lang} />
            <InfoBoxObject infoBox={infoObj} lang={lang} />
            <QuoteBox quote={quote} />
            <CardCollectionGridObject cardObject={cardGridObject} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Mitmischen)
