import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { heroData, longText } from './trainingUnternehmen_data'
// import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import NewsletterOneLineObject from '../../dashboard/NewsletterOneLineObject/NewsletterOneLineObject'
import LongText from '../../dashboard/LongText/LongText'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

class TrainingUnternehmen extends Component {
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
            {/* <NewsletterOneLineObject lang={lang} /> */}
            <LongText content={longText} lang={lang} />
            {/* <CardCollectionGridObject cardObject={cardGridObject} lang={lang} /> */}
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(TrainingUnternehmen)
