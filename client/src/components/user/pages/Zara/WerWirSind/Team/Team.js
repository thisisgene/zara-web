import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { teamData } from './team_data'

import HeroUnit from '../../../../dashboard/HeroUnit/HeroUnit'

class Team extends Component {
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && teamData && <HeroUnit data={teamData.heroUnit} lang={lang} />}
      </div>
    )
  }
}

export default withLocalize(Team)
