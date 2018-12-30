import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withLocalize } from 'react-localize-redux'

import { trainingBoxData, oneLineAlertDetail } from './training_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'

import styles from './TrainingDetail.module.sass'

class TrainingDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trainingId: props.match.params.trainingId
    }
    console.log(this.state.trainingId)
  }
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    const trainingArray = trainingBoxData.items.filter(
      item => item._id === this.state.trainingId
    )
    let training
    if (lang) {
      training = trainingArray[0]
    }
    console.log('training: ', training)
    return (
      <div>
        {training && lang && (
          <div className={styles['training-detail']}>
            <HeroUnit data={training} lang={lang} />
            <OneLineAlert content={oneLineAlertDetail} lang={lang} />
            <div className={styles['training-detail--text']}>
              {training[lang].detailText}
            </div>
            <div className={styles['training-detail--testimonials']}>
              <div className={styles['training-detail--testimonials__title']}>
                {lang === 'de' ? 'Referenzen' : 'Testimonials'}
              </div>
              {trainingBoxData[lang].categories
                .filter(cat => cat.index === training.category)
                .map(cat => (
                  <div
                    className={styles['training-detail--testimonials__wrapper']}
                  >
                    {cat.testimonials &&
                      cat.testimonials.map((testimonial, index) => (
                        <div key={index}>
                          {index <= 3 && (
                            <div className={styles['testimonial-item']}>
                              {testimonial.link ? (
                                <a href={testimonial.link}>
                                  {testimonial.name}
                                </a>
                              ) : (
                                <div>{testimonial.name}</div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    <Link to={`/user/${lang}/training/referenzen`}>
                      {lang === 'de' ? 'Mehr anzeigen' : 'Show more'}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(TrainingDetail)
