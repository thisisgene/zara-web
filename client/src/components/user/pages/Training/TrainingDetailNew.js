import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withLocalize } from 'react-localize-redux'

import MetaTags from 'react-meta-tags'

import {
  trainingBoxData,
  trainingItems,
  oneLineAlertDetail,
} from './training_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import TrainingItem from '../../dashboard/TrainingItemBox/TrainingItem'
import IconObject from '../../dashboard/IconObject/IconObject'

import { getAll, getById } from '../../../../actions/adminActions'

import cx from 'classnames'
import styles from './TrainingDetail.module.sass'
import parentStyles from './Training.module.sass'
import TrainingUnternehmen from './TrainingUnternehmen'

class TrainingDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trainingId: props.match.params.trainingId,
      bulletin: {},
    }
  }
  componentDidMount() {
    this.props.getById(this.state.trainingId, 'bulletins')
    // console.log('BULLETINS: ', this.state.trainingId);
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match &&
      this.props.match &&
      prevProps.match.params.trainingId !== this.props.match.params.trainingId
    ) {
      this.setState({
        trainingId: this.props.match.params.trainingId,
      })
    }
    if (
      this.props.bulletin != prevProps.bulletin &&
      this.props.bulletin.bulletin
    ) {
      this.setState({ bulletin: this.props.bulletin.bulletin }, () =>
        console.log('state.buletin: ', this.state.bulletin)
      )
    }
  }

  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    const { bulletin } = this.props.bulletin
    console.log('bulletin: ', bulletin)

    return (
      <div>
        {bulletin && lang && (
          <div>
            <MetaTags>
              <title>ZARA | {bulletin[lang].title}</title>
              <meta
                name="description"
                content={bulletin[lang].shortDescription}
              />
              <meta
                property="og:title"
                content={`ZARA | ${bulletin[lang].title}`}
              />
              <meta
                property="og:image"
                content={`/assets/media/${bulletin.titleImage.category}/${bulletin.titleImage.originalName}`}
              />
            </MetaTags>
            <div className={styles['training-detail']}>
              <HeroUnit
                data={{
                  ...bulletin,
                  de: { ...bulletin.de, text: bulletin.de.shortDescription },
                  en: { ...bulletin.en, text: bulletin.en.shortDescription },
                }}
                lang={lang}
              />
              <OneLineAlert
                content={oneLineAlertDetail}
                type="togglePopupForm"
                popUpPreSelectId={bulletin._id}
                lang={lang}
              />

              <div
                className={styles['training-detail--text']}
                dangerouslySetInnerHTML={{ __html: bulletin[lang].description }}
              />
              {bulletin[lang].list1 && (
                <div className={styles['training-detail--list']}>
                  <ul>
                    {bulletin[lang].list1.map((item, index) => (
                      <li key={index}>
                        <IconObject image="arrowRight" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {bulletin[lang].detailText2 && (
                <div
                  className={styles['training-detail--text']}
                  dangerouslySetInnerHTML={{
                    __html: bulletin[lang].detailText2,
                  }}
                />
              )}
              {bulletin[lang].list2 && (
                <div className={styles['training-detail--list']}>
                  <ul>
                    {bulletin[lang].list2.map((item, index) => (
                      <li key={index}>
                        <IconObject image="arrowRight" />
                        {item.text}
                      </li>
                    ))}
                  </ul>{' '}
                </div>
              )}
              {bulletin[lang].goals && (
                <div className={styles['training-detail--goals']}>
                  <div>{bulletin[lang].goals.title}</div>
                  <ul className={styles['training-detail--list']}>
                    {bulletin[lang].goals.list.map((item, index) => (
                      <li key={index}>
                        <IconObject image="arrowRight" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {bulletin[lang].testimonials && (
                <div className={styles['training-detail--testimonials']}>
                  <h1>{lang === 'de' ? 'Referenzen' : 'Testimonials'}</h1>
                  {trainingBoxData[lang].categories
                    .filter(cat => cat.index === bulletin.category)
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
                        <Link to={`/${lang}/bulletin/referenzen`}>
                          {lang === 'de' ? 'Mehr anzeigen' : 'Show more'}
                        </Link>
                      </div>
                    ))}
                </div>
              )}
              {bulletin.related && (
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
                    {bulletin.related.map(rel =>
                      this.state.bulletins
                        .filter(item => item._id === rel.id)
                        .map((item, index) => (
                          <div key={index}>
                            <TrainingItem content={item} lang={lang} />
                          </div>
                        ))
                    )}

                    <Link to={`/${lang}/bulletins/kinder_jugendliche`}>
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
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bulletin: state.bulletin,
})

export default withLocalize(
  connect(mapStateToProps, { getById })(TrainingDetail)
)
