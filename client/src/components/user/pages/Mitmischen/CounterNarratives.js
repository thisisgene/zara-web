import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { heroData, infoObj, cardGridObject } from './counterNarratives_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import InfoBoxObject from '../../dashboard/InfoBoxObject/InfoBoxObject'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

class CounterNarratives extends Component {
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
            <InfoBoxObject infoBox={infoObj} lang={lang} />
            <CardCollectionGridObject cardObject={cardGridObject} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(CounterNarratives)
