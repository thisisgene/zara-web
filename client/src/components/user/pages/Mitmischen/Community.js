import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { heroData, longText, iconLink } from './community_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../dashboard/LongText/LongText'
import IconLinkBox from '../../dashboard/IconLinkBox/IconLinkBox'

class Community extends Component {
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
            <div
              style={{
                margin: '0 auto 4rem',
                padding: '0 2rem',
                maxWidth: '800px'
              }}
            >
              <IconLinkBox content={iconLink} lang={lang} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Community)
