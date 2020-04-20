import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  heroData,
  oneLineAlert,
  trainingBoxData,
  trainingItems,
  cardGridObject,
} from './training_data'
import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import TrainingBox from './TrainingBoxNew'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

class Training extends Component {
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
            <OneLineAlert
              content={oneLineAlert}
              type="togglePopupForm"
              lang={lang}
            />
            <TrainingBox
              content={trainingBoxData}
              trainingItems={trainingItems}
              lang={lang}
            />
            <CardCollectionGridObject cardObject={cardGridObject} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Training)
