import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { teamData, supporters } from './team_data'

import HeroUnit from '../../../../dashboard/HeroUnit/HeroUnit'
import TeamMember from './TeamMember'

import styles from './Team.module.sass'

class Team extends Component {
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && teamData && (
          <div>
            <HeroUnit data={teamData.heroUnit} lang={lang} />
            <div className={styles['team-member-container']}>
              {lang && lang === 'de' ? (
                <h1>ZARA Vorstand</h1>
              ) : (
                <h1>ZARA Vorstand</h1>
              )}
              <div id="vorstand" className={styles['team--vorstand']}>
                {teamData.teamMembers[lang]
                  .filter(member => member.field === 'vorstand')
                  .map(member => (
                    <TeamMember content={member} />
                  ))}
              </div>
              {lang && lang === 'de' ? (
                <h1>
                  ZARA Geschäftsführung, Öffentlichkeitsarbeit &
                  Kooperationskoordination
                </h1>
              ) : (
                <h1>
                  ZARA Geschäftsführung, Öffentlichkeitsarbeit &
                  Kooperationskoordination
                </h1>
              )}
              <div id="gok" className={styles['team--gok']}>
                {teamData.teamMembers[lang]
                  .filter(member => member.field === 'gok')
                  .map(member => (
                    <TeamMember content={member} />
                  ))}
              </div>
              {lang && lang === 'de' ? (
                <h1>ZARA Beratung</h1>
              ) : (
                <h1>ZARA Consulting</h1>
              )}
              <div id="beratung" className={styles['team--gok']}>
                {teamData.teamMembers[lang]
                  .filter(member => member.field === 'beratung')
                  .map(member => (
                    <TeamMember content={member} />
                  ))}
              </div>
              {lang && lang === 'de' ? (
                <h1>ZARA Training</h1>
              ) : (
                <h1>ZARA Training</h1>
              )}
              <div id="training" className={styles['team--gok']}>
                {teamData.teamMembers[lang]
                  .filter(member => member.field === 'training')
                  .map(member => (
                    <TeamMember content={member} />
                  ))}
              </div>
              {lang && lang === 'de' ? (
                <div>
                  <h1>Unterstützer*innen ab 2018</h1>
                  <div
                    style={{ marginBottom: '6rem' }}
                    dangerouslySetInnerHTML={{ __html: supporters.text }}
                  />
                </div>
              ) : (
                <div>
                  <h1>Supporters since 2018</h1>
                  <p>
                    ZARA wird stets von vielen ehrenamtlichen Mitarbeiter*innen
                    und Unterstützer*innen begleitet, die nicht alle auf dieser
                    Seite genannt werden können.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Team)
