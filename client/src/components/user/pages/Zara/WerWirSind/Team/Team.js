import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withLocalize } from 'react-localize-redux'

import { teamData, supporters } from './team_data'

import { getAllByProps } from '../../../../../../actions/adminActions'

import HeroUnit from '../../../../dashboard/HeroUnit/HeroUnit'
import TeamMember from './TeamMember'

import styles from './Team.module.sass'

class Team extends Component {
  componentDidMount() {
    const queryArray = {
      tag: 'zara',
      isDeleted: false,
      isOnline: true
    }
    this.props.getAllByProps('team', queryArray)
  }
  render() {
    const { activeLanguage } = this.props
    const { team } = this.props.team
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    let teamHero
    let heroUnit
    if (team) {
      teamHero = team.filter(tm => tm.subCategory === 'heroUnit')
      heroUnit = {
        class: 'big-image',
        titleImage: teamHero[0] && teamHero[0].titleImage,
        de: {
          title: teamHero[0] && teamHero[0].de.title,
          text: teamHero[0] && teamHero[0].de.description
        },
        en: {
          title: teamHero[0] && teamHero[0].en.title,
          text: teamHero[0] && teamHero[0].en.description
        }
      }
    }
    return (
      <div>
        {lang && teamData && team && (
          <div>
            <HeroUnit
              data={teamHero[0] ? heroUnit : teamData.heroUnit}
              lang={lang}
            />
            <div className={styles['team-member-container']}>
              {lang && lang === 'de' ? (
                <h1>ZARA Vorstand</h1>
              ) : (
                  <h1>ZARA Vorstand</h1>
                )}
              <div id="vorstand" className={styles['team--gok']}>
                {team
                  .filter(member => member.subCategory === 'vorstand')
                  .map(member => (
                    <TeamMember lang={lang} content={member} />
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
                {team
                  .filter(member => member.subCategory === 'gok')
                  .map(member => (
                    <TeamMember lang={lang} content={member} />
                  ))}
              </div>
              {lang && lang === 'de' ? (
                <h1>ZARA Beratung</h1>
              ) : (
                  <h1>ZARA Consulting</h1>
                )}
              <div id="beratung" className={styles['team--gok']}>
                {team
                  .filter(member => member.subCategory === 'beratung')
                  .map(member => (
                    <TeamMember lang={lang} content={member} />
                  ))}
              </div>
              {lang && lang === 'de' ? (
                <h1>ZARA Training</h1>
              ) : (
                  <h1>ZARA Training</h1>
                )}
              <div id="training" className={styles['team--gok']}>
                {team
                  .filter(member => member.subCategory === 'training')
                  .map(member => (
                    <TeamMember lang={lang} content={member} />
                  ))}
              </div>
              <div style={{ margin: '2rem 0 4rem' }}>
                <i>Photo Credit: Johannes Zinner</i>
              </div>
              {lang && lang === 'de' ? (
                <div>
                  <h1>Unterstützer*innen seit 2018</h1>
                </div>
              ) : (
                  <div>
                    <h1>Supporters since 2018</h1>
                  </div>
                )}
              <div className={styles['team--gok']}>
                {team
                  .filter(member => member.subCategory === 'supporters')
                  .map(member => (
                    <TeamMember lang={lang} content={member} />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  team: state.team
})

export default withLocalize(
  connect(
    mapStateToProps,
    { getAllByProps }
  )(Team)
)
