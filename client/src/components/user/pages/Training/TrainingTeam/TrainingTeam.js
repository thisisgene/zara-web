import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withLocalize } from 'react-localize-redux'

import { teamData, bottomData } from './trainingteam_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../dashboard/LongText/LongText'
import TeamMember from '../../Zara/WerWirSind/Team/TeamMember'

import styles from '../../Zara/WerWirSind/Team/Team.module.sass'

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
                <h1>ZARA Trainer*innen</h1>
              ) : (
                <h1>ZARA Trainers</h1>
              )}
              <div className={styles['team--gok']}>
                {teamData.teamMembers[lang]
                  .filter(member => member.field === 'training')
                  .map(member => (
                    <TeamMember content={member} />
                  ))}
              </div>
              <div className={styles['bottom-box']}>
                <div className={styles['bottom-box--image']}>
                  <img
                    src={`/assets/img/team/training/ZARA Training Team.jpg`}
                    alt="ZARA Training Team"
                  />
                </div>
                <div className={styles['bottom-box--text']}>
                  {bottomData &&
                    bottomData.map((item, index) => (
                      <div key={index}>
                        <h1>{item[lang].title}</h1>
                        <Link to={`/user/${lang}/${item[lang].textLink}`}>
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

export default withLocalize(Team)
