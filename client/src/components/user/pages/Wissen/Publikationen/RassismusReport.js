import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  heroData,
  longText,
  cardGridObject,
  shoppingCartText,
  reportGridData
} from './rassismusReport_data'
// import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import NewsletterOneLineObject from '../../../dashboard/NewsletterOneLineObject/NewsletterOneLineObject'
import SurveyPopUp from '../../../dashboard/SurveyPopUp/SurveyPopUp'
import LongText from '../../../dashboard/LongText/LongText'
import ImageGridObject from '../../../dashboard/ImageGridObject/ImageGridObject'
import CardCollectionGridObject from '../../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

class RassismusReport extends Component {
  constructor() {
    super()
    this.state = {
      showSurvey: false
    }
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.onShowSurvey()
    // }, 5000)
  }
  onShowSurvey = e => {
    this.setState({
      showSurvey: true
    })
  }
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
            <NewsletterOneLineObject lang={lang} />
            {this.state.showSurvey && (
              <SurveyPopUp
                url={
                  'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd4kPG6Z9g_2BPXgvECnXAkEwp_2FjHiK5RFD5M2ltZl4x7vQ.js'
                }
              />
            )}
            <LongText content={longText} lang={lang} />
            <ImageGridObject
              shoppingCartText={shoppingCartText}
              content={reportGridData}
              withCart={true}
              lang={lang}
              onShowSurvey={this.onShowSurvey}
            />
            <CardCollectionGridObject cardObject={cardGridObject} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(RassismusReport)
