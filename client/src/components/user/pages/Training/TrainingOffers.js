import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withLocalize } from 'react-localize-redux'

import { getByProperty } from '../../../../actions/adminActions'

// import { heroData as workshops_vortraege_HeroData, longText as workshops_vortraege_Text } from './TrainingAdults_data'
import { data as dataObj } from './trainingOffers_data'

import { oneLineAlert, trainingBoxData } from './training_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import LongText from '../../dashboard/LongText/LongText'

import TrainingItemBox from '../../dashboard/TrainingItemBox/TrainingItemBoxNew'

class TrainingOffers extends Component {
  state = {
    trainingType: this.props.match.params.type,
    bulletins: [],
  }
  componentDidMount() {
    this.props.getByProperty('bulletin', 'tag', this.state.trainingType)
  }

  componentDidUpdate(prevProps) {
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

    // const dataObj = {
    //   //   worshops_vortraege: { hero: workshops_HeroData, text: workshops_Text },
    //   schulklassen: { hero: schulklassen_HeroData },

    //   erwachsenengruppen: {
    //     hero: erwachsenen_HeroData,
    //     text: erwachsenen_Text,
    //   },

    //   unternehmen: { hero: unternehmen_HeroData, text: unternehmen_Text },
    // }

    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && trainingType && bulletins && (
          <div>
            <HeroUnit data={dataObj[trainingType].heroData} lang={lang} />
            <OneLineAlert content={oneLineAlert} lang={lang} />
            {dataObj[trainingType].longText && (
              <LongText content={dataObj[trainingType].longText} lang={lang} />
            )}
            <div
              style={{
                maxWidth: '800px',
                margin: '3rem auto',
                textAlign: 'center',
              }}
            >
              <h3>
                {dataObj[trainingType].offerText &&
                  dataObj[trainingType].offerText[lang].title}
              </h3>
              <TrainingItemBox
                content={bulletins}
                category={trainingType}
                lang={lang}
              />
            </div>
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
