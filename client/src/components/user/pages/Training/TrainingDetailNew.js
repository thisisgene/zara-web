import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withLocalize } from 'react-localize-redux'

import MetaTags from 'react-meta-tags'

import {
  trainingBoxData,
  oneLineAlertDetail,
  trainingTags
} from './training_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import TrainingItem from '../../dashboard/TrainingItemBox/TrainingItemNew'
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
    this.props.getAll('bulletins')
    this.props.getById(this.state.trainingId, 'bulletins')
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
      this.setState({ bulletin: this.props.bulletin.bulletin })
    }
  }

  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    const { bulletin, bulletins } = this.props.bulletin

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
              {bulletins &&
                <div className={styles['training-detail--suggestions']}>
                  <h1>
                    {lang === 'de'
                      ? 'Weitere Workshopempfehlungen'
                      : 'More workshop suggestions'}
                  </h1>
                  <div
                    className={cx(
                      styles['training-detail--suggestions__wrapper'],
                      parentStyles['training-box--content']
                    )}
                  >
                    {bulletins.filter(item => item.category.value === bulletin.category.value)
                      .filter((item) => item._id !== bulletin._id)

                      .map((item, i, array) => (
                        <Fragment>
                          {i < 2 &&
                            (<div key={i}>
                              <TrainingItem item={item} lang={lang} />
                            </div>)}
                        </Fragment>
                      )

                      )}

                    <Link to={`/${lang}/training/angebote/${bulletin.category.value}`}>
                      <div
                        className={cx(
                          styles['more-info'],
                          parentStyles['training-item']
                        )}
                      >
                        <h1>
                          {bulletin.category.value === 'workshops_vortraege' || bulletin.category.value === 'aktuelle_trainingsprojekte' ?
                            lang === 'de'
                              ? `Mehr ${trainingTags.filter(tag => tag.name === bulletin.category.value).map(tag => tag[lang].title)}`
                              : `More ${trainingTags.filter(tag => tag.name === bulletin.category.value).map(tag => tag[lang].title)}`
                            : lang === 'de'
                              ? `Mehr zu Trainings für ${trainingTags.filter(tag => tag.name === bulletin.category.value).map(tag => tag[lang].title)}`
                              : `More Trainings for ${trainingTags.filter(tag => tag.name === bulletin.category.value).map(tag => tag[lang].title)}`}
                        </h1>
                        <IconObject image="arrowButtonRight" />
                      </div>
                    </Link>
                  </div>
                </div>}

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
  connect(mapStateToProps, { getAll, getById })(TrainingDetail)
)
