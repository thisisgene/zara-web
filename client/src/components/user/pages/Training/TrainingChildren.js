import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { heroData } from './TrainingChildren_data'
import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import TrainingItemBox from '../../dashboard/TrainingItemBox/TrainingItemBox'

class TrainingChildren extends Component {
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
            <OneLineAlert content={oneLineAlert} lang={lang} />
            <div
              style={{
                maxWidth: '800px',
                margin: '3rem auto',
                textAlign: 'center'
              }}
            >
              {lang === 'de' ? (
                <h3>
                  ZARA Training bietet folgende fünf Workshopformate für Kinder
                  und Jugendliche an:
                </h3>
              ) : (
                <h3>
                  ZARA Training bietet folgende fünf Workshopformate für Kinder
                  und Jugendliche an:
                </h3>
              )}
            </div>
            <TrainingItemBox
              content={trainingItems}
              category={'1'}
              lang={lang}
            />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(TrainingChildren)
