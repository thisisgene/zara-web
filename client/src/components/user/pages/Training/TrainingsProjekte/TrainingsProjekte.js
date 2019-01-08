import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { heroData, longText, projectData } from './trainingsprojekte_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../dashboard/LongText/LongText'

class TrainingsProjekte extends Component {
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
            <LongText content={longText} lang={lang} />
            {projectData &&
              projectData.map(item => <LongText content={item} lang={lang} />)}
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(TrainingsProjekte)
