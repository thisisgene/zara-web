import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { heroData } from './404_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'

class PageNotFound extends Component {
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang ? (
          <div>
            <HeroUnit data={heroData} lang={lang} />
          </div>
        ) : (
          <div>
            <HeroUnit data={heroData} lang={'de'} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(PageNotFound)
