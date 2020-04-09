import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  heroData,
  longText,
  longText2,
  longText3,
} from './wokshopSchenken_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../dashboard/LongText/LongText'
import IconLinkBox from '../../dashboard/IconLinkBox/IconLinkBox'

class WorkshopSchenken extends Component {
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
            <LongText content={longText2} lang={lang} />
            <LongText content={longText3} lang={lang} />
            <div
              style={{
                margin: '0 auto 4rem',
                padding: '0 2rem',
                maxWidth: '800px',
              }}
            >
              {/* <IconLinkBox content={iconLink} lang={lang} /> */}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(WorkshopSchenken)
