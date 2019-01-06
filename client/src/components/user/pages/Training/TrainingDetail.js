import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withLocalize } from 'react-localize-redux'

import {
  trainingBoxData,
  trainingItems,
  oneLineAlertDetail
} from './training_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import TrainingItem from '../../dashboard/TrainingItemBox/TrainingItem'
import IconObject from '../../dashboard/IconObject/IconObject'

import cx from 'classnames'
import styles from './TrainingDetail.module.sass'
import parentStyles from './Training.module.sass'

class TrainingDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trainingId: props.match.params.trainingId
    }
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match &&
      this.props.match &&
      prevProps.match.params.trainingId !== this.props.match.params.trainingId
    ) {
      this.setState({
        trainingId: this.props.match.params.trainingId
      })
    }
  }
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    const trainingArray = trainingItems.items.filter(
      item => item._id === this.state.trainingId
    )
    let training
    if (lang) {
      training = trainingArray[0]
    }
    return (
      <div>
        {training && lang && (
          <div className={styles['training-detail']}>
            <HeroUnit data={training} lang={lang} />
            <OneLineAlert content={oneLineAlertDetail} lang={lang} />
            <div
              className={styles['training-detail--text']}
              dangerouslySetInnerHTML={{ __html: training[lang].detailText }}
            />
            {training[lang].list1 && (
              <div className={styles['training-detail--list']}>
                <ul>
                  {training[lang].list1.map((item, index) => (
                    <li key={index}>
                      <IconObject image="arrowRight" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {training[lang].detailText2 && (
              <div
                className={styles['training-detail--text']}
                dangerouslySetInnerHTML={{ __html: training[lang].detailText2 }}
              />
            )}
            {training[lang].list2 && (
              <div className={styles['training-detail--list']}>
                <ul>
                  {training[lang].list2.map((item, index) => (
                    <li key={index}>
                      <IconObject image="arrowRight" />
                      {item.text}
                    </li>
                  ))}
                </ul>{' '}
              </div>
            )}
            {training[lang].goals && (
              <div className={styles['training-detail--goals']}>
                <div>{training[lang].goals.title}</div>
                <ul className={styles['training-detail--list']}>
                  {training[lang].goals.list.map((item, index) => (
                    <li key={index}>
                      <IconObject image="arrowRight" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {training[lang].testimonials && (
              <div className={styles['training-detail--testimonials']}>
                <h1>{lang === 'de' ? 'Referenzen' : 'Testimonials'}</h1>
                {trainingBoxData[lang].categories
                  .filter(cat => cat.index === training.category)
                  .map(cat => (
                    <div
                      className={
                        styles['training-detail--testimonials__wrapper']
                      }
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
            )}
            {training.related && (
              <div className={styles['training-detail--suggestions']}>
                <h1>
                  {lang === 'de'
                    ? 'Weitere Workshop Empfehlungen'
                    : 'More workshop suggestions'}
                </h1>
                <div
                  className={cx(
                    styles['training-detail--suggestions__wrapper'],
                    parentStyles['training-box--content']
                  )}
                >
                  {training.related.map(rel =>
                    trainingItems.items
                      .filter(item => item._id === rel.id)
                      .map((item, index) => (
                        <div key={index}>
                          <TrainingItem content={item} lang={lang} />
                        </div>
                      ))
                  )}

                  <Link to={`/user/${lang}/trainings/kinder_jugendliche`}>
                    <div
                      className={cx(
                        styles['more-info'],
                        parentStyles['training-item']
                      )}
                    >
                      <h1>
                        {lang === 'de'
                          ? 'Mehr zu Trainings für Kinder & Jugendliche'
                          : 'More Trainings for Children'}
                      </h1>
                      <IconObject image="arrowButtonRight" />
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(TrainingDetail)
