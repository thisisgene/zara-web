import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { heroData, longText, networkData } from './netzwerke_data'
// import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../dashboard/LongText/LongText'
import MosaikGridObject from '../../../dashboard/MosaikGridObject/MosaikGridObject'

class Netzwerke extends Component {
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
            {networkData &&
              networkData.map(item => <LongText content={item} lang={lang} />)}
            {/* <MosaikGridObject content={networkData} lang={lang} /> */}
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Netzwerke)
