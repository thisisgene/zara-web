import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  wasSieTunKoennenHeroData,
  wasSieTunKoennenInfoBox1,
  wasSieTunKoennenInfoBox2,
  wasSieTunKoennenCardGridObject
} from './beratung_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import InfoBoxObject from '../../dashboard/InfoBoxObject/InfoBoxObject'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

class WasSieTunKoennen extends Component {
  render() {
    const { activeLanguage } = this.props

    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && wasSieTunKoennenHeroData && (
          <div>
            <HeroUnit data={wasSieTunKoennenHeroData} lang={lang} />
            <InfoBoxObject infoBox={wasSieTunKoennenInfoBox1} lang={lang} />
            <InfoBoxObject infoBox={wasSieTunKoennenInfoBox2} lang={lang} />
            <CardCollectionGridObject
              cardObject={wasSieTunKoennenCardGridObject}
              lang={lang}
            />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(WasSieTunKoennen)
