import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withLocalize } from 'react-localize-redux'

import { teamData, bottomData } from './trainingteam_data'
import { getAllByProps } from '../../../../../actions/adminActions'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../dashboard/LongText/LongText'
import TeamMember from '../../Zara/WerWirSind/Team/TeamMember'

import styles from '../../Zara/WerWirSind/Team/Team.module.sass'

class Team extends Component {
  componentDidMount() {
    const queryArray = {
      tag: 'training',
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
    return (
      <div>
        {lang && teamData && team && (
          <div>
            <HeroUnit data={teamData.heroUnit} lang={lang} />
            <div className={styles['team-member-container']}>
              {lang && lang === 'de' ? (
                <h1>ZARA Trainer*innen</h1>
              ) : (
                <h1>ZARA Trainers</h1>
              )}
              <div className={styles['team--gok']}>
                {team
                  .filter(member => member.tag === 'training')
                  .map(member => (
                    <TeamMember lang={lang} content={member} />
                  ))}
              </div>
              <div className={styles['bottom-box']}>
                {/* <div className={styles['bottom-box--image']}>
                  <img
                    src={`/assets/img/team/training/ZARA Training Team.jpg`}
                    alt="ZARA Training Team"
                  />
                </div> */}
                <div className={styles['bottom-box--text']}>
                  {bottomData &&
                    bottomData.map((item, index) => (
                      <div key={index}>
                        <p style={{ fontWeight: 'bold', marginTop: '2rem' }}>
                          {item[lang].title}
                        </p>
                        <Link to={`/${lang}/${item[lang].textLink}`}>
                          {item[lang].text}
                        </Link>
                      </div>
                    ))}
                </div>
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
