import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  heroData,
  oneLineAlert,
  longText,
  videoBox,
  cardGridObject
} from './hasspostings_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import LongText from '../../dashboard/LongText/LongText'
import VideoBox from '../../dashboard/VideoBox/VideoBox'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

class HasspostingsMelden extends Component {
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
            <OneLineAlert content={oneLineAlert} lang={lang} />
            <LongText content={longText} lang={lang} />
            <VideoBox content={videoBox} lang={lang} />
            <CardCollectionGridObject cardObject={cardGridObject} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(HasspostingsMelden)
