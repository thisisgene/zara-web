import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  heroDataRassismus,
  heroDataHassImNetz,
  multiPartOneLinerData,
  cardGridObject
} from './beratung_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import MultiPartOneLiner from '../../dashboard/MultiPartOneLiner/MultiPartOneLiner'
import MultiStepForm from '../../dashboard/MultiStepForm/MultiStepForm'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

class Report extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reportType: props.match.params.report
    }
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match &&
      this.props.match &&
      prevProps.match.params.report !== this.props.match.params.report
    ) {
      this.setState({
        reportType: this.props.match.params.report
      })
    }
  }
  render() {
    const { activeLanguage } = this.props
    let heroData =
      this.state.reportType === 'rassismus'
        ? heroDataRassismus
        : heroDataHassImNetz

    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && (
          <div>
            {heroData && <HeroUnit data={heroData} lang={lang} />}

            {multiPartOneLinerData && (
              <MultiPartOneLiner content={multiPartOneLinerData} lang={lang} />
            )}
            {MultiStepForm && <MultiStepForm />}
            <CardCollectionGridObject cardObject={cardGridObject} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Report)
