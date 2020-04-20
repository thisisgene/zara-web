import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withLocalize } from 'react-localize-redux'

import { getByProperty } from '../../../../actions/adminActions'

// import { heroData as workshops_vortraege_HeroData, longText as workshops_vortraege_Text } from './TrainingAdults_data'
import { data as dataObj } from './trainingOffers_data'
import { heroData as hero404 } from '../Other/404_data'
import { oneLineAlert, trainingBoxData } from './training_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import LongText from '../../dashboard/LongText/LongText'

import TrainingItemBox from '../../dashboard/TrainingItemBox/TrainingItemBoxNew'

import styles from './Training.module.sass'

class TrainingOffers extends Component {
  state = {
    trainingType: this.props.match.params.type,
    bulletins: [],
  }
  componentDidMount() {
    this.props.getByProperty('bulletin', 'tag', this.state.trainingType)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.type !== prevProps.match.params.type) {
      this.setState(
        {
          trainingType: this.props.match.params.type,
        },
        () => {
          this.props.getByProperty('bulletin', 'tag', this.state.trainingType)
        }
      )
    }
    if (this.props.bulletin !== prevProps.bulletin) {
      this.setState(
        {
          bulletins: this.props.bulletin.bulletins,
        },
        () => {
          console.log('BULLETINS: ', this.state.bulletins)
        }
      )
    }
  }

  render() {
    const { activeLanguage } = this.props
    const { trainingType, bulletins } = this.state
    let lang

    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && trainingType && bulletins && dataObj[trainingType] ? (
          <div>
            <HeroUnit data={dataObj[trainingType].heroData} lang={lang} />
            <OneLineAlert content={oneLineAlert} lang={lang} />
            {dataObj[trainingType].longText && (
              <LongText content={dataObj[trainingType].longText} lang={lang} />
            )}
            <div className={styles['training-box']}>
              <h4
                style={{
                  margin: '4rem 0 2rem',
                  textAlign: 'center',
                }}
              >
                {dataObj[trainingType].offerText &&
                  dataObj[trainingType].offerText[lang].title}
              </h4>
              {bulletins.length > 0 ? (
                <TrainingItemBox
                  content={bulletins}
                  category={trainingType}
                  lang={lang}
                />
              ) : (
                <p style={{ textAlign: 'center', margin: '4rem 0' }}>
                  {lang === 'de'
                    ? 'Zur Zeit keine Angebote.'
                    : 'No offers at the moment.'}
                </p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <HeroUnit data={hero404} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bulletin: state.bulletin,
})

export default connect(mapStateToProps, { getByProperty })(
  withLocalize(TrainingOffers)
)
