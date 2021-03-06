import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  heroDataRassismus,
  heroDataHassImNetz,
  oneLineAlertReport,
  heroDataMelden,
  multiPartOneLinerData,
  cardGridObject
} from './beratung_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import MultiStepForm from '../../dashboard/MultiStepForm/MultiStepForm'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

class Report extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   reportType: props.match.params.report
    // }
  }
  componentDidUpdate(prevProps) {
    // if (
    //   prevProps.match &&
    //   this.props.match &&
    //   prevProps.match.params.report !== this.props.match.params.report
    // ) {
    //   this.setState({
    //     reportType: this.props.match.params.report
    //   })
    // }
  }
  render() {
    const { activeLanguage } = this.props
    // let heroData =
    //   this.state.reportType === 'rassismus'
    //     ? heroDataRassismus
    //     : heroDataHassImNetz

    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && (
          <div>
            <HeroUnit data={heroDataMelden} lang={lang} />
            <OneLineAlert content={oneLineAlertReport} lang={lang} />

            {MultiStepForm && <MultiStepForm lang={lang} />}
            <CardCollectionGridObject cardObject={cardGridObject} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Report)
