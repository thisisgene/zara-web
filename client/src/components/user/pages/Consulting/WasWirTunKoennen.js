import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  wasSieTunKoennenHeroData,
  wasWirTunKoennenInfoBox1,
  wasWirTunKoennenInfoBox2,
  wasWirTunKoennenCardGridObject
} from './beratung_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import InfoBoxObject from '../../dashboard/InfoBoxObject/InfoBoxObject'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

class WasWirTunKoennen extends Component {
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
            <InfoBoxObject infoBox={wasWirTunKoennenInfoBox1} lang={lang} />
            <InfoBoxObject infoBox={wasWirTunKoennenInfoBox2} lang={lang} />
            <CardCollectionGridObject
              cardObject={wasWirTunKoennenCardGridObject}
              lang={lang}
            />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(WasWirTunKoennen)
