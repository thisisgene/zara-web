import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withLocalize } from 'react-localize-redux'

import { getAllByProps } from '../../../../../actions/adminActions'

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
import ImageGridObjectDB from '../../../dashboard/ImageGridObject/ImageGridObjectDB'
import CardCollectionGridObject from '../../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

class RassismusReport extends Component {
  constructor() {
    super()
    this.state = {
      showSurvey: false
    }
  }
  componentDidMount() {
    this.props.getAllByProps('jahresberichte', 'rassismusreport')
  }
  onShowSurvey = e => {
    this.setState({
      showSurvey: true
    })
  }
  render() {
    const { activeLanguage, jahresberichte } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && jahresberichte && jahresberichte.jahresberichte && (
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

            {/* UNCOMMENT FOR RR FROM DB (ADMIN) */}
            {/* <ImageGridObjectDB
              shoppingCartText={shoppingCartText}
              content={jahresberichte.jahresberichte}
              withCart={true}
              lang={lang}
              onShowSurvey={this.onShowSurvey}
            /> */}

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

const mapStateToProps = state => ({
  jahresberichte: state.jahresberichte
})

export default withLocalize(
  connect(
    mapStateToProps,
    { getAllByProps }
  )(RassismusReport)
)

