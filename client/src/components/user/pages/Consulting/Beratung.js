import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  heroDataBeratungRassismus,
  oneLineAlert,
  beratungInfoBox
} from './beratung_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import InfoBoxObject from '../../dashboard/InfoBoxObject/InfoBoxObject'

class Beratung extends Component {
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {heroDataBeratungRassismus && lang && beratungInfoBox && (
          <div>
            <HeroUnit data={heroDataBeratungRassismus} lang={lang} />
            <OneLineAlert content={oneLineAlert} lang={lang} />
            <div style={{ margin: '3rem 0' }}>
              <InfoBoxObject infoBox={beratungInfoBox} lang={lang} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Beratung)
